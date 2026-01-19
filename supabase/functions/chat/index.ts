import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are an AI assistant for KOSMARA, a lead qualification service for businesses.
Your job is NOT to sell. Your job is to FILTER and STRUCTURE leads professionally.

CORE RULES:
- Ask ONLY one question per turn.
- Do not invent information.
- Be calm, professional, non-salesy.
- Respect user refusal at any point.
- Follow the user's language (Indonesian or English).

QUESTION ORDER (ask one at a time):
1) First, greet and ask: "Apa tujuan bisnis Anda saat ini?" / "What is your current business goal?"
2) Then ask: "Jenis bisnis apa yang Anda jalankan?" / "What type of business do you run?"
3) Then ask: "Apa tantangan atau masalah utama yang Anda hadapi?" / "What is your main challenge or problem?"
4) Finally ask: "Seberapa mendesak kebutuhan Anda untuk menyelesaikan ini?" / "How urgent is your need to solve this?"

After collecting all 4 answers:
1) Produce ONE clear paragraph summary of their situation.
2) Ask (optional): "Boleh tahu nama panggilan Anda? (opsional)" / "May I know your name? (optional)"
3) Ask (optional, only once): "Boleh saya simpan nomor WhatsApp Anda untuk follow-up? (opsional)" / "May I save your WhatsApp number for follow-up? (optional)"
4) Then ask CONSENT (MANDATORY): "Boleh kami menyimpan ringkasan ini agar tim bisa menindaklanjuti dengan lebih rapi?" / "May we save this summary so the team can follow up properly?"

If consent is YES, output the following format EXACTLY (include the markers):

[LEAD_DATA_START]
{
  "name": "user name or empty",
  "business_type": "their business type",
  "business_goal": "their goal",
  "main_problem": "their main problem",
  "urgency_level": "their urgency",
  "whatsapp_number": "number if provided or empty",
  "language": "id or en",
  "summary": "one paragraph summary"
}
[LEAD_DATA_END]

After outputting the lead data, say: "Terima kasih! Data Anda telah disimpan. Silakan klik tombol WhatsApp di bawah untuk berbicara langsung dengan tim kami." / "Thank you! Your data has been saved. Please click the WhatsApp button below to speak directly with our team."

If consent is NO, do NOT output [LEAD_DATA_START]. Just say thank you and still offer the WhatsApp button option.

IMPORTANT:
- Never skip the consent question.
- Never fabricate data.
- If user gives partial info, work with what you have.
- Stay professional and helpful.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language = "id" } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    const systemMessage = {
      role: "system",
      content: SYSTEM_PROMPT + `\n\nCurrent conversation language preference: ${language === "id" ? "Indonesian" : "English"}. Respond in this language.`,
    };

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [systemMessage, ...messages],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content || "";

    // Check if lead data is present in the response
    const leadDataMatch = assistantMessage.match(/\[LEAD_DATA_START\]\s*([\s\S]*?)\s*\[LEAD_DATA_END\]/);
    let leadSaved = false;
    let leadData = null;

    if (leadDataMatch) {
      try {
        leadData = JSON.parse(leadDataMatch[1].trim());

        // Save to database
        const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
        const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const { error } = await supabase.from("leads").insert({
          name: leadData.name || null,
          business_type: leadData.business_type,
          business_goal: leadData.business_goal,
          main_problem: leadData.main_problem,
          urgency_level: leadData.urgency_level,
          whatsapp_number: leadData.whatsapp_number || null,
          language: leadData.language || language,
          summary: leadData.summary,
          consent_given: true,
          status: "new",
          source: "kosmara_chatbot",
        });

        if (error) {
          console.error("Error saving lead:", error);
        } else {
          leadSaved = true;
        }
      } catch (parseError) {
        console.error("Error parsing lead data:", parseError);
      }
    }

    // Clean the response by removing the lead data markers
    const cleanedMessage = assistantMessage
      .replace(/\[LEAD_DATA_START\][\s\S]*?\[LEAD_DATA_END\]/g, "")
      .trim();

    return new Response(
      JSON.stringify({
        message: cleanedMessage,
        leadSaved,
        leadData: leadSaved ? leadData : null,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    console.error("Error in chat function:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

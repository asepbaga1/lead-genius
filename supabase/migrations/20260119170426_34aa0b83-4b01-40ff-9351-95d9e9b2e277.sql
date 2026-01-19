-- Create leads table for storing qualified leads
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT,
  business_type TEXT NOT NULL,
  business_goal TEXT NOT NULL,
  main_problem TEXT NOT NULL,
  urgency_level TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'id',
  whatsapp_number TEXT,
  summary TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  consent_given BOOLEAN NOT NULL DEFAULT false,
  source TEXT NOT NULL DEFAULT 'kosmara_chatbot'
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert from backend/edge functions (service role)
-- No public insert allowed
CREATE POLICY "Allow service role insert" 
ON public.leads 
FOR INSERT 
TO service_role
WITH CHECK (true);

-- Policy: Allow authenticated users to read leads
CREATE POLICY "Authenticated users can read leads" 
ON public.leads 
FOR SELECT 
TO authenticated
USING (true);

-- Policy: Allow authenticated users to update leads
CREATE POLICY "Authenticated users can update leads" 
ON public.leads 
FOR UPDATE 
TO authenticated
USING (true)
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
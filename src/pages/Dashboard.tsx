import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { Download, RefreshCw } from "lucide-react";
import { format } from "date-fns";

interface Lead {
  id: string;
  created_at: string;
  name: string | null;
  business_type: string;
  business_goal: string;
  main_problem: string;
  urgency_level: string;
  language: string;
  status: string;
  consent_given: boolean;
  summary: string;
}

const Dashboard = () => {
  const { t } = useLanguage();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  const fetchLeads = async () => {
    setLoading(true);
    let query = supabase.from("leads").select("*").order("created_at", { ascending: false });
    
    if (statusFilter !== "all") {
      query = query.eq("status", statusFilter);
    }
    
    const { data, error } = await query;
    if (!error && data) {
      setLeads(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      fetchLeads();
    }
  }, [user, statusFilter]);

  const updateStatus = async (id: string, newStatus: string) => {
    await supabase.from("leads").update({ status: newStatus }).eq("id", id);
    fetchLeads();
  };

  const exportCSV = () => {
    const headers = ["Date", "Name", "Business Type", "Goal", "Problem", "Urgency", "Language", "Status", "Summary"];
    const rows = leads.map(l => [
      format(new Date(l.created_at), "yyyy-MM-dd HH:mm"),
      l.name || "",
      l.business_type,
      l.business_goal,
      l.main_problem,
      l.urgency_level,
      l.language,
      l.status,
      l.summary.replace(/"/g, '""')
    ]);
    
    const csv = [headers.join(","), ...rows.map(r => r.map(c => `"${c}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kosmara-leads-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
  };

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-4 pb-8">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">{t.dashboard.title}</h1>
              <p className="text-muted-foreground">{t.dashboard.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder={t.dashboard.filters} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="new">{t.dashboard.status.new}</SelectItem>
                  <SelectItem value="in_progress">{t.dashboard.status.in_progress}</SelectItem>
                  <SelectItem value="closed_won">{t.dashboard.status.closed_won}</SelectItem>
                  <SelectItem value="closed_lost">{t.dashboard.status.closed_lost}</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" onClick={fetchLeads}>
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="accent" onClick={exportCSV} className="gap-2">
                <Download className="h-4 w-4" />
                {t.dashboard.export}
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Loading...</div>
          ) : leads.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground bg-card rounded-lg border border-border">
              {t.dashboard.noLeads}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 text-sm font-medium text-muted-foreground">{t.dashboard.columns.date}</th>
                    <th className="text-left p-3 text-sm font-medium text-muted-foreground">{t.dashboard.columns.name}</th>
                    <th className="text-left p-3 text-sm font-medium text-muted-foreground">{t.dashboard.columns.businessType}</th>
                    <th className="text-left p-3 text-sm font-medium text-muted-foreground">{t.dashboard.columns.problem}</th>
                    <th className="text-left p-3 text-sm font-medium text-muted-foreground">{t.dashboard.columns.urgency}</th>
                    <th className="text-left p-3 text-sm font-medium text-muted-foreground">{t.dashboard.columns.status}</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-3 text-sm">{format(new Date(lead.created_at), "dd/MM/yy HH:mm")}</td>
                      <td className="p-3 text-sm">{lead.name || "-"}</td>
                      <td className="p-3 text-sm">{lead.business_type}</td>
                      <td className="p-3 text-sm max-w-[200px] truncate">{lead.main_problem}</td>
                      <td className="p-3 text-sm">{lead.urgency_level}</td>
                      <td className="p-3">
                        <Select value={lead.status} onValueChange={(v) => updateStatus(lead.id, v)}>
                          <SelectTrigger className="h-8 text-xs w-[110px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">{t.dashboard.status.new}</SelectItem>
                            <SelectItem value="in_progress">{t.dashboard.status.in_progress}</SelectItem>
                            <SelectItem value="closed_won">{t.dashboard.status.closed_won}</SelectItem>
                            <SelectItem value="closed_lost">{t.dashboard.status.closed_lost}</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

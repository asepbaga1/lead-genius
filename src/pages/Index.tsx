import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Filter, Database, Send, Shield, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Problem Section */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">{t.problem.title}</h2>
            <p className="text-lg text-muted-foreground">{t.problem.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.problem.items.map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl shadow-md border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="py-20 hero-gradient">
        <div className="section-container text-center">
          <p className="text-secondary text-sm font-medium mb-4">{t.insight.title}</p>
          <p className="text-7xl font-display font-extrabold text-primary-foreground mb-4">{t.insight.stat}</p>
          <p className="text-xl text-primary-foreground/80 max-w-xl mx-auto mb-2">{t.insight.description}</p>
          <p className="text-sm text-primary-foreground/50">{t.insight.source}</p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">{t.solution.title}</h2>
            <p className="text-lg text-muted-foreground">{t.solution.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[Filter, Database, Send, Shield].map((Icon, i) => (
              <div key={i} className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t.solution.features[i].title}</h3>
                <p className="text-sm text-muted-foreground">{t.solution.features[i].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">{t.howItWorks.title}</h2>
            <p className="text-lg text-muted-foreground">{t.howItWorks.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-display font-bold text-secondary mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">{t.trust.title}</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {t.trust.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">{t.cta.title}</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">{t.cta.subtitle}</p>
          <Link to="/chat">
            <Button variant="hero" size="xl" className="gap-3">
              <MessageSquare className="h-5 w-5" />
              {t.cta.button}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="section-container text-center">
          <p className="text-muted-foreground text-sm">{t.footer.copyright}</p>
          <p className="text-muted-foreground/60 text-xs mt-1">{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

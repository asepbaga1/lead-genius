import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import { MessageSquare, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { t } = useLanguage();
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">KOSMARA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {t.nav.howItWorks}
            </button>
            <Link to="/chat">
              <Button variant={isActive("/chat") ? "navActive" : "accent"} size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                {t.nav.startChat}
              </Button>
            </Link>
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant={isActive("/dashboard") ? "navActive" : "outline"} size="sm" className="gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  {t.auth.logout}
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm">
                  {t.nav.login}
                </Button>
              </Link>
            )}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-3">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t.nav.howItWorks}
            </button>
            <Link
              to="/chat"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2"
            >
              <Button variant="accent" className="w-full gap-2">
                <MessageSquare className="h-4 w-4" />
                {t.nav.startChat}
              </Button>
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
                <div className="px-4 py-2">
                  <Button variant="ghost" className="w-full gap-2" onClick={() => { signOut(); setMobileMenuOpen(false); }}>
                    <LogOut className="h-4 w-4" />
                    {t.auth.logout}
                  </Button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2"
              >
                <Button variant="outline" className="w-full">
                  {t.nav.login}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

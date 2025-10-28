import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoAgp from "@/assets/logo-agp.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/prestations", label: "Prestations" },
    { href: "/formation-agp", label: "Formation Perte de Poids" },
    { href: "/neurofeedback", label: "Neurofeedback" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/contact", label: "Contact" },
    { href: "/annuaire-agp", label: "Annuaire AGP" },
    { href: "/divers", label: "Divers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-smooth ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-smooth hover:opacity-80">
            <img src={logoAgp} alt="AGP Logo" className="h-12 w-12" />
            <div className="hidden md:block">
              <h2 className="text-lg font-semibold text-primary">Méthodes Douces</h2>
              <p className="text-xs text-muted-foreground">Bordeaux</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                  isActive(link.href)
                    ? "text-primary bg-accent/50"
                    : "text-foreground hover:text-primary hover:bg-accent/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            asChild
            size="sm"
            className="hidden md:flex gradient-primary text-primary-foreground hover:shadow-hover transition-smooth"
          >
            <Link to="/contact">Prendre RDV</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-smooth ${
                  isActive(link.href)
                    ? "text-primary bg-accent/50"
                    : "text-foreground hover:text-primary hover:bg-accent/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button
                asChild
                className="w-full gradient-primary text-primary-foreground"
              >
                <Link to="/contact">Prendre RDV</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;

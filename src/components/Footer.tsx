import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAgp from "@/assets/logo-agp.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo et Description */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <img src={logoAgp} alt="AGP Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-semibold text-primary">Méthodes Douces</h3>
                <p className="text-sm text-muted-foreground">Bordeaux</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Accompagnement personnalisé pour votre bien-être et votre transformation
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/prestations" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Prestations
                </Link>
              </li>
              <li>
                <Link to="/formation-agp" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Formation AGP
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-1 text-primary flex-shrink-0" />
                <span>9 Galerie marchande, 33370 Tresses</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:0612345678">06 12 34 56 78</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:eric.gata@gmail.com">eric.gata@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Méthodes Douces Bordeaux – Tous droits réservés</p>
            <p>
              Site créé par{" "}
              <a
                href="https://digital-web33.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Digital-Web33
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

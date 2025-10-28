import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Search, MapPin, ArrowRight } from "lucide-react";
import logoAgp from "@/assets/logo-agp.png";

const AnnuaireAGP = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logoAgp} alt="AGP Logo" className="h-24 w-24" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Annuaire AGP
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouvez un praticien certifié AGP près de chez vous
          </p>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-accent/30 flex-shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">
                    Le réseau AGP
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    L'Annuaire AGP (Accompagnement Gestion du Poids) regroupe tous les praticiens 
                    ayant suivi la formation AGP et étant certifiés pour accompagner leurs clients 
                    dans leur démarche de perte de poids.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Chaque praticien référencé a été formé aux mêmes protocoles et partage les mêmes 
                    valeurs d'accompagnement bienveillant et respectueux.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-soft bg-gradient-soft">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-card">
                    <Search className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Rechercher un praticien
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Utilisez la carte interactive pour trouver un praticien certifié AGP dans votre région.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Recherche par ville, département ou région</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Sections */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Pour les particuliers */}
          <Card className="shadow-soft hover:shadow-hover transition-smooth">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Vous cherchez un praticien ?
              </h3>
              <p className="text-foreground mb-6">
                Consultez l'annuaire complet pour trouver un praticien AGP certifié près de chez vous.
              </p>
              <Button className="w-full gradient-primary text-primary-foreground">
                <Link to="/contact" className="flex items-center justify-center w-full">
                  Consulter l'annuaire <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pour les praticiens */}
          <Card className="shadow-soft hover:shadow-hover transition-smooth">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Vous êtes praticien ?
              </h3>
              <p className="text-foreground mb-6">
                Rejoignez le réseau AGP et développez votre activité d'accompagnement à la gestion du poids.
              </p>
              <Button className="w-full gradient-primary text-primary-foreground">
                <Link to="/formation-agp" className="flex items-center justify-center w-full">
                  Découvrir la formation <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnnuaireAGP;

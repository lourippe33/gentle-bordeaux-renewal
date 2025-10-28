import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Video, CheckCircle, ArrowRight, Clock, Award } from "lucide-react";
import logoAgp from "@/assets/logo-agp.png";

const FormationAGP = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Formation Complète",
      description: "Un programme structuré et progressif pour maîtriser l'accompagnement à la gestion du poids",
    },
    {
      icon: Video,
      title: "Covisions Mensuelles",
      description: "Sessions live pour échanger, poser vos questions et progresser ensemble",
    },
    {
      icon: Clock,
      title: "Accès à Vie",
      description: "Accédez au contenu de formation quand vous le souhaitez, sans limite de temps",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Recevez votre certification AGP à l'issue de la formation",
    },
  ];

  const modules = [
    "Comprendre les mécanismes de la prise et de la perte de poids",
    "Les aspects psychologiques et émotionnels du poids",
    "Techniques d'hypnose appliquées à la gestion du poids",
    "Protocoles d'accompagnement personnalisés",
    "Gestion des résistances et des blocages",
    "Suivi et fidélisation de vos clients",
    "Marketing et développement de votre activité",
    "Éthique et déontologie de l'accompagnant",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logoAgp} alt="AGP Logo" className="h-24 w-24" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Formation AGP
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            Accompagnement Gestion du Poids
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Devenez un expert de l'accompagnement à la gestion du poids et développez une activité épanouissante
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center shadow-soft hover:shadow-hover transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/30">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* À qui s'adresse cette formation */}
          <Card className="shadow-soft">
            <CardHeader className="bg-gradient-soft">
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                À qui s'adresse cette formation ?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Praticiens en thérapies brèves (hypnose, sophrologie, PNL...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Coachs de vie et coachs en développement personnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professionnels de la santé et du bien-être</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Toute personne souhaitant se spécialiser dans l'accompagnement du poids</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Programme de formation */}
          <Card className="shadow-soft">
            <CardHeader className="bg-gradient-soft">
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Programme de formation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {modules.map((module, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{module}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Tarifs et CTA */}
        <Card className="shadow-hover bg-gradient-soft">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Tarif Spécial : Réduction de 90 €
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Profitez d'une offre exceptionnelle pour rejoindre notre communauté de praticiens et démarrer votre activité d'accompagnement à la gestion du poids.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary text-primary-foreground shadow-hover"
                >
                  <Link to="/contact">
                    Demander des informations <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/annuaire-agp">Voir l'annuaire AGP</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormationAGP;

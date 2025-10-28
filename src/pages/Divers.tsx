import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, MessageSquare, BookOpen, Newspaper, Handshake, ArrowRight } from "lucide-react";

const Divers = () => {
  const sections = [
    {
      icon: User,
      title: "Mon Parcours",
      description: "Découvrez mon parcours, mes formations et mon approche de l'accompagnement.",
      link: "/mon-parcours",
      color: "text-primary",
    },
    {
      icon: MessageSquare,
      title: "Témoignages",
      description: "Lisez les retours d'expérience de personnes que j'ai accompagnées.",
      link: "/temoignages",
      color: "text-primary-light",
    },
    {
      icon: BookOpen,
      title: "Livre d'Or",
      description: "Consultez les messages de mes clients et laissez le vôtre.",
      link: "/livre-dor",
      color: "text-accent",
    },
    {
      icon: Newspaper,
      title: "Nouveautés",
      description: "Restez informé des actualités, ateliers et événements à venir.",
      link: "/nouveautes",
      color: "text-primary-dark",
    },
    {
      icon: Handshake,
      title: "Partenariat",
      description: "Vous êtes professionnel de santé ou du bien-être ? Découvrez nos partenariats.",
      link: "/partenariat",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            En savoir plus
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez mon parcours, les témoignages de mes clients et toutes les actualités
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-smooth cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={section.link}>
                <CardHeader className="bg-gradient-soft">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-full bg-card ${section.color}`}>
                      <section.icon size={24} />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Découvrir
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="shadow-hover bg-gradient-soft">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Une question ? Besoin de plus d'informations ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                N'hésitez pas à me contacter pour échanger sur votre situation et vos besoins.
              </p>
              <Button
                asChild
                size="lg"
                className="gradient-primary text-primary-foreground shadow-hover"
              >
                <Link to="/contact">
                  Me contacter <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Divers;

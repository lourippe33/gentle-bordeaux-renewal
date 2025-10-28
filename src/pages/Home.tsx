import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Scale, Cigarette, GraduationCap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import natureWellness from "@/assets/nature-wellness.jpg";
import logoAgp from "@/assets/logo-agp.png";

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Hypnose, EFT-H, RITMO",
      description: "Manque de confiance, angoisses, phobies, traumatismes... Un accompagnement doux pour retrouver votre équilibre émotionnel.",
      link: "/prestations",
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "Neurofeedback",
      description: "TDA(H), insomnie, migraines, déprime... Une méthode innovante pour réguler votre activité cérébrale.",
      link: "/neurofeedback",
      color: "text-primary-light",
    },
    {
      icon: Scale,
      title: "Accompagnement Poids",
      description: "Perdre du poids durablement avec une approche personnalisée et respectueuse de votre corps.",
      link: "/prestations#minceur",
      color: "text-accent",
    },
    {
      icon: Cigarette,
      title: "Arrêt Tabac",
      description: "Libérez-vous du tabac définitivement grâce à l'hypnose et un accompagnement sur-mesure.",
      link: "/prestations#tabac",
      color: "text-primary-dark",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Bienvenue dans votre changement
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Des méthodes douces et efficaces pour retrouver votre bien-être
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-hover transition-smooth"
          >
            <Link to="/contact">
              Prendre rendez-vous <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-smooth cursor-pointer animate-slide-up border-2 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={service.link}>
                <CardContent className="p-6">
                  <service.icon className={`h-12 w-12 mb-4 ${service.color}`} />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Formation AGP Section */}
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-soft">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl font-bold text-primary">Formation AGP</h2>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Praticiens accompagnants
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Vous cherchez une formation pour la gestion du poids ? Vous êtes au bon endroit !
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Formation complète et accessible à vie</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Covisions mensuelles en live</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Tarif compétitif avec réduction</span>
                    </div>
                  </div>
                  <Button asChild className="gradient-primary text-primary-foreground">
                    <Link to="/formation-agp">
                      Découvrir la formation <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
                <div className="h-full min-h-[300px] relative">
                  <img
                    src={logoAgp}
                    alt="Formation AGP"
                    className="absolute inset-0 w-full h-full object-contain p-8"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={natureWellness}
              alt="Bien-être naturel"
              className="rounded-lg shadow-soft w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Vous êtes dans une situation bloquante ?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Vous avez besoin de vous faire accompagner pour concrétiser votre objectif ?
            </p>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Les méthodes que je propose peuvent vous aider à retrouver votre équilibre, votre confiance et votre bien-être.
            </p>
            <div className="bg-accent/20 border-l-4 border-primary p-4 rounded-r-md mb-8">
              <p className="text-sm text-foreground italic">
                Les méthodes que j'utilise ne se substituent à aucun avis ni traitement médical. 
                Elles viennent en complément des soins qui vous sont prescrits et ne remplacent jamais le suivi par un médecin.
              </p>
            </div>
            <Button asChild size="lg" className="gradient-primary text-primary-foreground">
              <Link to="/contact">
                Commencer votre changement <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

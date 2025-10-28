import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Brain, Scale, Cigarette, ArrowRight } from "lucide-react";

const Prestations = () => {
  const services = [
    {
      id: "eft-ritmo-hypnose",
      icon: Heart,
      title: "EFT-H, RITMO (EMDR), Hypnose",
      subtitle: "Thérapies brèves pour votre équilibre émotionnel",
      description: "Ces méthodes douces et efficaces vous accompagnent dans la gestion de vos émotions et la résolution de blocages.",
      benefits: [
        "Gestion du stress et de l'anxiété",
        "Traitement des phobies et des peurs",
        "Dépassement des traumatismes",
        "Renforcement de la confiance en soi",
        "Amélioration de l'estime de soi",
        "Gestion des addictions",
      ],
      color: "text-primary",
    },
    {
      id: "minceur",
      icon: Scale,
      title: "Accompagnement Perte de Poids",
      subtitle: "Une approche globale et durable",
      description: "Un accompagnement personnalisé qui prend en compte vos habitudes, vos émotions et votre relation à l'alimentation.",
      benefits: [
        "Identification des comportements alimentaires",
        "Gestion des émotions liées à l'alimentation",
        "Modification des habitudes en douceur",
        "Renforcement de la motivation",
        "Accompagnement sur le long terme",
        "Résultats durables et respectueux",
      ],
      color: "text-accent",
    },
    {
      id: "tabac",
      icon: Cigarette,
      title: "Arrêt Tabac",
      subtitle: "Libérez-vous du tabac définitivement",
      description: "L'hypnose et les thérapies brèves offrent une solution efficace pour arrêter de fumer sans substituts ni stress.",
      benefits: [
        "Séance unique ou suivi personnalisé",
        "Sans stress ni manque",
        "Accompagnement des émotions",
        "Renforcement de la décision",
        "Prévention des rechutes",
        "Taux de réussite élevé",
      ],
      color: "text-primary-dark",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Nos Prestations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des accompagnements sur-mesure pour votre bien-être et votre transformation
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card
              key={service.id}
              id={service.id}
              className="overflow-hidden shadow-soft animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="bg-gradient-soft">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-lg bg-card ${service.color}`}>
                    <service.icon size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="gradient-primary text-primary-foreground"
                >
                  <Link to="/contact">
                    Prendre rendez-vous <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-soft shadow-soft">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Prêt à commencer votre changement ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Chaque parcours est unique. Contactez-moi pour un premier échange et découvrons ensemble la méthode la plus adaptée à vos besoins.
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

export default Prestations;

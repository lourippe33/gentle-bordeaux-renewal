import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ExternalLink, Activity, Zap, Heart } from "lucide-react";

const Neurofeedback = () => {
  const benefits = [
    {
      icon: Brain,
      title: "TDA(H)",
      description: "Amélioration de l'attention et de la concentration",
    },
    {
      icon: Activity,
      title: "Insomnie",
      description: "Régulation des cycles du sommeil",
    },
    {
      icon: Zap,
      title: "Migraines",
      description: "Réduction de la fréquence et de l'intensité",
    },
    {
      icon: Heart,
      title: "Stress & Anxiété",
      description: "Apaisement et équilibre émotionnel",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <Brain className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Neurofeedback
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une technologie innovante pour entraîner votre cerveau et améliorer votre bien-être
          </p>
        </div>

        {/* Description */}
        <Card className="mb-12 shadow-soft">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Qu'est-ce que le Neurofeedback ?
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Le Neurofeedback est une méthode d'entraînement cérébral non invasive qui permet à votre cerveau 
              d'apprendre à mieux se réguler. Grâce à des capteurs placés sur votre tête, nous mesurons en temps 
              réel votre activité cérébrale et vous offrons un retour visuel et sonore pour vous aider à optimiser 
              votre fonctionnement cérébral.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Cette technique est particulièrement efficace pour traiter de nombreux troubles et améliorer 
              vos performances cognitives et émotionnelles.
            </p>
          </CardContent>
        </Card>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center shadow-soft hover:shadow-hover transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/30">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* External Link Card */}
        <Card className="shadow-hover bg-gradient-soft">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                En savoir plus sur le Neurofeedback
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Pour découvrir en détail les applications du Neurofeedback, les protocoles utilisés 
                et les résultats que vous pouvez attendre, visitez notre site dédié.
              </p>
              <Button
                asChild
                size="lg"
                className="gradient-primary text-primary-foreground shadow-hover"
              >
                <a
                  href="https://www.neurofeedback-stress.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visiter le site Neurofeedback
                  <ExternalLink className="ml-2" size={20} />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Neurofeedback;

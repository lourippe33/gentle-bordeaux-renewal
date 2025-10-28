import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Euro, CheckCircle, ArrowRight } from "lucide-react";

const Tarifs = () => {
  const prestations = [
    {
      title: "Séance d'Hypnose / EFT-H / RITMO",
      duration: "1h à 1h30",
      price: "80 €",
      details: [
        "Première séance avec anamnèse complète",
        "Séances de suivi personnalisées",
        "Techniques adaptées à vos besoins",
      ],
    },
    {
      title: "Accompagnement Perte de Poids",
      duration: "Programme personnalisé",
      price: "Sur devis",
      details: [
        "Bilan complet initial",
        "Séances régulières adaptées",
        "Suivi entre les séances",
        "Support et motivation",
      ],
    },
    {
      title: "Arrêt Tabac",
      duration: "2h à 2h30",
      price: "150 €",
      details: [
        "Séance unique intensive",
        "Techniques combinées pour un résultat optimal",
        "Suivi téléphonique inclus",
      ],
    },
    {
      title: "Séance de Neurofeedback",
      duration: "45 min à 1h",
      price: "Nous consulter",
      details: [
        "Bilan initial",
        "Séances régulières",
        "Protocole personnalisé",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Tarifs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des tarifs transparents pour un accompagnement de qualité
          </p>
        </div>

        {/* Prestations Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {prestations.map((prestation, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-hover transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="bg-gradient-soft">
                <CardTitle className="text-2xl">{prestation.title}</CardTitle>
                <div className="flex items-center gap-4 text-muted-foreground mt-2">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{prestation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-primary">
                    <Euro size={18} />
                    <span className="text-xl">{prestation.price}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {prestation.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informations complémentaires */}
        <div className="space-y-8 mb-16">
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-3">
                <Euro className="h-6 w-6" />
                Informations pratiques
              </h2>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  <strong>Modes de paiement acceptés :</strong> Espèces, chèque, virement bancaire
                </p>
                <p className="leading-relaxed">
                  <strong>Annulation :</strong> Toute séance non annulée 48h à l'avance sera due
                </p>
                <p className="leading-relaxed">
                  <strong>Remboursement :</strong> Les séances ne sont généralement pas remboursées par la Sécurité Sociale, 
                  mais certaines mutuelles proposent des forfaits médecines douces. N'hésitez pas à vous renseigner auprès de votre mutuelle.
                </p>
                <p className="leading-relaxed italic text-muted-foreground">
                  Les tarifs indiqués sont donnés à titre indicatif et peuvent être ajustés en fonction de votre situation. 
                  N'hésitez pas à me contacter pour toute question.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="shadow-hover bg-gradient-soft">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Prêt à franchir le pas ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contactez-moi pour réserver votre première séance ou pour toute question sur les tarifs et les modalités d'accompagnement.
              </p>
              <Button
                asChild
                size="lg"
                className="gradient-primary text-primary-foreground shadow-hover"
              >
                <Link to="/contact">
                  Prendre rendez-vous <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tarifs;

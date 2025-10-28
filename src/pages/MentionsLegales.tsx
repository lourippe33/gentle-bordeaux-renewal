import { Card, CardContent } from "@/components/ui/card";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Mentions Légales
          </h1>
        </div>

        <div className="space-y-8">
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Éditeur du site
              </h2>
              <p className="text-foreground mb-2">
                <strong>Méthodes Douces Bordeaux</strong>
              </p>
              <p className="text-foreground mb-2">Eric Gata</p>
              <p className="text-foreground mb-2">9 Galerie marchande, 33370 Tresses</p>
              <p className="text-foreground mb-2">Téléphone : 06 12 34 56 78</p>
              <p className="text-foreground">Email : eric.gata@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Hébergement
              </h2>
              <p className="text-foreground mb-2">
                Ce site est hébergé par OVH
              </p>
              <p className="text-foreground mb-2">2 rue Kellermann, 59100 Roubaix, France</p>
              <p className="text-foreground">Téléphone : 1007</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Propriété intellectuelle
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-foreground leading-relaxed">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Protection des données personnelles
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
                Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification 
                et de suppression des données vous concernant.
              </p>
              <p className="text-foreground leading-relaxed">
                Pour exercer ce droit, vous pouvez nous contacter à l'adresse : eric.gata@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Médiation de la consommation
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Conformément aux articles L.616-1 et R.616-1 du code de la consommation, notre société a mis 
                en place un dispositif de médiation de la consommation.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                L'entité de médiation retenue est : SAS CNPM - MEDIATION - CONSOMMATION.
              </p>
              <p className="text-foreground leading-relaxed mb-2">
                En cas de litige, le consommateur pourra déposer sa réclamation sur le site :
              </p>
              <p className="text-foreground mb-4">
                <a
                  href="http://cnpm-mediation-consommation.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  http://cnpm-mediation-consommation.eu
                </a>
              </p>
              <p className="text-foreground leading-relaxed">
                ou par voie postale en écrivant à :<br />
                CNPM - MEDIATION - CONSOMMATION<br />
                27, avenue de la Libération<br />
                42400 SAINT-CHAMOND
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Avertissement
              </h2>
              <p className="text-foreground leading-relaxed italic">
                Les méthodes proposées (Hypnose, EFT-H, RITMO, Neurofeedback) ne se substituent à aucun avis 
                ni traitement médical. Elles viennent en complément des soins qui vous sont prescrits et ne 
                remplacent jamais le suivi par un médecin.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;

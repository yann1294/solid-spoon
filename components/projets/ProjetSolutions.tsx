import ProjetUneSolution from "./ProjetUneSolution";

const ProjetSolutions = () => {
  const descriptions = {
    descriptionTwo:
      "FORMATION ET LANCEMENT DES ACTIVITES DE SENSIBILISATION DES STRUCTURES DE PRECOLLECTE DE LA COMMUNE DE PARAKOU\n\nEn date du mercredi 29 novembre 2017, une séance de formation s’est tenue au siège de CCAROM dans le but de sensibilisation des structures de pré collecte de la ville de Parakou sur la gestion des déchets et la sensibilisation de la population.\nAprès le mot de bienvenu par le Président du Comité de Concertation des Associations et ONG de Ramassage des Ordures Ménagères (CCAROM), cette séance de formation a été animée par Monsieur SINAGOURIGUI Sanni Fidèle, Directeur de la Prospective, de la Programmation, du Développement et des Relations Extérieures (DPPDRE) de la Mairie de Parakou et elle a connu la participation de 34 participants.\nLes participants ont été formés sur les enjeux de la sensibilisation, la Constitution et répartition des équipes de sensibilisation en vue des opérations de la sensibilisation de la population de Parakou.\n",
  };

  const image_2_landing_page1 = require("../../public/MEREEE.png");

  return (
    <div
      className="
          mx-24 my-10 mt-16
           "
      style={{ backgroundImage: "url('projets/BADD.jpg')" }}
    >
      <h1>Solution</h1>
      <h2></h2>

      <ProjetUneSolution />
    </div>
  );
};

export default ProjetSolutions;

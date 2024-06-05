import Dummy from "../Dummy";
import ProjetDetaille from "./ProjetDetaille";
import ProjetIntro from "./ProjetIntro";
import ProjetLogoPartenaires from "./ProjetLogoPartenaires";
import ProjetRapportActivites from "./ProjetRapportActivites";
import ProjetRealisation from "./ProjetRealisations";
import ProjetSolutions from "./ProjetSolutions";

const Projets = () => {
  return (
    <div>
      {/* <Dummy /> */}
      <ProjetSolutions />
      <ProjetIntro />
      <ProjetDetaille />
      <ProjetRealisation />
      <ProjetRapportActivites />
      <ProjetLogoPartenaires />
    </div>
  );
};

export default Projets;

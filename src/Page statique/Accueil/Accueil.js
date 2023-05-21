import React from "react";
import "./Accueil.css";

function Accueil() {
  return (
    <div className="container-accueil">
      <h1 className="h1-accueil">Édition 2023</h1>
      <h3 className="h3-accueil">
        Bienvenue sur le site des stages de fin d'études des techniques de
        l'informatique du Collège Montmorency!
      </h3>

      <p className=".p-accueil">
        À la fin de leurs études, les étudiants sont appelés à mettre en
        pratique les compétences acquises durant le programme. Cela se fait
        grâce à la participation d'entreprises de la région qui les accueillent
        afin de finaliser leurs formations.
      </p>

      <p className=".p-accueil">
        Le Collège Montmorency offre ainsi aux employeurs l'occasion d'obtenir
        une main-d'œuvre compétente, tout en leur permettant de participer à la
        formation finale des étudiants.
      </p>

      <p className=".p-accueil">
        Le stage de fin d'études est une expérience concrète permettant
        d'acquérir une expérience professionnelle formatrice.
      </p>

      <p className=".p-accueil">
        Les étudiants terminent la portion académique de leurs études en
        informatique selon une des deux voies de sortie du programme: Réseaux et
        sécurité informatique Développement d'applications informatiques
      </p>
    </div>
  );
}

export default Accueil
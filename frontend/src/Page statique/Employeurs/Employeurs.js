import React from "react";
import "./Employeurs.css";

function Employeurs() {
  return (
    <div className="container-employeurs">
      <h1 className="h1-employeurs">Formulaire d'inscription de milieu de stage</h1>
      <h3 className="h3-employeurs">Stages réguliers ayant lieu à la session hiver</h3>
      <p className="p-employeurs">Les stages sont du 21 janvier au 3 mai 2019 </p>
      <p className="p-employeurs">
        (il est toutefois possible après entente avec le coordonnateur de
        débuter le stage un peu plus tôt)
      </p>
      <p className="p-employeurs">Fichier en format: Word</p>

      <p className="p-employeurs">
        Sur réception de ce formulaire, le coordonnateur des stages entrera en
        contact avec le responsable en entreprise pour discuter du stage.
      </p>

      <p className="p-employeurs">
        Veuillez vous référez à la page <a href="http://localhost:3000/ProfilesEtCompetences" className="a-employeurs">Profil de sortie</a> pour connaître
        le profil de sortie et les compétences des étudiants..
      </p>
    </div>
  );
}

export default Employeurs;

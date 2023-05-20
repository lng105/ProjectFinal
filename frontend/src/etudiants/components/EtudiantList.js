import React from "react";
import EtudiantItem from "./EtudiantItem";
import Card from "../../Shared/Components/UIElements/Card";
import "./EtudiantList.css";

const EtudiantList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun Etudiant trouvé</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(etudiant => (
        <EtudiantItem
          key={etudiant.id}
          id={etudiant.id}
          etudiantNom={etudiant.etudiantNom}
          etudiantDA={etudiant.etudiantDA}
          etudiantCourriel={etudiant.etudiantCourriel}
          etudiantProfil={etudiant.etudiantProfil}
          stages={etudiant.stages}
        />
      ))}
    </ul>
  );
};

export default EtudiantList;

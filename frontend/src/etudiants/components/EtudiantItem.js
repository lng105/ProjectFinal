import React from "react";
import { Link } from 'react-router-dom';
import Card from "../../Shared/Components/UIElements/Card";
import "./EtudiantItem.css";

const EtudiantItem = (props) => {

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/Etudiant`} className="user-item__link">
          <div className="user-item__info">
            <h2>{props.etudiantNom}</h2>
            <h3>{props.etudiantDA}</h3>
            <h3>{props.etudiantCourriel}</h3>
            <h4>{props.etudiantProfil}</h4>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default EtudiantItem;


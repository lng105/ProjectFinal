import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Card from "../../Shared/Components/UIElements/Card";
import "./EtudiantItem.css";

const EtudiantItem = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOverlayOpen = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/Etudiant`} className="user-item__link" onClick={handleOverlayOpen}>
          <div className="user-item__info">
            <h2>{props.etudiantNom}</h2>
            <h3>{props.etudiantDA}</h3>
            <h3>{props.etudiantCourriel}</h3>
            <h4>{props.etudiantProfil}</h4>
          </div>
        </Link>
        {showOverlay && (
          <div className="overlay">
            <div className="overlay-content">
              <p>Choose an option:</p>
              <button onClick={handleOverlayClose}>Option 1</button>
              <button onClick={handleOverlayClose}>Option 2</button>
            </div>
          </div>
        )}
      </Card>
    </li>
  );
};

export default EtudiantItem;


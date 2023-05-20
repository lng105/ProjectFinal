import React, { useState, useEffect } from "react";
import Card from "../../Shared/Components/UIElements/Card";
import StageOverlay from "./StageOverlay";
import "./EtudiantItem.css";

const EtudiantItem = (props) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [stages, setStages] = useState([]);
  const [selectedStage, setSelectedStage] = useState(null);
  const [cardContent, setCardContent] = useState(null);

  useEffect(() => {
    fetchStages();
  }, []);

  const fetchStages = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+ "/stages");
      const data = await response.json();
      setStages(data.stages);
    } catch (error) {
      console.log("Error fetching stages:", error);
    }
  };

  const handleStudentClick = () => {
    setIsOverlayOpen(true);
  };

  const handleStageSelect = (stageId) => {
    const selectedStage = stages.find((stage) => stage.id === stageId);
    setSelectedStage(selectedStage);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
    setSelectedStage(null);
  };

  const handleConfirm = () => {
    if (selectedStage) {
      setCardContent(<h3>{selectedStage.nomEntreprise}</h3>);
    }

    setIsOverlayOpen(false);
  };

  return (
    <li className="etudiant-item">
      <Card className="etudiant-item__content">
        <div className="etudiant-item__info h2" onClick={handleStudentClick}>
          <h2>{props.etudiantNom}</h2>
          <h3>{props.etudiantDA}</h3>
          <h3>{props.etudiantCourriel}</h3>
          <h4>{props.etudiantProfil}</h4>
          <h4>Stage {cardContent}</h4>
        </div>
        
      </Card>
      {isOverlayOpen && (
        <StageOverlay
          stages={stages}
          selectedStage={selectedStage}
          onSelectStage={handleStageSelect}
          onClose={handleOverlayClose}
          onConfirm={handleConfirm}
        />
      )}
    </li>
  );
};

export default EtudiantItem;

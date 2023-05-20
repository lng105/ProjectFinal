import React from "react";
import Button from "../../Shared/Components/FormElements/Button";
import "./StageOverlay.css";

const StageOverlay = (props) => {
  if (!props.stages || props.stages.length === 0) {
    return (
      <div className="stage-overlay">
        <h2>No poste available</h2>
        <Button onClick={props.onClose}>Cancel</Button>
      </div>
    );
  }

  return (
    <div className="stage-overlay">
      <h2>Choose une poste</h2>
      <div className="stage-overlay__content">
        {props.stages.map((stage) => (
          <div
            key={stage.id}
            className={`stage-item ${props.selectedStage?.id === stage.id ? 'selected' : ''}`}
            onClick={() => props.onSelectStage(stage.id)}
          >
            <h3>{stage.nomEntreprise}</h3>
          </div>
        ))}
      </div>
      <div className="stage-overlay__actions">
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onConfirm}>Confirm</Button>
      </div>
    </div>
  );
};

export default StageOverlay;



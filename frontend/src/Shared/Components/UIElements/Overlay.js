import React from "react";
import Button from "../../Shared/Components/UIElements/Button";
import "./Overlay.css";

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Choose an option:</h2>
        <Button onClick={props.onChoice1}>Choice 1</Button>
        <Button onClick={props.onChoice2}>Choice 2</Button>
        <Button inverse onClick={props.onCancel}>Cancel</Button>
      </div>
    </div>
  );
};

export default Overlay;

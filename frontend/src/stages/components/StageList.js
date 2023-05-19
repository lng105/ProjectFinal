import React from "react";
import StageItem from "./StageItem";
import Card from "../../Shared/Components/UIElements/Card";
import "./StageList.css";

const StageList = (props) => {
    console.log(props.items);
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun stage trouvé</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {props.items.map(stage => (
        <StageItem
          key={stage.id}
          id={stage.id}
          nomPersonneStage={stage.nomPersonneStage}
          courrielPersonneStage={stage.courrielPersonneStage}
          nomEntreprise={stage.nomEntreprise}
          numTelephone={stage.numTelephone}
          addresseEntreprise={stage.addresseEntreprise}
          typeStage={stage.typeStage}
          posteDisponible={stage.posteDisponible}
          descriptionStage={stage.descriptionStage}
          remuneration={stage.remuneration}
        />
      ))}
    </ul>
  );
};

export default StageList

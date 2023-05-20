import React, { useState } from "react";
import StageItem from "./StageItem";
import Card from "../../Shared/Components/UIElements/Card";
import "./StageList.css";

const StageList = (props) => {
  const [deletedStageId, setDeletedStageId] = useState(null);

  const handleDeleteStage = (stageId) => {
    setDeletedStageId(stageId);
  };

  const filteredItems = props.items.filter(
    (stage) => stage.id !== deletedStageId
  )

  if (filteredItems.length === 0) {
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
      {filteredItems.map((stage) => (
        <StageItem
          key={stage.id}
          id={stage.id}
          nomEntreprise={stage.nomEntreprise}
          nomPersonneStage={stage.nomPersonneStage}
          courrielPersonneStage={stage.courrielPersonneStage}
          addresseEntreprise={stage.addresseEntreprise}
          typeStage={stage.typeStage}
          descriptionStage={stage.descriptionStage}
          posteDisponible={stage.posteDisponible}
          onDelete={handleDeleteStage}
        />
      ))}
    </ul>
  );
};

export default StageList;


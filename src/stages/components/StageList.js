import React, { useState } from "react";
import StageItem from "./StageItem";
import Card from "../../Shared/Components/UIElements/Card";
import "./StageList.css";

const StageList = (props) => {
  const [deletedStageId, setDeletedStageId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleDeleteStage = (stageId) => {
    setDeletedStageId(stageId);
  };

  const filteredItems = selectedFilter
  ? props.items.filter(
      (stage) => stage.typeStage === selectedFilter && stage.id !== deletedStageId
    )
  : props.items.filter((stage) => stage.id !== deletedStageId);


  if (filteredItems.length === 0) {
    return (
      <div>
        <label htmlFor="filter">Filtrer par type de stage:</label>
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">Tous</option>
          <option value="Reseaux et securite">Reseaux et securite</option>
          <option value="Developpement application">
            Developpement application
          </option>
        </select>

        <div className="center">
          <Card>
            <h2>Aucun stage trouvé</h2>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="filter">Filtrer par type de stage:</label>
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">Tous</option>
          <option value="Reseaux et securite">Reseaux et securite</option>
          <option value="Developpement application">
            Developpement application
          </option>
        </select>
      </div>
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
    </div>
  );
};

export default StageList;

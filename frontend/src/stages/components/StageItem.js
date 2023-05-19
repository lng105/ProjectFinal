import React from "react";
import Card from "../../Shared/Components/UIElements/Card";

import "./StageItem.css";

function StageItem(props){

    return(
        <li className="user-item">
            <Card className="user-item__content">
                <div className="user-item__info">
                    <h1>{props.nomEntreprise}</h1>
                    <h3>{props.nomPersonneStage}</h3>
                    <h3>{props.courrielPersonneStage}</h3>
                    <h3>Addresse: {props.addresseEntreprise}</h3>
                    <h4>{props.typeStage}</h4>
                    <h4>Description: {props.descriptionStage}</h4>
                    <h5>Nombre de poste disponible: {props.posteDisponible}</h5>
                </div>
            </Card>
        </li>
    )
}

export default StageItem;
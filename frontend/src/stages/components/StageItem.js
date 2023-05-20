import React, { useState } from "react";
import Card from "../../Shared/Components/UIElements/Card";
import Button from "../../Shared/Components/FormElements/Button";
import { useHttpClient } from "../../Shared/hooks/http-hook";
import Modal from "../../Shared/Components/UIElements/Modal";
import "./StageItem.css";

const StageItem = (props) => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/stages/${props.id}`,
        "DELETE"
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <div id="modal-hook"></div>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Delete?"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              Annuler
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Supprimer
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you want to proceed and delete this stage?</p>
      </Modal>
      <li className="stage-item">
        <Card className="stage-item__content">
          <div className="stage-item__info">
            <h1>{props.nomEntreprise}</h1>
            <h3>{props.nomPersonneStage}</h3>
            <h3>{props.courrielPersonneStage}</h3>
            <h3>Addresse: {props.addresseEntreprise}</h3>
            <h4>{props.typeStage}</h4>
            <h4>Description: {props.descriptionStage}</h4>
            <h5>Nombre de poste disponible: {props.posteDisponible}</h5>
            <div className="stage-item__actions">
              <div>
                <Button to={`/stages/${props.id}`}>Modifier</Button>
              </div>
              <div>
                <Button danger onClick={showDeleteWarningHandler}>
                  Supprimer
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default StageItem;

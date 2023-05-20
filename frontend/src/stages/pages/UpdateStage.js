import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../../Shared/Components/FormElements/Input";
import Button from "../../Shared/Components/FormElements/Button";
import Card from "../../Shared/Components/UIElements/Card";
import { useForm } from "../../Shared/hooks/form-hook";
import { useHttpClient } from "../../Shared/hooks/http-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_TELEPHONE,
} from "../../Shared/util/validators";
import "./StageForm.css";

const UpdateStage = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [loadedStage, setLoadedStage] = useState();
  const stageId = useParams().stageId;
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      nomPersonneStage: {
        value: "",
        isValid: false,
      },
      courrielPersonneStage: {
        value: "",
        isValid: false,
      },
      nomEntreprise: {
        value: "",
        isValid: false,
      },
      numTelephone: {
        value: "",
        isValid: false,
      },
      addresseEntreprise: {
        value: "",
        isValid: false,
      },
      typeStage: {
        value: "",
        isValid: false,
      },
      posteDisponible: {
        value: "",
        isValid: false,
      },
      descriptionStage: {
        value: "",
        isValid: false,
      },
      remuneration: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchStage = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+`/${stageId}`
        );
        setLoadedStage(responseData.stage);
        console.log(responseData.stage);
        setFormData(
          {
            nomPersonneStage: {
              value: responseData.stage.nomPersonneStage,
              isValid: true,
            },
            courrielPersonneStage: {
              value: responseData.stage.courrielPersonneStage,
              isValid: true,
            },
            nomEntreprise: {
              value: responseData.stage.nomEntreprise,
              isValid: true,
            },
            numTelephone: {
              value: responseData.stage.numTelephone,
              isValid: true,
            },
            addresseEntreprise: {
              value: responseData.stage.addresseEntreprise,
              isValid: true,
            },
            typeStage: {
              value: responseData.stage.typeStage,
              isValid: true,
            },
            posteDisponible: {
              value: responseData.stage.posteDisponible,
              isValid: true,
            },
            descriptionStage: {
              value: responseData.stage.descriptionStage,
              isValid: true,
            },
            remuneration: {
              value: responseData.stage.remuneration,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchStage();
  }, [sendRequest, stageId, setFormData]);

  const stageUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL+ `/stages/${stageId}`,
        "PATCH",
        JSON.stringify({
          nomPersonneStage: formState.inputs.nomPersonneStage.value,
          courrielPersonneStage: formState.inputs.courrielPersonneStage.value,
          nomEntreprise: formState.inputs.nomEntreprise.value,
          numTelephone: formState.inputs.numTelephone.value,
          addresseEntreprise: formState.inputs.addresseEntreprise.value,
          typeStage: formState.inputs.typeStage.value,
          posteDisponible: formState.inputs.posteDisponible.value,
          descriptionStage: formState.inputs.descriptionStage.value,
          remuneration: formState.inputs.remuneration.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      history.push("/Stage/liste");
    } catch (err) {
      history.push("/Contact");
    }
  };

  if (!loadedStage && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find stage!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      {loadedStage && (
        <form className="place-form" onSubmit={stageUpdateSubmitHandler}>
          <Input
            id="nomPersonneStage"
            element="input"
            type="text"
            label="Nom du responsable"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            errorText="Entrez un nom valide."
            onInput={inputHandler}
            initialValue={loadedStage.nomPersonneStage}
            initialValid={true}
          />
          <Input
            id="courrielPersonneStage"
            element="input"
            type="text"
            label="Courriel du responsable"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="Entrez un courriel valide."
            onInput={inputHandler}
            initialValue={loadedStage.courrielPersonneStage}
            initialValid={true}
          />
          <Input
            id="nomEntreprise"
            element="input"
            type="text"
            label="Nom de l'entreprise"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Entrez un entreprise valide."
            onInput={inputHandler}
            initialValue={loadedStage.nomEntreprise}
            initialValid={true}
          />
          <Input
            id="numTelephone"
            element="input"
            type="text"
            label="Numero telephone du responsable (###-###-####)"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_TELEPHONE()]}
            errorText="Entrez un numero valide."
            onInput={inputHandler}
            initialValue={loadedStage.numTelephone}
            initialValid={true}
          />
          <Input
            id="addresseEntreprise"
            element="input"
            type="text"
            label="Addresse du entreprise"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
            errorText="Entrez un addresse valide."
            onInput={inputHandler}
            initialValue={loadedStage.addresseEntreprise}
            initialValid={true}
          />
          <Input
            id="typeStage"
            element="select"
            type="text"
            label="Type de stage"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Choissisez le type de stage."
            onInput={inputHandler}
            initialValue={loadedStage.typeStage}
            initialValid={true}
          />
          <Input
            id="posteDisponible"
            element="input"
            type="text"
            label="Nombre de poste disponible"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Entrez un nombre valide."
            onInput={inputHandler}
            initialValue={loadedStage.posteDisponible}
            initialValid={true}
          />
          <Input
            id="descriptionStage"
            element="textarea"
            type="text"
            label="Description du stage disponible"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            errorText="Entrez un nombre valide."
            onInput={inputHandler}
            initialValue={loadedStage.descriptionStage}
            initialValid={true}
          />
          <Input
            id="remuneration"
            element="input"
            type="text"
            label="Salaire"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Entrez un nombre valide."
            onInput={inputHandler}
            initialValue={loadedStage.remuneration}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Mettre le stage à jour
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateStage

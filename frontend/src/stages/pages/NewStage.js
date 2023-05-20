import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../../Shared/Components/FormElements/Input";
import Button from "../../Shared/Components/FormElements/Button";
import { useForm } from "../../Shared/hooks/form-hook";
import { useHttpClient } from "../../Shared/hooks/http-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_TELEPHONE,
} from "../../Shared/util/validators";
import  "./StageForm.css"

const NewStage = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
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

  const history = useHistory();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formState.inputs);

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/stages/",
        "POST",
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
      console.log(responseData);
      history.push("/Stage/liste");
    } catch (err) {
      history.push("/Contact")
    }
  };

  return (
    <React.Fragment>
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="nomPersonneStage"
          element="input"
          type="text"
          label="Nom du responsable"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          errorText="Entrez un nom valide."
          onInput={inputHandler}
        />
        <Input
          id="courrielPersonneStage"
          element="input"
          type="text"
          label="Courriel du responsable"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorText="Entrez un courriel valide."
          onInput={inputHandler}
        />
        <Input
          id="nomEntreprise"
          element="input"
          type="text"
          label="Nom de l'entreprise"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Entrez un entreprise valide."
          onInput={inputHandler}
        />
        <Input
          id="numTelephone"
          element="input"
          type="text"
          label="Numero telephone du responsable (###-###-####)"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_TELEPHONE()]}
          errorText="Entrez un numero valide."
          onInput={inputHandler}
        />
        <Input
          id="addresseEntreprise"
          element="input"
          type="text"
          label="Addresse du entreprise"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
          errorText="Entrez un addresse valide."
          onInput={inputHandler}
        />
        <Input
          id="typeStage"
          element="select"
          type="text"
          label="Type de stage"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Choissisez le type de stage."
          onInput={inputHandler}
        />
        <Input
          id="posteDisponible"
          element="input"
          type="text"
          label="Nombre de poste disponible"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Entrez un nombre valide."
          onInput={inputHandler}
        />
        <Input
          id="descriptionStage"
          element="textarea"
          type="text"
          label="Description du stage disponible"
          validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]}
          errorText="Entrez un nombre valide."
          onInput={inputHandler}
        />
        <Input
          id="remuneration"
          element="input"
          type="text"
          label="Salaire"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Entrez un nombre valide."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Ajouter Stage
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewStage;

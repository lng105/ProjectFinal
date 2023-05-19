import React from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../Shared/Components/FormElements/Input';
import Button from '../../Shared/Components/FormElements/Button';
import { useForm } from '../../Shared/hooks/form-hook'
import { useHttpClient } from '../../Shared/hooks/http-hook';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL
} from '../../Shared/util/validators';

const NewEtudiant = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      etudiantDA: {
        value: "",
        isValid: false,
      },
      etudiantNom: {
        value: "",
        isValid: false,
      },
      etudiantCourriel: {
        value: "",
        isValid: false,
      },
      etudiantProfil: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const placeSubmitHandler = async event => {
    event.preventDefault();
    console.log(formState.inputs);

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/etudiants/",
          "POST",
          JSON.stringify({
            etudiantDA: formState.inputs.etudiantDA.value,
            etudiantNom: formState.inputs.etudiantNom.value,
            etudiantCourriel: formState.inputs.etudiantCourriel.value,
            etudiantProfil: formState.inputs.etudiantProfil.value,
          }),
          {
            'Content-Type': 'application/json'
          }
        );
      console.log(responseData);
      history.push("/Etudiant/liste");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="etudiantDA"
        element="input"
        type="text"
        label="Etudiant DA"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un DA valide."
        onInput={inputHandler}
      />
      <Input
        id="etudiantNom"
        element="input"
        type="text"
        label="Nom"
        validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]}
        errorText="Entrez un nom valide."
        onInput={inputHandler}
      />
      <Input
        id="etudiantCourriel"
        element="input"
        type="text"
        label="Courriel"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        errorText="Entrez un courriel valide."
        onInput={inputHandler}
      />
      <Input
        id="etudiantProfil"
        element="textarea"
        label="Profil"
        validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]}
        errorText="Entrez une description valide."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Ajouter Etudiant
      </Button>
    </form>
    </React.Fragment>
  );
};

export default NewEtudiant;
  
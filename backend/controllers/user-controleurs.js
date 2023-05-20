const { v4: uuidv4 } = require("uuid");
const HttpErreur = require("../models/http-erreur");
const Users = require("../models/users");

const inscription = async (requete, reponse, next) => {
  const { typeCompte, nom, courriel, password } = requete.body;

  let userExist;

  try {
    userExist = await Users.findOne({ courriel: courriel });
  } catch {
    return next(new HttpErreur("Échec vérification utilisateur existe", 500));
  }

  if (userExist) {
    return next(
      new HttpErreur("Utilisateur existe déjà, veuillez vos connecter", 422)
    );
  }

  let newUser = new Users({
    typeCompte,
    nom,
    courriel,
    password,
  });
  try {
    await newUser.save();
  } catch (err) {
    return next(new HttpErreur("Erreur lors de l'ajout de l'utilisateur", 422));
  }
  reponse.status(201).json({ user: newUser.toObject({ getter: true }) });
};

const connexion = async (requete, reponse, next) => {
  const { courriel, password } = requete.body;

  let userExist;

  try {
    userExist = await Users.findOne({ courriel: courriel });
  } catch {
    return next(
      new HttpErreur("Connexion échouée, veuillez réessayer plus tard", 500)
    );
  }

  if (!userExist || userExist.password !== password) {
    return next(new HttpErreur("Courriel ou mot de passe incorrect", 401));
  }

  reponse.json({
    message: "connexion réussie!",
    user: userExist.toObject({ getters: true }),
  });
};

exports.inscription = inscription;
exports.connexion = connexion;

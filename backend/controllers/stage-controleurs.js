const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

const Stage = require("../models/stage")

const getStageById = async (requete, response, next) =>{
    const stageID = requete.params.stageID;
    let stage;

    try{
        stage = await Stage.findById(stageID);
    }catch(err){
        return next(
            new HttpErreur("Erreur lors de la récupération du stage",500)
        );
    }
    if (!stage) {
        return next(new HttpErreur("Aucun stage trouvée pour l'id fourni", 404));
      }
      reponse.json({ stage: stage.toObject({ getters: true }) });
}

const creerStage = async (requete, reponse, next) =>{
    const {nomPersonnageStage, courrielPersonneStage, nomEntreprise, addresseEntreprise, 
        typeStage, posteDisponible, descriptionStage, remuneration} = requete.body;
    const nouvelleStage = new Stage({
        nomPersonnageStage, 
        courrielPersonneStage, 
        nomEntreprise, 
        addresseEntreprise, 
        typeStage, 
        posteDisponible, 
        descriptionStage, 
        remuneration
    })

    try {
        await nouvelleStage.save();
      } catch (err) {
        const erreur = new HttpErreur("Création de stage échouée", 500);
        return next(erreur);
      }
      reponse.status(201).json({ stage: nouvelleStage });
}

const updateStage = async (requete, reponse, next) => {
    const { nomPersonnageStage, courrielPersonneStage, nomEntreprise, addresseEntreprise, 
        typeStage, posteDisponible, descriptionStage, remuneration } = requete.body;
    const stageID = requete.params.stageID;
  
    let stage;
  
    try {
      stage = await Stage.findById(stageID);
      stage.nomPersonnageStage = nomPersonnageStage;
      stage.courrielPersonneStage = courrielPersonneStage;
      stage.nomEntreprise = nomEntreprise;
      stage.addresseEntreprise = addresseEntreprise;
      stage.typeStage = typeStage;
      stage.posteDisponible = posteDisponible;
      stage.descriptionStage = descriptionStage;
      stage.remuneration = remuneration;
      await stage.save();
    } catch {
      return next(
        new HttpErreur("Erreur lors de la mise à jour de la stage", 500)
      );
    }
  
    reponse.status(200).json({ stage: stage.toObject({ getters: true }) });
  };

  const supprimerStage = async (requete, reponse, next) => {
    const stageID = requete.params.stageID;
    let stage;
    try {
        stage = await Stage.findByIdAndRemove(stageID)
    } catch {
      return next(
        new HttpErreur("Erreur lors de la suppression du stage", 500)
      );
    }
    if(!stage){
      return next(new HttpErreur("Impossible de trouver le stage", 404));
    }
    reponse.status(200).json({ message: "Stage supprimé" });
  };




exports.getStageById = getStageById;
exports.creerStage = creerStage;
exports.updateStage = updateStage;
exports.supprimerStage = supprimerStage;
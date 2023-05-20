const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");

const HttpErreur = require("../models/http-erreur");

const Stage = require("../models/stage")
const Etudiant = require("../models/etudiant")

const getStage = async (requete, reponse, next) =>{
  let stages;

  try{
    stages = await Stage.find({}, { remuneration: 0, numTelephone: 0 });
  }catch(err){
      return next(new HttpErreur("Erreur accès Stage",500));
  }

  reponse.json({
    stages: stages.map((stage) => stage.toObject({ getters: true })),
  });
}

const getStageById = async (requete,reponse,next) => {
  const stageId =requete.params.stageId;
  let stage;
  try{
    stage = await Stage.findById(stageId);
  }catch(err){
    return next(
      new HttpErreur("Erreur lors de la récupération du stage", 500)
    );
  }
  if (!stage) {
    return next(new HttpErreur("Aucune stage trouvée pour l'id fourni", 404));
  }
  reponse.json({ stage: stage.toObject({ getters: true }) });
}

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth:{
    user:"LNProjetFinal@outlook.com",
    pass:"1234test"
  }
})

const creerStage = async (requete, reponse, next) =>{
    const {nomPersonneStage, courrielPersonneStage, nomEntreprise, numTelephone, addresseEntreprise, 
        typeStage, posteDisponible, descriptionStage, remuneration,etudiant} = requete.body;
    const nouvelleStage = new Stage({
        nomPersonneStage, 
        courrielPersonneStage, 
        nomEntreprise,
        numTelephone,
        addresseEntreprise, 
        typeStage, 
        posteDisponible, 
        descriptionStage, 
        remuneration,
        etudiant
    })

    //Mail du prof don't forget
    //sylvain.labranche@cmontmorency.qc.ca

    try {
        await nouvelleStage.save();
        const mailOptions = {
          from: "LNProjetFinal@outlook.com",
          to: "lngk106@gmail.com", 
          subject: "Nouveau stage disponible",
          text: `Nouveau stage disponible`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Erreur sending courriel:", error);
          } else {
            console.log("Courriel sent:", info.response);
          }
        });

      } catch (err) {
        const erreur = new HttpErreur("Création de stage échouée", 500);
        return next(erreur);
      }
      reponse.status(201).json({ stage: nouvelleStage.toObject({getter:true})});
}

const updateStage = async (requete, reponse, next) => {
    const { nomPersonneStage, courrielPersonneStage, nomEntreprise, addresseEntreprise, 
        typeStage, posteDisponible, descriptionStage, remuneration } = requete.body;
    const stageId = requete.params.stageId;
  
    let stage;
  
    try {
      stage = await Stage.findById(stageId);
      stage.nomPersonneStage = nomPersonneStage;
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
    const stageId = requete.params.stageId;
    let stage;
    try {
        stage = await Stage.findByIdAndRemove(stageId)
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

exports.getStage = getStage;
exports.getStageById = getStageById;
exports.creerStage = creerStage;
exports.updateStage = updateStage;
exports.supprimerStage = supprimerStage;

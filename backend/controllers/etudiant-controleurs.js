const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

const Etudiant = require("../models/etudiant")

const getEtudiants = async (requete, reponse, next) =>{
    let etudiants;

    try{
        etudiants = await Etudiant.find({});
    }catch(err){
        return next(new HttpErreur("Erreur accès etudiant",500));
    }

    reponse.json({
      etudiants: etudiants.map((etudiant) =>
      etudiant.toObject({ getters: true })
      ),
    });
}

const creerEtudiant = async (requete, reponse, next) =>{
    const {etudiantDA, etudiantNom, etudiantCourriel, etudiantProfil, } = requete.body;
    const nouveauEtudiant = new Etudiant({
        etudiantDA, 
        etudiantNom, 
        etudiantCourriel, 
        etudiantProfil,
        stages
    })

    try {
      await nouveauEtudiant.save();
    } catch (err) {
      const erreur = new HttpErreur("Création de etudiant échouée", 500);
      return next(erreur);
    }
    
      reponse.status(201).json({ etudiant: nouveauEtudiant.toObject({getter:true}) });
}

const updateEtudiant = async (requete, reponse, next) => {
    const { etudiantDA, etudiantNom, etudiantCourriel, etudiantProfil, } = requete.body;
    const etudiantID = requete.params.etudiantID;
    let etudiant;
  
    try {
        etudiant = await Etudiant.findById(etudiantID);
        etudiant.etudiantDA = etudiantDA;
        etudiant.etudiantNom = etudiantNom;
        etudiant.etudiantCourriel = etudiantCourriel;
        etudiant.etudiantProfil = etudiantProfil;
      await etudiant.save();
    } catch {
      return next(
        new HttpErreur("Erreur lors de la mise à jour de la stage", 500)
      );
    }
  
    reponse.status(200).json({ stage: stage.toObject({ getters: true }) });
  };

  const supprimerEtudiant = async (requete, reponse, next) => {
    const etudiantID = requete.params.etudiantID;
    let etudiant;
    try {
      etudiant = await Etudiant.findByIdAndDelete(etudiantID);
    } catch {
      return next(
        new HttpErreur("Erreur lors de la suppression du etudiant", 500)
      );
    }
    if(!etudiant){
      return next(new HttpErreur("Impossible de trouver le etudiant", 404));
    }
    reponse.status(200).json({ message: "Etudiant supprimé" });
  };

exports.getEtudiants = getEtudiants
exports.creerEtudiant = creerEtudiant
exports.updateEtudiant = updateEtudiant
exports.supprimerEtudiant = supprimerEtudiant
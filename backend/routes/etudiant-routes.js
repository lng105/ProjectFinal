const express = require("express");

const controleursEtudiant = require("../controllers/etudiant-controleurs")
const router = express.Router()

router.get("/",controleursEtudiant.getEtudiants);
router.post("/",controleursEtudiant.creerEtudiant);
router.patch("/:etudiantID",controleursEtudiant.updateEtudiant);
router.delete("/:etudiantID",controleursEtudiant.supprimerEtudiant);

module.exports = router;
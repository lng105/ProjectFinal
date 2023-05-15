const express = require("express");

const controleursEtudiant = require("../controllers/etudiant-controleurs")
const router = express.Router()

router.get("/:etudiantID",controleursEtudiant.getEtudiantById);
router.post("/",controleursEtudiant.creerEtudiant);
router.patch("/:etudiantID",controleursEtudiant.updateEtudiant);
router.delete("/:etudiantID",controleursEtudiant.supprimerEtudiant);
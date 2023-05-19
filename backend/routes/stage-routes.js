const express = require("express");

const controleursStage = require("../controllers/stage-controleurs")
const router = express.Router()

router.get("/",controleursStage.getStage);
router.post("/",controleursStage.creerStage);
router.patch("/:stageID",controleursStage.updateStage);
router.delete("/:stageID",controleursStage.supprimerStage)

module.exports = router;
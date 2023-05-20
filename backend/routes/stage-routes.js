const express = require("express");

const controleursStage = require("../controllers/stage-controleurs")
const router = express.Router()

router.get("/",controleursStage.getStage);
router.get("/:stageId",controleursStage.getStageById);
router.post("/",controleursStage.creerStage);
router.patch("/:stageId",controleursStage.updateStage);
router.delete("/:stageId",controleursStage.supprimerStage)

module.exports = router;
const express = require("express");

const controleursUser = require("../controllers/user-controleurs")
const router = express.Router()

router.post('/inscription', controleursUser.inscription);
router.post('/connexion', controleursUser.connexion);


module.exports = router;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    typeCompte:{type:String, enum:["Employeur", "Etudiant","Coordonnateur"], required: true},
    nom:{type:String, require:true},
    courriel:{type:String, require:true},
    password:{type:String, require:true}
})

module.exports = mongoose.model("User", userSchema);
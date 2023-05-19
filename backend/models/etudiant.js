const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const etudiantSchema = new Schema({
    etudiantDA:{type:Number,  required:true},
    etudiantNom:{type:String, required:true},
    etudiantCourriel:{type:String, required:true},
    etudiantProfil:{type:String,required:true}
})

module.exports = mongoose.model("Etudiant", etudiantSchema);
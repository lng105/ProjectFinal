const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const etudiantSchema = new schema({
    etudiantDA:{type:Number, unique:true, required:true},
    etudiantNom:{type:String, required:true},
    etudiantCourriel:{type:String, required:true},
    etudiantProfil:{type:String,required:true}
})

module.exports = mongoose.schema ("Etudiant", etudiantSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stageSchema = new Schema({
        nomPersonneStage:{type:String, required: true,unique: false},
        courrielPersonneStage:{type:String, required: true,unique: false},
        nomEntreprise:{type:String, required: true,unique: false},
        numTelephone:{type:String, required: true,unique: false},
        addresseEntreprise:{type:String, required: true,unique: false},
        typeStage:{type:String, enum:['Reseaux et securite', 'Developpement application'], unique: false},
        posteDisponible:{type:Number, required: true,unique: false},
        descriptionStage:{type:String, required: true,unique: false},
        remuneration:{type:Number, required: true, unique: false}
})

module.exports = mongoose.model("Stage", stageSchema);
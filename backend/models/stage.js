const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stageSchema = new Schema({
        nomPersonneStage:{type:String, required: true},
        courrielPersonneStage:{type:String, required: true},
        nomEntreprise:{type:String, required: true},
        addresseEntreprise:{type:String, required: true},
        typeStage:{type:String, enum:['Reseaux et securite', 'Developpement application']},
        posteDisponible:{type:Number, required:true},
        descriptionStage:{type:String, required: true},
        remuneration:{type:Number, unique:true}
})

module.exports = mongoose.model("Stage", stageSchema);
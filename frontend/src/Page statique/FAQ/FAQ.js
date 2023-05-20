import React from "react";
import "./FAQ.css"

function FAQ(){
    return(
        <div className="container-FAQ">        
        <h1 className="h1-FAQ">Foire aux questions - FAQ</h1>
        
        <h3 className="h3-FAQ">Est-ce que le stage est obligatoire?</h3>
        <p>-Le stage de fin d'études en informatique est obligatoire 
			  pour l'obtention du diplôme collgégial.</p>
       
        <h3 className="h3-FAQ">Quel est l'horaire de l'étudiant durant les stages?</h3>
        <p className="p-FAQ">-L'étudiant doit respecter l'horaire de l'entreprise durant son stage.</p>
        
        <h3 className="h3-FAQ">Est-ce que l'étudiant travaille pendant les journées pédagogiques et
			  les journées de rattrapage?</h3>
        <p className="p-FAQ">-L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même
			  durant les journées pédagogiques et de rattrapage.</p>
        
        <h3 className="h3-FAQ">Quelle est la durée d'un stage de fin d'études?</h3>
        <p>-La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation).</p>

        <h3 className="h3-FAQ">Quelles sont les dates prévues pour les stages?</h3>
        <p className="p-FAQ">-Les stages sont prévus du 21 janvier au 3 mai 2019.</p>
        </div>
    )
}

export default FAQ
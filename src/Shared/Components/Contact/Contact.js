import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Erreur lors de l'ajout du stage</h2>
      <p>Si vous rencontrez des difficultés pour ajouter un stage, veuillez contacter le superviseur des stages :</p>
      <ul>
        <li>Sylvain Labranche</li>
        <li><a href="mailto:sylvain.labranche@cmontmorency.qc.ca">sylvain.labranche@cmontmorency.qc.ca</a></li>
      </ul>
    </div>
  );
};

export default Contact;

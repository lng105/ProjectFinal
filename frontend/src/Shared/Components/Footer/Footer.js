import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Sylvain Labranche</h3>
            <ul>
              <li><a href="mailto:sylvain.labranche@cmontmorency.qc.ca">sylvain.labranche@cmontmorency.qc.ca</a></li>
              <li>Date numero modification</li>
            </ul>
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Cegep Montmorency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

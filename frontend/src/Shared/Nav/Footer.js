import React from "react";
import "./Footer.css"

function Footer(){
    return(
        
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Sylvain Labranche</h3>
                        <ul>
                            <li>Courriel</li>
                            <li>Date numero modification</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Cegep Montmorency
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer
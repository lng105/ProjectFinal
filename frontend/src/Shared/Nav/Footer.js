import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Sylvain Labranche</h1>
                    </div>
                    <div className="col">
                        <h1>Courriel</h1>
                    </div>
                    <div className="col">
                        <h1>Date numero modification</h1>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getDate}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer
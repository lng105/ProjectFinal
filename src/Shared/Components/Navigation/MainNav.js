import React from "react";
import { Link } from "react-router-dom"
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNav.css"
import logo from "../../../Image/images.png"

function MainNav(props){
    return (
        <React.Fragment>
            <MainHeader>
                <h1 className="main-navigation__title">
                    <Link to="/">
                        <img src={logo} alt="College Montmorency" style={{ width: "50x", height: "50px" }}/>
                    </Link>
                </h1>
                <nav className="main-navigation_header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNav
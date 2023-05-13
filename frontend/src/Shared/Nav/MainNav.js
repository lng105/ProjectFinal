import React from "react";
import { Link } from "react-router-dom"
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNav.css"

function MainNav(props){
    return (
        <React.Fragment>
            <MainHeader>
                <h1 className="main-navigation__title">
                    <Link to="/">College Montmorency</Link>
                </h1>
                <nav className="main-navigation_header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNav
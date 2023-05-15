import React from "react";
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";
import "./App.css"
import MainNav from "./Shared/Nav/MainNav";
import Accueil from "./Page statique/Accueil/Accueil";
import Employeurs from "./Page statique/Employeurs/Employeurs"
import Etudiants from "./Page statique/Etudiants/Etudiants"
import FAQ from "./Page statique/FAQ/FAQ"
import Footer from "./Shared/Nav/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    <Router>
      <MainNav/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Accueil/>
          </Route>
          <Route path="/Employeurs">
            <Employeurs/>
          </Route>
          <Route path="/Etudiants">
            <Etudiants/>
          </Route>
          <Route path="/FAQ">
            <FAQ/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </div>
    <Footer/>
    
    </div>
  );
}

export default App;

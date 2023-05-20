import React from "react";
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";
import "./App.css"
import MainNav from "./Shared/Components/Navigation/MainNav";
import Accueil from "./Page statique/Accueil/Accueil";
import Employeurs from "./Page statique/Employeurs/Employeurs"
import EtudiantStat from "./Page statique/Etudiants/Etudiants"
import FAQ from "./Page statique/FAQ/FAQ"
import Footer from "./Shared/Components/Footer/Footer";
import NewEtudiant from "./etudiants/pages/NewEtudiant";
import Etudiants from "./etudiants/pages/listerEtudiant";
import NewStage from "./stages/pages/NewStage";
import Stages from "./stages/pages/listerStage";
import Contact from "./Shared/Components/Contact/Contact";
import UpdateStage from "./stages/pages/UpdateStage";
import ProfilesEtCompetences from "./Page statique/ProfilsCompetences/ProfilsCompetences";

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
          <Route path="/Stage/liste" exact>
            <Stages/>
          </Route>
          <Route path="/Contact" exact>
            <Contact/>
          </Route>
          <Route path="/Stage/new" exact>
            <NewStage/>
          </Route>
          <Route path="/stages/:stageId" exact>
            <UpdateStage/>
          </Route>
          <Route path="/Etudiant/liste" exact>
            <Etudiants/>
          </Route>
          <Route path="/Etudiant/new" exact>
            <NewEtudiant/>
          </Route>
          <Route path="/ProfilesEtCompetences" exact>
            <ProfilesEtCompetences/>
          </Route>
          <Route path="/Employeurs" exact>
            <Employeurs/>
          </Route>
          <Route path="/Etudiants" exact>
            <EtudiantStat/>
          </Route>
          <Route path="/FAQ" exact>
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

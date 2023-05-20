import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import MainNav from "./Shared/Components/Navigation/MainNav";
import Accueil from "./Page statique/Accueil/Accueil";
import Employeurs from "./Page statique/Employeurs/Employeurs";
import EtudiantStage from "./Page statique/Etudiants/Etudiants";
import FAQ from "./Page statique/FAQ/FAQ";
import Footer from "./Shared/Components/Footer/Footer";
import NewEtudiant from "./etudiants/pages/NewEtudiant";
import Etudiants from "./etudiants/pages/listerEtudiant";
import NewStage from "./stages/pages/NewStage";
import Stages from "./stages/pages/listerStage";
import Contact from "./Shared/Components/Contact/Contact";
import UpdateStage from "./stages/pages/UpdateStage";
import ProfilesEtCompetences from "./Page statique/ProfilsCompetences/ProfilsCompetences";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./Shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
        <Route path="/Stage/liste" exact>
          <Stages />
        </Route>
        <Route path="/Stage/new" exact>
            <NewStage />
        </Route>
        <Route path="/Stage/:stageId" exact>
            <UpdateStage />
        </Route>
        <Route path="/Etudiant/liste" exact>
          <Etudiants />
        </Route>
        <Route path="/Etudiant/new" exact>
            <NewEtudiant />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/ProfilesEtCompetences" exact>
          <ProfilesEtCompetences />
        </Route>
        <Route path="/Employeurs" exact>
          <Employeurs />
        </Route>
        <Route path="/Etudiants" exact>
          <EtudiantStage />
        </Route>
        <Route path="/FAQ" exact>
          <FAQ />
        </Route>
        <Route path="/Auth" exact>
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className="page-container">
      <div className="content-wrap">
        <AuthContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            userId: userId,
            login: login,
            logout: logout,
          }}
        >
          <Router>
            <MainNav />
            <main>{routes}</main>
          </Router>
        </AuthContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default App;

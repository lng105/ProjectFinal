import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && (
          <li>
            <NavLink to="/Stage/Liste">Liste Stage</NavLink>
          </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/Stage/new">Ajouter Stage</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/Etudiant/Liste">Liste Etudiant</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/Etudiant/new">Ajouter Etudiant</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/ProfilesEtCompetences">
          Profils et competences des stagiaires
        </NavLink>
      </li>
      <li>
        <NavLink to="/Employeurs">Employeurs</NavLink>
      </li>
      <li>
        <NavLink to="/Etudiants">Etudiants</NavLink>
      </li>
      <li>
        <NavLink to="/FAQ">FAQ</NavLink>
      </li>
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Connexion</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Déconnexion</button>
        </li>
      )}
    </ul>
  );
};
export default NavLinks;

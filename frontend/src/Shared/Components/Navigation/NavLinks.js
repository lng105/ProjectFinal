import React from 'react';
import {NavLink} from 'react-router-dom'
import './NavLinks.css'

function NavLinks(props){
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to="/Stage/Liste">Liste Stage</NavLink>
            </li>
            <li>
                <NavLink to="/Stage/new">Ajouter Stage</NavLink>
            </li>
            <li>
                <NavLink to="/Etudiant/Liste">Liste Etudiant</NavLink>
            </li>
            <li>
                <NavLink to="/Etudiant/new">Ajouter Etudiant</NavLink>
            </li>
            <li>
                <NavLink to="/ProfilesEtCompetences">Profils et competences des stagiaires</NavLink>
            </li>
            <li>
                <NavLink to="/Employeurs">Employeurs</NavLink>
            </li>
            <li>
                <NavLink to="/Etudiants">Etudiants</NavLink>
            </li><li>
                <NavLink to="/FAQ">FAQ</NavLink>
            </li>
        </ul>
    )
}
export default NavLinks
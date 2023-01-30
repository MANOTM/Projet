import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

    return  <header className="header">
    <ul>
        <li><NavLink to="">Accueil</NavLink></li>
        <li><NavLink to="/ajouter">Ajouter Un Article</NavLink></li>
        <li><NavLink to="/affiche">Afficher Les Articles</NavLink></li>
        <li><NavLink to="/distribution">Distribution Des Articles</NavLink></li>
    </ul>
</header> 
}
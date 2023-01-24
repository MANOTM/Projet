import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
   
    return  <header className="header">
    <ul>
        <li><NavLink to="">Accueil</NavLink></li>
        <li><NavLink to="/ajouter">Ajouter Produits</NavLink></li>
        <li><NavLink to="/afficher">Afficher Les Produits</NavLink></li>
        <li><NavLink to="/distribution">Distribution Des Produits</NavLink></li>
    </ul>
</header> 
}

import React from "react";
import { NavLink } from "react-router-dom";

import "./TopMenu.css";
 
export default function TopMenu(props)
{
    return (
		<div className="topMenu">

			<NavLink className="navButton" to="/">Strona główna</NavLink>
			<NavLink className="navButton" to="/events">Obsługa zdarzeń</NavLink>
			<NavLink className="navButton" to="/videos">Filmy</NavLink>
			<NavLink className="navButton" to="/contact">Kontakt</NavLink>

			{ props.children }
			
		</div>
	);
}

import React, { Component } from "react";

import logo from "../logo.svg";
import "./CHeader.css";

class CHeader extends Component
{
	render()
	{
		const { aName, aFamily } = this.props;

		return (
			<div className="headerContainer">
				<img src={logo} className="headerLogo" alt="logo" />
				<h2>Witaj w naszym serwisie { aName } { aFamily }</h2>
			</div>
		);
	}
}

export default CHeader;

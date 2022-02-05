import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

import "./PageHeader.css";

export default function PageHeader()
{
	return (
		<div className="pageHeader">
			<h1>
				<Link to="/">
					<img src={ logo } alt=""/>
					Strona demonstacyjna
				</Link>
			</h1>
		</div>
	);
}
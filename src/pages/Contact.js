import React from "react";
import ContactForm from "../components/ContactForm.js";

import "./Contact.css";
 
export default function Contact()
{
	return (
		<div className="contactPage">
			<h1>Kontakt</h1>
			<div className="contactInfo">
				<h2>Dane kontaktowe</h2>
				<b>Cyprian Wojtas</b><br/>
				<a href="mailto:moj@adres-email.pl">moj@adres-email.pl</a><br/>
				+48 12 345 67 89
			</div>
			<ContactForm/>
		</div>
	);
}
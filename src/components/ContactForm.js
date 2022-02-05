import React, { Component } from 'react';

import "./ContactForm.css";
 
export default class ContactForm extends Component
{
	constructor()
	{
		super();
		
		this.state =
		{
			name: "",
			eMail: "",
			message: "",

			nameError: "",
			eMailError: "",
			messageError: ""
		};
	}

	checkName(name)
	{
		if (!name) name = this.state.name;

		if (!name)
		{
			this.setState({ nameError: "Pole nie może być puste" });
			return false;
		}
		
		this.setState({ nameError: "" });
		return true;
	}

	checkEmail(eMail)
	{
		if (!eMail) eMail = this.state.eMail;

		if (!eMail)
		{
			this.setState({ eMailError: "Pole nie może być puste" });
			return false;
		}

		if (!eMail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
		{
			this.setState({ eMailError: "To nie jest poprawny adres e-mail" });
			return false;
		}
		
		this.setState({ eMailError: "" });
		return true;
	}

	checkMessage(message)
	{
		if (!message) message = this.state.message;

		if (!message)
		{
			this.setState({ messageError: "Pole nie może być puste" });
			return false;
		}
		
		this.setState({ messageError: "" });
		return true;
	}

	updateName = e =>
	{
		this.setState({ name: e.target.value });

		if (this.state.nameError)
			this.checkName(e.target.value);
	};

	updateEMail = e =>
	{
		this.setState({ eMail: e.target.value });

		if (this.state.eMailError)
			this.checkEmail(e.target.value);
	};

	updateMessage = e =>
	{
		e.target.style.height = 'auto';
		e.target.style.height = e.target.scrollHeight + 2 + 'px';

		this.setState({ message: e.target.value });

		if (this.state.messageError)
			this.checkMessage(e.target.value);
	};

	sendMessage = e =>
	{
		e.preventDefault();

		const nameCheck    = this.checkName(),
		      eMailCheck   = this.checkEmail(),
			  messageCheck = this.checkMessage();

		if (!nameCheck || !eMailCheck || !messageCheck)
			return;
		
		const requestPayload =
		{
			name: this.state.name,
			eMail: this.state.eMail,
			message: this.state.message
		};
		
		alert(`Tu nastąpiłoby wysłanie wiadomości przez API serwisu:\n${ JSON.stringify(requestPayload, undefined, "\t") }`);
		this.setState(
		{
			name: "",
			eMail: "",
			message: ""
		});
	};


	render()
	{
		return (
			<div className="contactForm">
				<form onSubmit={ this.sendMessage }>
					<h2>Napisz wiadomość</h2>
					<label className="name">
						Imię:
						<div className={ `inputBox${ this.state.nameError ? ' error' : '' }` }>
							<input type="text" onInput={ this.updateName } onBlur={ () => this.checkName() } value={ this.state.name }/>
							{ this.state.nameError && <span className="error">{ this.state.nameError }</span> }
						</div>
					</label>
					<label className="eMail">
						Adres e-mail:
						<div className={ `inputBox${ this.state.eMailError ? ' error' : '' }` }>
							<input type="text" onInput={ this.updateEMail } onBlur={ () => this.checkEmail() } value={ this.state.eMail }/>
							{ this.state.eMailError && <span className="error">{ this.state.eMailError }</span> }
						</div>
					</label>
					<label className="message">
						Wiadomość:
						<div className={ `inputBox${ this.state.messageError ? ' error' : '' }` }>
							<textarea onInput={ this.updateMessage } onBlur={ () => this.checkMessage() } value={ this.state.message }/>
							{ this.state.messageError && <span className="error">{ this.state.messageError }</span> }
						</div>
					</label>
					<div className="submit">
						<input type="submit" value="Wyślij wiadomość"/>
					</div>
				</form>
			</div>
		);
	}
}

import React, { Component } from "react";


import "./Events.css";

export default class Envents extends Component
{
	constructor()
	{
		super();
		this.state =
		{
			button1Pos:  ["auto", "auto" ],
			button2Pos: ["auto", "auto" ],
			button3Pos: ["auto", "auto" ],
			contextMenuMsg: "Tu nie otworzysz menu kontekstowego (PPM) 😋",
			contextMenuMsgCount: 0,
			mouseEventsMsg: "Mysz znajduje się poza elementem",
			dragStatus: ""
		};

		this.btn1 = React.createRef();
		this.btn2 = React.createRef();
		this.btn3 = React.createRef();
	}

	componentDidMount()
	{
		const btn1 = this.btn1.current;
		const btn2 = this.btn2.current;
		const btn3 = this.btn3.current;

		this.setState({ button1Pos: this.btnCalculateNewPos(btn1) });
		this.setState({ button2Pos: this.btnCalculateNewPos(btn2) });
		this.setState({ button3Pos: this.btnCalculateNewPos(btn3) });
	}

	btnCalculateNewPos(button)
	{
		const sizeButton = button.getBoundingClientRect();
		
		const posX = `calc((100% - ${sizeButton.width}px - 6px) * ${Math.random()} + 3px)`;
		const posY = `calc((100% - ${sizeButton.height}px - 6px) * ${Math.random()} + 3px)`;

		return [ posX, posY ];
	}

	// ===== Events ===== //

	evClick = e =>
	{
		this.setState({ button1Pos: this.btnCalculateNewPos(e.target) });
	};

	evDBClick = e =>
	{
		this.setState({ button2Pos: this.btnCalculateNewPos(e.target) });
	};

	evMouseOver = e =>
	{
		this.setState({ button3Pos: this.btnCalculateNewPos(e.target) });
	};

	evContextMenu = async e =>
	{
		e.preventDefault();
		await new Promise(resp => this.setState({ contextMenuMsgCount: this.state.contextMenuMsgCount + 1 }, resp));
		this.setState({ contextMenuMsg: `Menu kontekstowe nie działa tutaj (próbowano ${ this.state.contextMenuMsgCount } ${this.state.contextMenuMsgCount > 1 ? 'razy' : 'raz'})  😋` });
	};

	evMouseMove = e =>
	{
		let posX = e.pageX - e.target.offsetLeft,
		    posY = e.pageY - e.target.offsetTop;
		
		this.setState({ mouseEventsMsg: `Pozycja myszy: ${posX}, ${posY}` });
	};

	evMouseOut = () =>
	{
		this.setState({ mouseEventsMsg: "Mysz znajduje się poza elementem" });
	};

	// Dragging

	evDragStart = e =>
	{
		e.dataTransfer.setData("elementId", e.target.id);
		e.target.classList.add("dragged");
	};

	evDrop = e =>
	{
		e.preventDefault();
		let data = e.dataTransfer.getData("elementId");
		let draggedEl = document.getElementById(data);
		e.target.appendChild(draggedEl);

		draggedEl.classList.remove("dragged");

		for (let el of document.querySelectorAll(".draggableElments .dragOver"))
			el.classList.remove("dragOver");
	};

	// Required for dropping element
	evDragOver = e =>
	{
		if (e.target.classList.contains("dropTarget"))
			e.preventDefault();
	};

	evDragEnter = e =>
	{
		if (e.target.classList.contains("dropTarget"))
			e.target.classList.add("dragOver");
	};

	evDragLeave = e =>
	{
		if (e.target.classList.contains("dropTarget"))
			e.target.classList.remove("dragOver");
	};

	// ===== Page contents ===== //

	render()
	{
		return (
			<div className="eventsPage">
				<h1>Przykłady obsługi zdarzeń</h1>

				<div className="buttonContainer">
					<button
						onClick={ this.evClick }
						ref={ this.btn1 }
						style={ { top: this.state.button1Pos[1], left: this.state.button1Pos[0] } }
					>
						Kliknij mnie!
					</button>

					<button
						onDoubleClick={ this.evDBClick }
						ref={ this.btn2 }
						style={ { top: this.state.button2Pos[1], left: this.state.button2Pos[0] } }
					>
						Kliknij mnie 2 razy!
					</button>
					<button
						onMouseOver={ this.evMouseOver }
						ref={ this.btn3 }
						style={ { top: this.state.button3Pos[1], left: this.state.button3Pos[0] } }
					>
						Najedź na mnie!
					</button>
				</div>

				<div className="noContextMenu" onContextMenu={ this.evContextMenu }>{ this.state.contextMenuMsg }</div>

				<div className="mousePosition"
					onMouseMove={ this.evMouseMove }
					onMouseOut={ this.evMouseOut }
				>{ this.state.mouseEventsMsg }</div>

				<div className="draggableElments">
					<div className="dropTarget" onDrop={ this.evDrop } onDragOver={ this.evDragOver } onDragEnter={ this.evDragEnter } onDragLeave={ this.evDragLeave }>

						<div
							onDragStart={ this.evDragStart }
							onDrag={ this.evDrag }
							draggable="true"
							id="draggable01"
						>Przenieś mnie</div>

					</div>
					<div className="dropTarget" onDrop={ this.evDrop } onDragOver={ this.evDragOver } onDragEnter={ this.evDragEnter } onDragLeave={ this.evDragLeave }></div>
					<div className="dropTarget" onDrop={ this.evDrop } onDragOver={ this.evDragOver } onDragEnter={ this.evDragEnter } onDragLeave={ this.evDragLeave }></div>
					<div className="dropTarget" onDrop={ this.evDrop } onDragOver={ this.evDragOver } onDragEnter={ this.evDragEnter } onDragLeave={ this.evDragLeave }>
						<div
							onDragStart={ this.evDragStart }
							onDrag={ this.evDrag }
							draggable="true"
							id="draggable02"
						>Przenieś mnie 2</div>
					</div>
				</div>
				<p>{ this.state.dragStatus }</p>
			</div>
		);
	}
}
import React from "react";

import "./CFooter.css";

// function CFooter()
// {
// 	let date = new Date();

// 	return (
// 		<div>
// 			<h5>PPFront-end, przykładowy serwis React. Dzisiaj mamy: { date.toDateString() }</h5>
// 		</div>
// 	);
// }

export const CFooter = (props) =>
{
	const { weather, temp, children } = props;
	let date = new Date();

	// return React.createElement
	// (
	// 	"div",
	// 	{
	// 		className: "footerDivClass"
	// 	},
	// 	React.createElement
	// 	(
	// 		"h5",
	// 		{
	// 			id: "footerText",
	// 			className: "footerTextClass"
	// 		},
	// 		"PPFront-end, przykładowy serwis React. Dzisiaj mamy: " + date.toDateString()
	// 	)
	// );

	return (
		<div>
			<h5>
				PPFront-end, przykładowy serwis React. Dzisiaj mamy: { date.toDateString() }
				<br/>
				Stan pogody: { weather }, temparatura { temp }°.<br/>
				{ children }
			</h5>
		</div>
	);
}

// export default CFooter;
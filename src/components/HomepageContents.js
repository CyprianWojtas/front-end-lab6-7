import React, { Component } from "react";

import "./HomepageContents.css";

import jsonData from "../assets/contentsDescription.json";


export default class HomepageContents extends Component
{
	constructor()
	{
		super();

		this.txtData  = () => JSON.parse(JSON.stringify(jsonData ));

		const imgContext = require.context("../assets/img/contents/", false, /\.png$/);
		let img = {};

		this.imgs = imgContext.keys().reduce((icons, file) =>
		{
			const cname = imgContext(file);
			const label = file.slice(2, -4);
			img[label] = cname;
			return img;
		}, {});

	}

	render()
	{
		const items = [];
		for (let i = 0; i < this.txtData().count; i++)
		{
			let value = this.txtData().text[i];
			items.push (
				<div className="element" key={ i + 1 }>
					<img className="elementImg" src={ this.imgs['img' + (i + 1)] } alt="" data-testid="image"/>
					<p className="elementTxt">{ value }</p>
				</div>
			);
		}

		return (
			<div className="homepageContents">
				{ items }
			</div>
		);
	}
}

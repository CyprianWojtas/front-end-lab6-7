import React, { Component } from "react";
import VideoPlayer from "../components/VideoPlayer.js";

import "./Videos.css";

import jsonData from "../assets/videos.json";

export default class Videos extends Component
{
	constructor()
	{
		super();

		this.txtData = () => JSON.parse(JSON.stringify(jsonData));

		// this.state = { currentlyPlaying: this.txtData().data[0].source };
		this.state = { currentlyPlaying: undefined, currentlyPlayingTitle: "" };

		const imgContext = require.context("../assets/img/videos/", false, /\.png$/);
		let img = {};

		this.imgs = imgContext.keys().reduce((icons, file) =>
		{
			const cname = imgContext(file);
			const label = file.slice(2, -4);
			img[label] = cname;
			return img;
		}, {});
	}

	changeVideo(source, title)
	{
		this.setState({ currentlyPlaying: source, currentlyPlayingTitle: title });
	}

	render()
	{
		const tabData = this.txtData().data;

		const items = tabData.map(item =>
		(
			<div id={ `video-${item.id}` } className="movie" key={ item.id }>
				<img className="movieThumbnail" src={ this.imgs[item.img] } alt={ item.img }/>
				<div className="movieDescription">
					<p>{ item.description }</p>
					<button onClick={ () => this.changeVideo(item.source, item.title) }>Odtwórz teraz!</button>
				</div>
			</div>
		));

		return (
			<div className="videosPage">

				{ this.state.currentlyPlayingTitle && <h1>{ this.state.currentlyPlayingTitle }</h1> }

				<VideoPlayer src={ this.state.currentlyPlaying }/>

				<div className="movieList">
					{ items }
				</div>
			</div>
		);
	}
}

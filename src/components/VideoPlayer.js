import React, { Component } from "react";

import "./VideoPlayer.css";
 
export default class VideoPlayer extends Component
{
	constructor()
	{
		super();

		this.state =
		{
			videoState: "",
			videoProgess: 0,
			videoVolume: 1,
			buffering: false,
			paused: true
		};

		this.videoEl = React.createRef();
	}

	componentDidMount()
	{
		console.log(`Mounted video component! ${ this.props.src ? "Current video: " + this.props.src : "No video to play" }`);
	}

	componentDidUpdate(oldProps)
	{
		if (this.props.src !== oldProps.src)
		{
			const videoEl = this.videoEl.current;
			videoEl.play();

			console.log(`Updated video component! Set video to: ${ this.props.src }`);

			this.setState({ videoProgess: 0, videoState: "" });
		}
	}

	componentWillUnmount()
	{
		console.log("Video component will unmount now...");
	}

	evCanPlay = () =>
	{
		this.setState({ videoState: "Film może być odtwarzany", buffering: false });
	};
	evCanPlayThrough = () =>
	{
		this.setState({ videoState: "Film może być odtwarzany bez zatrzymywania na buforowanie", buffering: false });
	};

	evWaiting = () =>
	{
		this.setState({ videoState: "Film jest buforowany...", buffering: true });
	};

	evStalled = () =>
	{
		this.setState({ videoState: "Film nie może się załadować" });
	};

	evError = () =>
	{
		this.setState({ videoState: "Wystąpił błąd odtwarzania filmu" });
	};

	evEnded = () =>
	{
		this.setState({ videoState: "Film się zakończył" });
	};

	evPlay = () =>
	{
		this.setState({ paused: false });
	};

	evPause = () =>
	{
		this.setState({ paused: true });
	};

	setVolume = e =>
	{
		const videoEl = this.videoEl.current;
		this.setState({ videoVolume: e.target.value });
		videoEl.volume = e.target.value;
	};

	updateVolume = e =>
	{
		const videoEl = this.videoEl.current;
		this.setState({ videoVolume: videoEl.volume });
	};

	setProgress = e =>
	{
		const videoEl = this.videoEl.current;
		this.setState({ videoProgess: e.target.value });
		videoEl.currentTime = parseFloat(e.target.value) * videoEl.duration;
	};

	updateProgessBar = e =>
	{
		const videoEl = this.videoEl.current;
		this.setState({ videoProgess: (videoEl.currentTime / videoEl.duration) || 0 });
	};

	playPause = e =>
	{
		const videoEl = this.videoEl.current;
		if (videoEl.paused)
			videoEl.play();
		else
			videoEl.pause();
	};

	render()
	{
		return (
			<div className="videoPlayer">
				{
					this.props.src
					
					?
					
					<>
						<video
							src={ this.props.src }
							ref={ this.videoEl }
							className={ this.state.buffering ? "buffering" : "" }
							onCanPlay={ this.evCanPlay }
							onCanPlayThrough={ this.evCanPlayThrough }
							onWaiting={ this.evWaiting }
							onStalled={ this.evStalled }
							onError={ this.evError }
							onEnded={ this.evEnded }

							onPlay={ this.evPlay }
							onPause={ this.evPause }

							onTimeUpdate={ this.updateProgessBar }
							onVolumeChange={ this.updateVolume }
						></video>
						
						<button onClick={ this.playPause } className="playPauseButton">
							{ this.state.paused ? "▶️" : "⏸️" }
						</button>

						<input type="range" className="progressBar" onChange={ this.setProgress } min="0" max="1" step="0.001" value={ this.state.videoProgess }/>
						<input type="range" className="volumeBar" onInput={ this.setVolume } min="0" max="1" step="0.01" value={ this.state.videoVolume }/>

						<p className="videoState">Stan buforowania: { this.state.videoState }</p>
					</>
					
					:
					
					<div className="videoError">Nie wybrano filmu do odtworzenia</div>
				}
				
			</div>
		);
	}
}

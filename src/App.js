import "./App.css";

import { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Pages from "./Pages.js";
import TopMenu from "./components/TopMenu.js";
import TopMenuArticleList from "./components/TopMenuArticleList.js";
import PageHeader from "./components/PageHeader.js";
import PageFooter from "./components/PageFooter.js";


class App extends Component
{
	render()
	{
		return (
			<Router>
				<div className="App">
					<PageHeader/>
					<TopMenu>
						<TopMenuArticleList/>
					</TopMenu>
					<Pages/>
					<PageFooter/>
				</div>
			</Router>
		);
	}
}

export default App;

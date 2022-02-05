import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Events from "./pages/Events.js";
import Article from "./pages/Article.js";
import Videos from "./pages/Videos.js";

import NotFound from "./pages/NotFound.js";

import "./Pages.css";
 
function Pages ()
{
    return (
		<div className="pageContents">
			<Routes>
				<Route exact path="/"          element={ <Home/>     }></Route>
				<Route exact path="/contact"   element={ <Contact/>  }></Route>
				<Route exact path="/events"   element={ <Events/>  }></Route>
				<Route exact path="/videos"   element={ <Videos/>  }></Route>
				<Route exact path="/article/:articleId" element={ <Article/>  }></Route>
				<Route       path="*"          element={ <NotFound/> }></Route>
			</Routes>
		</div>
	);
}
 
export default Pages;

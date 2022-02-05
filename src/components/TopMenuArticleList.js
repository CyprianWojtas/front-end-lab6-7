import React from "react";
import { NavLink } from "react-router-dom";

import "./TopMenuArticleList.css";

import articles from "../assets/articles.json";
 
export default function TopMenuArticleList()
{
	const links = articles.map(article =>
	(
		<NavLink to={ `/article/${ article.id }` } key={ article.id }>{ article.title }</NavLink>
	));

    return (
		<div className="topMenuArticles">
			Artykuły
			<div className="foldingMenu">
				{ links }
			</div>
		</div>
	);
}

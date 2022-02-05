import React from "react";
import { useParams } from "react-router-dom";
import MarkdownView from "react-showdown";

import "./Article.css";

import articles from "../assets/articles.json";
import NotFound from "./NotFound.js";

export default function Article()
{
	let { articleId } = useParams();

	let article = articles.find(article => article.id === articleId );

	if (!article)
		return <NotFound/>;

	return (
		<div style={ { textAlign: "left" } } className="article">
			<MarkdownView
				markdown={ article.text }
				options={ { tables: true, emoji: true, strikethrough: true, /* tasklists: true, */ openLinksInNewWindow: true } }
			/>
		</div>
	);
}

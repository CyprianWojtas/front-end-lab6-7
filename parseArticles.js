const articlesDir = 'articles/';
const articlesFile = 'src/assets/articles.json';
const fs = require('fs');

let articles = [];

function getTitle(article)
{
	const lines = article.split("\n");

	for (let line of lines)
	{
		line = line.trim();

		if (line.startsWith("#"))
		{
			line = line.slice(1).trim();
		}

		if (line)
			return line;
	}
}

fs.readdirSync(articlesDir).forEach(file =>
{
	console.log(file);

	let article = fs.readFileSync(articlesDir + file, { encoding: "utf-8" });

	let articleObj =
	{
		id: file.slice(0, -3),
		title: getTitle(article),
		text: article,
	};

	articles.push(articleObj);
});

fs.writeFileSync(articlesFile, JSON.stringify(articles, undefined, "\t"));

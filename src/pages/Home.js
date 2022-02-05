import React from 'react';
import HomepageContents from "../components/HomepageContents.js";

export default function Home()
{
    return (
		<div className='pageHome'>
			<h1>Witaj na strone demonstracyjnej pokazującej możliwości Reacta</h1>
			<h2>Znajdziesz tutaj:</h2>
			<HomepageContents/>
		</div>
	);
}

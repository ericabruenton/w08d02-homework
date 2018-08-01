import React from "react";

//ACCEPTS PROPS AND RENDERS A LIST


//props is passed when the parent's render function is called
const NewsList  = (props) => {

	const newsList = props.news.map((story, index) => {
		return( 
		<div>
			<li key={index}>{story.source.name}</li>
			<li key={index}>{story.author}</li>
			<li key={index}>{story.title}</li>
		</div>
		)
	});
	
	console.log(props, "this is props")
	return(
		<div>
			<h4>Tennis News</h4>
			<ul>
				{newsList}
			</ul>
		</div>
	)

	
}


export default NewsList;
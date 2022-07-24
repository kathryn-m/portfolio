import React from "react"
import headings from '../headings.js'
import HtmlStringParser from "../utilities/HtmlStringParser"

export default function Card (props){
	
	const desc = HtmlStringParser(props.description)

	return (
		<div className='card'>
			<a className="card-image" href={props.url} target="_blank" rel="noreferrer">
				<picture>
		{/* <source srcSet={process.env.PUBLIC_URL + props.image_webp} type="image/webp" /> */}
					<img className="image" src={process.env.PUBLIC_URL + props.image} alt={props.alt}/>
				</picture>
			</a>
			<div className='content'>
				<a className="card-title" href={props.url} target="_blank" rel="noreferrer"><h3>{props.title}</h3></a>
				<div className="code-container flex-row-between-center flex-wrap">
					<p className="source-code-label">{headings.seeSourceCode} </p>
					<a className="code-link" href={props.code} target="_blank" rel="noreferrer"><p className="proglang flex-column-center-start">{props.proglang}</p></a>
				</div>
				{desc}
			</div>
		</div>
	)
}

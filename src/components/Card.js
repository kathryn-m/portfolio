
export default function Card (props){

	const descriptionId = `id${props.id}`

	return (
		<div className='card'>
			<a className="card-image" href={props.url} target="_blank" rel="noopener">
				<picture>
					<source srcSet={process.env.PUBLIC_URL + props.image_webp} type="image/webp" />
					<img className="image" src={process.env.PUBLIC_URL + props.image} alt={props.alt}/>
				</picture>
			</a>
			<div className='content'>
				<a className="card-title" href={props.url} target="_blank" rel="noopener"><h3>{props.title}</h3></a>
				<div className="code-container flex-row-between-center flex-wrap">
					<p className="source-code-label">See source code: </p>
					<a className="code-link" href={props.code} target="_blank" rel="noopener"><p className="proglang flex-column-center-start">{props.proglang}</p></a>
				</div>
				<p id={descriptionId}className="description">{props.description}</p>
			</div>
		</div>
	)
}
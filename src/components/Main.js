import Card from './Card.js'
import data from '../data'
import headings from '../headings.js'

export default function Main (props){
	
	let title1 = ""
	let title2 = ""
	let cards1 = []
	let cards2 = []

	if(props.sortByProjectType === "project-type"){
		title1 = headings.h2_1
		title2 = headings.h2_2
	}else{
		title1 = headings.h2_3
		title2 = headings.h2_4
	}

	data.forEach(item => {

		const card = <Card 
				key={item.id}
				id={item.id}
				title={item.title}
				description={item.description}
				proglang={item.proglang}
				code={item.code}
				image={item.image}
				image_webp={item.image_webp}
				alt={item.alt}
				url={item.url}
		/>

		if(props.sortByProjectType === "project-type"){
			if(item.role === "project"){
				cards1.push(card)
			}else if(item.role === "component"){
				cards2.push(card)
			}
		}else{
			if(item.proglang === "React"){
				cards1.push(card)
			}else if(item.proglang === "JavaScript CSS HTML"){
				cards2.push(card)
			}

		}

	})


	return (
		<div>
			<header id="top" className="main-header flex-column-center-center">

				<p className="site-title">{headings.h1}</p>
				<div className="flex-row-between-center sort-container">
					<p className="sort-label">{headings.sortLabel1}</p>
					<button 
						className="selected sort-btn-project-type sort-btn"
						onClick={e => props.onClick(e)}
					>
						{headings.sortLabel2}
					</button>
					<button 
						className="sort-btn-programming-language sort-btn"
						onClick={e => props.onClick(e)}
					>
						{headings.sortLabel3}
					</button>
				</div>
			</header>
			<div className='cards-container flex-column-center'>
				<div className="flex-row-between-end">
					<h2>{title1}</h2>
				</div>
				<div className='flex-row-start cards flex-wrap'>
					{cards1}
				</div>
				<div className="flex-row-between-end">
					<h2>{title2}</h2>
					<a className="back-to-top" href="#top">{headings.backToTop}</a>
				</div>
				<div className='flex-row-start cards flex-wrap'>
					{cards2}
				</div>
				<div className="flex-row-between-end">
					<div></div>	
					<a className="back-to-top" href="#top">{headings.backToTop}</a>
				</div>
			</div>
		</div>
	)
}

import React from "react"
import headings from '../headings.js'


export default function SiteHeader () {

	return (

		<header className="site-header">
			<div className="logo">
				<h1>{headings.logo1}</h1>
				<p className="subtitle">{headings.logo2}</p>
			</div>
			<nav>
				<ul className="flex-row-between-center navigation">
					<li className="nav-item"><a href="#" className="nav-link current">{headings.nav1}</a></li>
					{/* <li className="nav-item"><a href="#" className="nav-link">{headings.nav2}</a></li> */}
				</ul>
			</nav>
		</header>
	)
}
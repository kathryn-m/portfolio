import React from "react"

export default function SiteHeader () {

	return (

		// <header className="flex-row-between-center">
		<header className="site-header">
			<div className="logo">
				<h1>Kathryn M.</h1>
				<p className="subtitle">Frontend developer</p>
			</div>
			<nav>
				<ul className="flex-row-between-center navigation">
					<li className="nav-item"><a href="#" className="nav-link current">Home</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}
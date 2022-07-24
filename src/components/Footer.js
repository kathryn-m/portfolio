import headings from '../headings.js'

export default function Footer () {

	return (
		<footer className="flex-row-between-center">
				<p>{headings.copyright}</p>
				{/* <p>{headings.legalNotice}</p> */}
		</footer>
	)
}
import React from 'react'

// The HtmlStringParser converts a string to a <p></p> containing text and links.  
// It accepts a htmlString argument comprising one or more iterations of the pattern: stringLink [url] {linkText} with the url enclosed in [] and the linkText enclosed in {}.
// The parser assigns each iteration to an object in the paraComponents array which is then mapped to create a variable containing strings and <a> tags. The parser can process multiple text and links from one htmlString argument. It can have trailing text and / or begin with a link.

// Example htmlString: This is example text with [https://fakeurl.com]{some link text}

// The parser has been tested for:
// - mulitple links: text[url]{link text}text[url]{link text} etc
// - trailing text: text[url]{link text}text
// - starting with a link: [url]{link text}text



export default function HtmlStringParser(htmlString){

	const string = htmlString

	let paraComponents = []


	if(!string.includes("[")){
		return <p>{string}</p>
	}else{
		let fromIndex = 0

		function findIndex (char, fromIndex){
			return string.indexOf(char, fromIndex)
		}

		do{
			let paraComponent = {}

			//find the indexes that start and end the url and text for the links
			const startUrlIndex = findIndex("[", fromIndex) + 1
			const endUrlIndex = findIndex("]", fromIndex)
			const startLinkTextIndex = findIndex("{", fromIndex) + 1
			const endLinkTextIndex = findIndex("}", fromIndex)


			// use the indexes above to create variables for the paragraph text, the link url and the link text.
			const paraText = string.slice(fromIndex, startUrlIndex - 1)
			const linkUrl = string.slice(startUrlIndex, endUrlIndex)
			const linkText = string.slice(startLinkTextIndex, endLinkTextIndex)

			// assign them to paraComponent
			paraComponent = {
				fromIndex: fromIndex,
				paraText: paraText,
				linkUrl: linkUrl,
				linkText: linkText
			}

			// assign the paraComponent object to the paraComponents array
			paraComponents.push(paraComponent)

			// update the fromIndex so we can process the next chunk
			fromIndex = endLinkTextIndex + 1


		} while ( fromIndex < string.length && string.includes("[", fromIndex) )

		// abridged process for any text after the final link:
		if( fromIndex < string.length){


			let paraComponent = {}
			const paraText = string.slice(fromIndex)

			paraComponent = {
				fromIndex: fromIndex,
				paraText: paraText,
				linkUrl: "",
				linkText: ""
			}
			
			paraComponents.push(paraComponent)
		}


		//return compiled paragraph

		let contents = paraComponents.map(component => (
			<React.Fragment key={component.fromIndex}>{component.paraText} <a href={component.linkUrl} target="_blank" rel="noreferrer">{component.linkText}</a></React.Fragment>
		))

		return <p>{contents}</p>
	}
}

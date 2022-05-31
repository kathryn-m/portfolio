import React from 'react'
import SiteHeader from './components/SiteHeader.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'



export default function App () {

  const [sortByProjectType, setSortByProjectType] = React.useState("project-type")

  function changeSortType (e){
    
    const programmingLanguageBtn = document.querySelector(".sort-btn-programming-language")
    const projectTypeBtn = document.querySelector('.sort-btn-project-type')


    if (e.target === projectTypeBtn){
      setSortByProjectType("project-type")
      programmingLanguageBtn.classList.remove("selected")
      projectTypeBtn.classList.add("selected")
    }else{
      setSortByProjectType("programming-language")
      programmingLanguageBtn.classList.add("selected")
      projectTypeBtn.classList.remove("selected")
    }
  }

  return (
    <div className="app">
      < SiteHeader />
      < Main 
          sortByProjectType={sortByProjectType}
          onClick={changeSortType}
      />
      < Footer />
    </div>
  )
}


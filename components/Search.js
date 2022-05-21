import React, { useState } from 'react'
import '../styles/Home.module.css'

export default function Search() {
  // State Variables
  const [keyword, setKeyword] = useState('') //Takes in keywords typed
  const [loading, setLoading] = useState(false) //For Preloader
  const [searchResult, setSearchResult] = useState('') // Stores results from the API
  var reqTimer = null //This makes sure API is called only when user stops typing

  // Functions
  onInputChange = (event) => {
    try {
      const keyW = event.target.value.trim()
      setKeyword(keyW)
      setLoading(true)
      clearTimeout(reqTimer)
      if (keyword && keyword.length > 2) {
        reqTimer = setTimeout(() => {
          getSearchResult()
        }, 500)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  getSearchResult = () => {
    try {
      const api = `http://hn.algolia.com/api/v1/search?query={keyword}`
    } catch (e) {
      console.log(e.message)
    }
  }

  renderMenu = () => {}

  renderItem = () => {}

  return (
    <section>
      <input
        type="search"
        name="hSearch"
        id="hSearch"
        placeholder="Search Term..."
        onChange={this.onInputChange}
        className="flex transition-all duration-500 hover:transform hover:scale-110 px-2 py-1 font-quicksand rounded-sm bg-white dark:bg-black dark:text-white focus:outline-none"
      ></input>
      {renderMenu()}
    </section>
  )
}

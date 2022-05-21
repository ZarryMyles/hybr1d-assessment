import axios from 'axios'
import React, { useState, Fragment } from 'react'

function Search() {
  const [keyword, setKeyword] = useState('') //Takes in keywords typed
  const [loading, setLoading] = useState(false) //For Preloader
  const [searchResult, setSearchResult] = useState({}) // Stores results from the API
  const [firstResult, setFirstResult] = useState({}) //Stores the most popular results for initial render

  const onInputChange = (event) => {
    try {
      const keyw = event.trim()
      setKeyword(keyw)
      if (keyword && keyword.length > 2) {
        //Calls the API when at least three letters are typed
        getSearchResult()
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const getSearchResult = () => {
    setLoading(true)
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${keyword}`)
      .then((res) => {
        setSearchResult(res.data.hits)
        console.log(searchResult)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const renderMenu = () => {
    return (
      <Fragment>
        {keyword === '' || keyword.length < 3 ? (
          <section> First (display)</section>
        ) : searchResult.length < 1 ? (
          loading ? (
            <div>Loader (display)</div>
          ) : (
            <div>No results found for "{keyword}" (display)</div>
          )
        ) : (
          <div>
            Search Results (display)<br></br>
            {renderItem()}
          </div>
        )}
      </Fragment>
    )
  }

  const renderItem = () => {
    return (
      <ul>
        {searchResult.map((item, key) => {
          return <li id={key}>{item.title}</li>
        })}
      </ul>
    )
  }

  return (
    <section>
      <div>
        <input
          type="search"
          placeholder="Search keyword..."
          onChange={(e) => onInputChange(e.target.value)}
        />
        {renderMenu()}
      </div>
    </section>
  )
}

export default Search

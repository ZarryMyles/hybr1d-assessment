import React, { useState } from 'react'
import { search } from '../utils/utils'
import Results from './Results'

function Search() {
  const [searchResult, setSearchResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')

  const searc = async (val) => {
    setLoading(true)
    console.log(val)
    const results = await search(
      `http://hn.algolia.com/api/v1/search?query=${val}`,
    )
    setSearchResult(results)
    setLoading(false)
  }

  const onChangeHandler = async (e) => {
    searc(e.target.value)
    setValue(e.target.value)
  }

  const renderMovies = () => {
    let result = <h1>No Posts found</h1>
    if (searchResult) {
      result = <Results list={searchResult ? searchResult : ' '} />
    } else {
    }

    return result
  }
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChangeHandler(e)}
        placeholder="Enter Search Term..."
      />
      {renderMovies()}
    </div>
  )
}

export default Search

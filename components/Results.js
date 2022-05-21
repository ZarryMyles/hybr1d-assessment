import React from 'react'
import ResultCard from './Result'

function Results({ list }) {
  let cards = <h3>Loading...</h3>

  if (list) {
    cards = list.map((m, i) => <ResultCard key={i} item={m} />)
  }

  return (
    <div>
      <ol>{cards}</ol>
    </div>
  )
}

export default Results

import React from 'react'
import Link from 'next/link'
// import { truncStr } from '../utils/utils'

function ResultCard(props) {
  const { title, objectID } = props.item

  return (
    <li>
      <Link
        className="hover:cursor-pointer dark:text-white transition-all duration-500"
        href="/post/[id].js"
        as={`/post/${objectID}`}
      >
        <h3>{title ? title : 'No Title'}</h3>
      </Link>
    </li>
  )
}

export default ResultCard

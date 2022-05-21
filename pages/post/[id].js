import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Details() {
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState(false)
  const [postDetails, setPostDetails] = useState({})
  console.log(id)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://hn.algolia.com/api/v1/items/${id}`)
      .then((res) => {
        setPostDetails(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  return (
    <div>
      <h1>Title: {postDetails.title}</h1>
      <p>Points: {postDetails.points}</p>
      <h5>Comments:</h5>
      {postDetails.children?.map((comment) => (
        <div>
          {comment?.text ? (
            <div dangerouslySetInnerHTML={{ __html: comment?.text }} />
          ) : (
            <div>No Comments</div>
          )}
        </div>
      ))}
    </div>
  )
}

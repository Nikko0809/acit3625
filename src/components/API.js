import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Error() {
  const [getResults, setGetResults] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    axios.get('https://api.randomuser.me/')
      .then(res => {
        const response = res.data.results
        setGetResults(response)
        setHasLoaded(true)
      })
  }, [])

  if (hasLoaded) {
    const userFullName = getResults[0].name.title + " " +  getResults[0].name.first + " " + getResults[0].name.last
    return (
      <div className="todoapp stack-large">
        <h1>Random User API</h1>
        <img src={getResults[0].picture.large} alt="user picture" />
        <h3>Name: { userFullName }</h3>
        <h3>Email: { getResults[0].email }</h3>
      </div>
    )
  }

  return (
    <h1>Loading</h1>
  )

}

export default Error

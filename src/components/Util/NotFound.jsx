import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
       <button> <Link to="/" style={{color: "white"}}>Back to the Home page .....</Link> </button>
    </div>
  )
}

export default NotFound
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">About </Link>
      <span> | </span>
      <Link to="/API">API</Link>
    </nav>
  )
}

export default Navbar

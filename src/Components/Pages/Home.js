import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <p>This is the Home Page</p>
    <Link to="/home">Home</Link>
    </div>
  )
}

export default Home
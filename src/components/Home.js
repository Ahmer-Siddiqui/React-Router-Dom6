import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <p>This is a home page of our awesome app</p>
        <p>And here we are learning about router</p>
        <Link to="/about">Go to About Page</Link>
    </div>
  )
}

export default Home

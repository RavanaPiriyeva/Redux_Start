import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to='/product' style={{display:"block"}}>Product</Link>
        <Link to='/favorite' style={{display:"block"}}>Favorite</Link>

    </div>
  )
}

export default Home
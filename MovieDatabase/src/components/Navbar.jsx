import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header-nav'>
        <Link to={"/"}>Home</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/tvshows"}>TV Shows</Link>
        <Link to={"/mylist"}>My List</Link>
    </div>
  )
}

export default Navbar
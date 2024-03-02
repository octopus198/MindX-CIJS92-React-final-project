import React from 'react'
import { Movie } from './Movie'
import '../css/Home.css'

export const Trending = () => {
  return (
    <div className='trending'>
      <p className="title-body">Trending</p>
      <div className="trending-list">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  )
}

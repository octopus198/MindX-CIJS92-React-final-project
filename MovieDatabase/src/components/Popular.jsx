import React from 'react'
import { Movie } from './Movie'

export const Popular = () => {
  return (
    <div className='container popular'>
      <div className='title-body'>What's popular</div>
      <div className='popular-list'>
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

import React from 'react'
import { Trailer } from './Trailer'

export const LatestTrailers = () => {
  return (
    <div className='container latest-trailer'>
      <p className='title-body'>Latest Trailers</p>
      <div className='list-trailers'>
        <Trailer />
        <Trailer />
        <Trailer />
        <Trailer />
      </div>
    </div>
  )
}

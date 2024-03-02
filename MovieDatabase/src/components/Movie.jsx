import React from 'react'
import '../css/Home.css'

export const Movie = () => {
    const hanldeMouseEnter = () => {
        
    }
  return (
    <div className='movie'>
        <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg" alt="Movie img" className='img-movie' />
        <p className='name-movie' onMouseEnter={hanldeMouseEnter}>Đảo Hải Tặc</p>
        <p className='time-movie'>Oct 20, 1999</p>
    </div>
  )
}

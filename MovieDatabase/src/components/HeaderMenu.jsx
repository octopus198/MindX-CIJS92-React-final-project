import React from 'react'

export const HeaderMenu = () => {
    return (
        <div className='header-menu'>
            <div className="movies-tab">
                <p>Popular</p>
                <p>Now Playing</p>
                <p>Upcoming</p>
                <p>Top Rated</p>
            </div>
            <div className="tv-shows-tab">
                <p>Popular</p>
                <p>Airing Today</p>
                <p>On TV</p>
                <p>Top Rated</p>
            </div>
            <div className="people-tab">
                <p>Popular People</p>
            </div>
        </div>
    )
}

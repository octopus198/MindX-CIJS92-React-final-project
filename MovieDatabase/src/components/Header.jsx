import React from 'react'
import { IoSearch } from "react-icons/io5";

export const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='logo'>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB logo" />
                    <div className='logo-block'></div>
                </div>
                <span className='tab'>Movies</span>
                <span className='tab'>TV Shows</span>
                <span className='tab'>People</span>
            </div>
            <div className='header-right'>
                <div className='language'></div>
                <div className='login'>Login</div>
                <div className='register'>Join TMDB</div>
                <div className='search'><IoSearch className='search-logo'/></div>
            </div>
        </div>
    )
}

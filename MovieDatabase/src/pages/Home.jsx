import React from 'react'
import { Banner } from '../components/Banner'
import { Trending } from '../components/Trending'
import { LatestTrailers } from '../components/LatestTrailers'
import { Popular } from '../components/Popular'
import '../css/Home.css'


export const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <Trending />
            <LatestTrailers />
            <Popular />
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import '../css/Detail.css'
import { FaBookmark } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { Cast } from '../components/Cast';
import axios from 'axios';

export const Detail = () => {
  const DETAIL_URL = `https://api.themoviedb.org/3/movie/1011985?language=en-US`;
  const CAST_URL = `https://api.themoviedb.org/3/movie/1011985/credits?language=en-US`;
  const [listDetail, setListDetail] = useState([]);
  const [listCast, setListCast] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2RiYzEzNmIyZDVhYTJkNTM4MWFkMDBiNjZjMmM4NSIsInN1YiI6IjY1ZDU1YjRjZGIxNTRmMDE2NGEwNDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zSLtWCpGKcGASs4bbXgo92iHp4cgrF68Nmxd499DCeE'
    }
  };
  
  useEffect(() => {
    const fetchDetailData = async () => {
      const data = await axios.get(DETAIL_URL , options)
      setListDetail(data.data);
      return data;
    }
    fetchDetailData();
  }, []);
  useEffect(() => {
    const fetchCastData = async () => {
      const data = await axios.get(CAST_URL , options)
      setListCast(data.data.cast);
      return data;
    }
    fetchCastData();
  }, []);
  console.log(listDetail)
  return (
    <div className='detail'>
      <div className="container-fluid info-container" style={{backgroundImage: `linear-gradient(0, #00000099, #000000c7), url('https://media.themoviedb.org/t/p/w300_and_h450_bestv2${listDetail.backdrop_path}')`}}>
        <div className='container info'>
          <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${listDetail.poster_path}`} alt='Movie img' className='movie-img' />
          <div className='desc'>
            <p className='name-info'>{listDetail.original_title}</p>
            <div className='function'>
              <button><FaBookmark /></button>
              <button><FaList /></button>
            </div>
            <div className='overview'>
              <h3>Overview</h3>
              <p className='content-overview'>{listDetail.overview}</p>
            </div>
            <div className='producer'>
              <div className='producer-info'>
                <p className='name-producer'>Denis Villeneuve</p>
                <p className='role'>Director, Screenplay</p>
              </div>
              <div className='producer-info'>
                <p className='name-producer'>Frank Herbert</p>
                <p className='role'>Novel</p>
              </div>
              <div className='producer-info'>
                <p className='name-producer'>Jon Spaihts</p>
                <p className='role'>Screenplay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className='container title-billed-cast'>Top Billed Cast</h3>
      <div className='container more'>
        <div className='top-billed-cast'>
          {listCast.map(cast => {
            return <Cast data={cast} key={cast.id}/>
          })}
        </div>
        <div className='achievements'>
          <div className='content-achievement'>
            <p className='title-achievement'>Original Title</p>
            <p className='result-achievement'>{listDetail.original_title}</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Status</p>
            <p className='result-achievement'>{listDetail.status}</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Original Language</p>
            <p className='result-achievement'>{listDetail.original_language}</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Budget</p>
            <p className='result-achievement'>${listDetail.budget}</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Revenue</p>
            <p className='result-achievement'>${listDetail.revenue}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

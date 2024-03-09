import React from 'react'
import '../css/Detail.css'
import { FaBookmark } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { Cast } from '../components/Cast';

export const Detail = (data) => {
  console.log(data)
  return (
    <div className='detail'>
      <div className="container-fluid info-container">
        <div className='container info'>
          <img src='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8QdnKQyZDlN6rBSrfU1V5PctfUu.jpg' alt='Movie img' className='movie-img' />
          <div className='desc'>
            <p className='name-info'>Hành Tinh Cát: Phần Hai (2024)</p>
            <div className='function'>
              <button><FaBookmark /></button>
              <button><FaList /></button>
            </div>
            <div className='overview'>
              <h3>Overview</h3>
              <p className='content-overview'>Hành Tinh Cát – Phần 2 sẽ tiếp tục khám phá hành trình đậm chất thần thoại của Paul Atreides khi anh đồng hành cùng Chani và những người Fremen trên chặng đường trả thù những kẻ đã hủy hoại gia đình mình. Đối mặt với những lựa chọn giữa tình yêu của cuộc đời mình và số phận của vũ trụ, Paul phải ngăn chặn viễn cảnh tương lai tồi tệ chỉ mình anh nhìn thấy.</p>
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
          <Cast />
          <Cast />
          <Cast />
          <Cast />
          <Cast />
          <Cast />
          <Cast />
        </div>
        <div className='achievements'>
          <div className='content-achievement'>
            <p className='title-achievement'>Original Title</p>
            <p className='result-achievement'>Dune: Part Two</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Status</p>
            <p className='result-achievement'>Released</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Original Language</p>
            <p className='result-achievement'>Tiếng Anh</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Budget</p>
            <p className='result-achievement'>$190,000,000.00</p>
          </div>
          <div className='content-achievement'>
            <p className='title-achievement'>Revenue</p>
            <p className='result-achievement'>$178,000,000.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

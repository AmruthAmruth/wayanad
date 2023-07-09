import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios from '../../axios'
import { apiKey,imageUrl } from '../../Constance'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
   axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
    
   let arr = [Math.floor(Math.random()*20)]


    setMovie(response.data.results[arr])
   })
  }, [])
  
  
  return (
    <div style={{backgroundImage : `url(${ movie ? imageUrl+movie.backdrop_path : ''})`}}
      className='banner'>
        <div className="content">
            <h1 className="title">{movie ?  movie.title : ''}</h1>
            <div className="bannerButtons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className="discription">
           {movie ?  movie.overview : ''}
            </h1>
        </div>
            <div className="fade">
            </div>
    </div>
  )
}

export default Banner

import React from 'react'
import { useEffect } from 'react'
import "./Rowpost.css"
import axios from '../../axios'
import { apiKey, imageUrl } from '../../Constance'
import { useState } from 'react'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies, setMovies] = useState()
  const [urlid, setUrlid] = useState('')
  useEffect(() => {
      axios.get(props.url).then((Response)=>{
              console.log(Response.data);
             setMovies(Response.data.results)
      })
  }, [])
  
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
const handilMovie =(id)=>{
console.log(id);
axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((Response)=>{
   console.log(Response.data);
   if (Response.data.results.length!==0) {
          setUrlid(Response.data.results[0]);
   }else{
    console.log("Array Empty...!");
   }
})
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies ? movies.map((obj)=>{
              return(
        <img onClick={()=>handilMovie(obj.id)} className={props.isSmall ?'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                )
        }) : ''}
 
      </div>
      { urlid && <Youtube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default Rowpost

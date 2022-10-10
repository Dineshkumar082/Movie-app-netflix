import axios from "../../helpers/axios"
import React from 'react'
import { useState,useEffect } from "react"
import "./Row.css"
const Row = ({title,fetchUrl,isLarge=false}) => {
  const base_url="https://image.tmdb.org/t/p/original";
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
  },[fetchUrl]);
  return (
    <div className='row'>
        <h2 className="row__title">{title}</h2>
        <div className="row__posters">
            {
                movies.map((movie)=>
                ((isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && (
                    <img key={movie.id} className={`row__poster ${isLarge && "row__posterLarge"}`}
                    src={`${base_url}${isLarge ? movie.poster_path : movie.poster_path}`} alt=""/>
                ))
            }
        </div>
    </div>
  )
}

export default Row
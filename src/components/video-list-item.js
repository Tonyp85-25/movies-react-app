import React,{useState} from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const VideoListItem =({movie}) => {
    return <li>
            <img width="100px" height="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`}></img>
            <h3>{movie.title}</h3> 
        </li>
}

export default VideoListItem
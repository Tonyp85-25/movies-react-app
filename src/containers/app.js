import React, {useLayoutEffect, useState,useEffect} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'
import {API_KEY, API_END_POINT,POPULAR_MOVIES} from '../settings'
import VideoDetail from '../components/video-detail'

const App  = ()=>{
  const [movies, setmovies] = useState([])
  const [popular,setpopular] = useState({})
  useEffect(() => {
    let ignore =false
    async function getMovies (){
        let response = await axios.get(`${API_END_POINT}${POPULAR_MOVIES}&api_key=${API_KEY}`)//.then(function(response){          
        if (!ignore) {
          setmovies(response.data.results.slice(1,6))
          setpopular(response.data.results[0])
      }
    }
    async function getVideo(){
      let response = await axios.get(`${API_END_POINT}movie/${popular.id}?api_key=${API_KEY}&append_to_response=videos&include_adult=false`)
    }
    getMovies()     
    return () => { //ajax call is done once
      ignore =true
    };
  },[])
 
 
  
  //useEffect(getMovies)
  //useLayoutEffect(getMovies)
    return (<div>
        <SearchBar/>
        <VideoList moviesList= {movies} />
        <VideoDetail title={popular.title} description={popular.overview} />
        </div>)
  }

export default App
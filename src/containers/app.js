import React, {useLayoutEffect, useState,useEffect} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import Video from '../components/video'
import axios from 'axios'
import {API_KEY, API_END_POINT,POPULAR_MOVIES} from '../settings'
import VideoDetail from '../components/video-detail'

const App  = ()=>{
  const [movies, setmovies] = useState([])
  const [popular,setpopular] = useState({})
  let youtubeKey =''
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
      let request= `${API_END_POINT}movie/${popular.id}?append_to_response=videos&include_adult=false&api_key=${API_KEY}`;
      console.log(request);
      let response = await axios.get(request)
      youtubeKey = response.data.videos.results[0].key; 
                  
    }
    
    getMovies()  
    
    return () => { //ajax call is done once
      ignore =true
     getVideo()
    };
  },[])
  
 
 
 
  
  //useEffect(getMovies)
  //useLayoutEffect(getMovies)
    return (<div>
        <SearchBar/>
        <div className="row">
          <div className="col-md-8">
            <Video videoId={youtubeKey}/>
            <VideoDetail title={popular.title} description={popular.overview} />
          </div>
          <div className="col-md-4">
            <VideoList moviesList= {movies} />
          </div>
        </div>
        
        
        
        </div>)
  }

export default App
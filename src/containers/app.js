import React, {useLayoutEffect, useState,useEffect} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import Video from '../components/video'
import axios from 'axios'
import {API_KEY, API_END_POINT,POPULAR_MOVIES, SEARCH_URL} from '../settings'
import VideoDetail from '../components/video-detail'


const App  = ()=>{
  const [movies, setmovies] = useState([])
  const [popular,setpopular] = useState({})
  const [youtubeKey, setYoutubekey] = useState('')
  
  async function getVideo(movie){
    let request= `${API_END_POINT}movie/${movie.id}?append_to_response=videos&include_adult=false&api_key=${API_KEY}`;
    let response = await axios.get(request)
    return response.data.videos.results[0].key;              
  }
  useEffect(() => {
    let ignore =false

    async function getMovies (){
        let response = await axios.get(`${API_END_POINT}${POPULAR_MOVIES}&api_key=${API_KEY}`)//.then(function(response){          
        if (!ignore) {
          setmovies(response.data.results.slice(1,6))
          setpopular(response.data.results[0]) 
          const key =  await getVideo(response.data.results[0])
          setYoutubekey(key)

      }
    }
    
    
    getMovies()  
    
    return () => { //ajax call is done once
      ignore =true
   
    };
  },[])

   async function onClickSearch(searchText){
      if(searchText){
        const request = `${API_END_POINT}${SEARCH_URL}&api_key=${API_KEY}&query=${searchText}`
        let response = await axios.get(request)
        if (response.data && response.data.results[0]){
          if(response.data.results[0].title !== popular.title) {
            onClickListItem(response.data.results[0])
          }
           
        }
     
      }
    
      

    }

    async function onClickListItem(movie){
      const key = await getVideo(movie)
        setpopular(movie)
        setYoutubekey(key)
    } 
 
 
 
  
  
    return (<div>
    <div className="search_bar">
        <SearchBar callback={onClickSearch}/>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Video videoId={youtubeKey}/>
            <VideoDetail title={popular.title} description={popular.overview} />
          </div>
          <div className="col-md-4">
            <VideoList moviesList= {movies} callback={onClickListItem}/>
          </div>
        </div>
        </div> 
        )
        
  }

export default App
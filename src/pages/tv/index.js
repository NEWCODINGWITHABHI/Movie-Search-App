import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { API_KEY } from '../../constraint';
import SingleCardContent from '../../components/SingleCard';
import './style.css';
import useGenre from '../../components/hooks/useGenre';

import PaginationComponent from '../../components/pagination';
import Genres from '../../components/genres';
function TVPage() {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1)
  const [paginationno, setPaginationno] = useState(0);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const APIKEY=API_KEY;

  const genreforURL = useGenre(selectedGenres);
  const GetDataTrending = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${pageno}&with_genres=&language=en-US&with_genres=${genreforURL}`)
   
    setContent(data.results);
    console.log(data,content,'tvseries');
    setPaginationno(data.total_pages);
}

useEffect(()=>{
    console.log('Trending Component did mount');
    GetDataTrending();
    //eslint-disable-next-line
}, [])


const handleClick = (event,value)=>{
  setPageno(value);
  window.scrollTo(0,0);
}
useEffect(()=>{
  GetDataTrending();
  //eslint-disable-next-line
}, [pageno, genreforURL])

useEffect(()=>{
  console.log('Trending Component didupdate mount');
  GetDataTrending();
  //eslint-disable-next-line
}, [pageno])

  return (
    <div className='home-container'>
       <Genres 
       genres={genres}
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setGenres={setGenres}
        setPageno={setPageno}
       />
       <div className='home-heading'>
        <h1 style={{margin:'4rem'}}>Top TVSeries</h1>
       </div>
       <div className='card-main-container'>
       {
        content && content.length>0 ?content.map((item)=>{
          console.log(item,"lll");
       return <SingleCardContent key={item.id} data={item} type='tv'/>
        }):"Loading"
       }
       </div>
       
       {
        paginationno && paginationno>0?<PaginationComponent
         paginationno={paginationno}
         handleClick={handleClick}
        />:""
       }
      
    </div>
  )
}

export default TVPage;
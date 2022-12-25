import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { API_KEY } from '../../constraint';
import SingleCardContent from '../../components/SingleCard';
import './style.css';


import PaginationComponent from '../../components/pagination';
function HomePage() {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1)
  const [paginationno, setPaginationno] = useState(10)
  const APIKEY=API_KEY;


  const GetDataTrending = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}&page=${pageno}`)
   
    setContent(data.results);
    
    setPaginationno(data.total_pages);
}

useEffect(()=>{
   
    GetDataTrending();
    //eslint-disable-next-line
}, [])


const handleClick = (event,value)=>{
  setPageno(value);
  console.log(pageno,"pageNo")
  
  window.scrollTo(0,0);
}

useEffect(()=>{

  GetDataTrending();
  //eslint-disable-next-line
}, [pageno]);

  return (
    <div className='home-container'>
       <div className='home-heading'>
        <h1>Top Trending Movies and TVSeries</h1>
       </div>
       <div className='card-main-container'>
       {
        content && content.length>0 ?content.map((item)=>{
        
       return <SingleCardContent key={item.id} data={item} />
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

export default HomePage

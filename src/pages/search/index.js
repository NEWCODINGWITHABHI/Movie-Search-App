import { Tab, Tabs } from '@mui/material';
import React, { useState,useEffect } from 'react'
import {API_KEY} from '../../constraint';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../components/hooks/context/context';
import PaginationComponent from '../../components/pagination';
import SingleCardContent from '../../components/SingleCard';
function SearchPage() {
  const [type, setType]=useState(0);
  const [pageNo,setPageNo]=useState(1);
  // const [content,setContent]=useState([]);
  const [paginationNo,setPaginationNo]=useState();
  const {searchText,setSearchText,content,setContent}=useContext(Context);
  const APIKEY=API_KEY;
  console.log(APIKEY,searchText);
  const getSearchData = async ()=>{
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${APIKEY}&${pageNo}language=en-US&query=${searchText}&page=${pageNo}&include_adult=false`
      );
      setContent(data.results);
      setPaginationNo(data.total_pages);
      console.log(data,"data",content);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
}

useEffect(()=>{
    console.log('Trending Component did mount',content);
    window.scroll(0,0)
    getSearchData();
    //eslint-disable-next-line
}, [type,pageNo,searchText])

const handleClick = (event,value)=>{
  setPageNo(value);
  window.scrollTo(0,0);
}

  return (
    <>
    <div style={{backgroundColor:"black",minHeight:"100vh"}}>
    <div style={{margin:""}}>
      <Tabs
      style={{padding:"6rem"}}
      value={type}
      indicatorColor="primary"
      textColor='primary'
      onChange={(event,newValue)=>{
        setType(newValue);
        // setPage(1);
      }}
      >
        <Tab style={{width:"50%",fontSize:"3rem",color:"#1976d2",fontWeight:"550"}}label="Movies"/>
        <Tab style={{width:"50%",fontSize:"3rem",color:"#1976d2",fontWeight:"550"}}label="TvSeries"/>
      </Tabs>
    </div>

     <div className='card-main-container' style={{backgroundColor:"black"}}>
       {
        content && content.length>0 ?content.map((item)=>{
          console.log(item,"lll");
       return <SingleCardContent key={item.id} data={item} type={type?"tv":"movie"}/>
        }):"Loading"
       }
       </div>
      
       {
        paginationNo && paginationNo>0?<PaginationComponent
         paginationno={paginationNo}
         handleClick={handleClick}
        />:""
       }
     </div> 
</>
  )
}

export default SearchPage

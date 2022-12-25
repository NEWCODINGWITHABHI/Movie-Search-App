import React from 'react'
import { API_KEY } from '../../constraint';
import axios from 'axios';
import { useEffect } from 'react';
import  Chip  from '@mui/material/Chip';
function Genres({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPageno
}) {
    console.log(typeof genres,"aaaaaaaaaaaa")
    const APIKEY=API_KEY;
    const GetDataList = async ()=>{
        const {data:{genres}} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${APIKEY}&language=en-US`);
        //console.log('genres', genres);
        setGenres(genres)
        console.log(genres,genres[0].name,"tvvv");
    }
    useEffect(()=>{
        
        GetDataList();
        return ()=>{
            setGenres({});
        }
        //eslint-disable-next-line
    }, [])

    const handleAdd = (genre)=>{
        setSelectedGenres([...selectedGenres, genre])
        //console.log('oldSelectedGenres', selectedGenres)
        setGenres(genres.filter((g)=>{ return g.id !== genre.id}));
        return setPageno(1)
    }
    const handleRemove = (genre)=>{
        setSelectedGenres(
            selectedGenres.filter((g)=>{ 
                return g.id !== genre.id
            })
        )
        //console.log('oldSelectedGenres', selectedGenres)
        setGenres([...genres,genre]);
        return setPageno(1)
    }

  return (
    
   
<div>
{
     selectedGenres &&  selectedGenres.map((genre)=>{
          console.log(genre.name,"name");
          return <Chip label={genre.name}
          style={{margin:'1rem 1rem',backgroundColor:"white",fontSize:"1.5rem",padding:"0.5rem"}}
          
           key={genre.id}
           clickable
           onClick={()=>handleAdd(genre)}
           onDelete={()=>handleRemove(genre)}
           />
        })
      }
      {
       genres && genres.length>0 && genres.map((genre)=>{
          return <Chip label={genre.name}
           style={{margin:'1rem 1rem',backgroundColor:"white",fontSize:"1.5rem",padding:"0.5rem"}}
           
           key={genre.id}
           clickable
           onClick={()=>handleAdd(genre)}

           />
        })
      }
    </div>
  )
}

export default Genres;

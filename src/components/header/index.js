import React from 'react'
import {Link} from 'react-router-dom';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import { useContext } from 'react';
import { Context } from '../hooks/context/context';

function Header() {
  const {searchText,setSearchText,content,setContent}=useContext(Context);
  function handleInput(e){
    setSearchText(e.target.value);
    console.log(searchText,"searchText")
  }

  const findData=()=>{
    console.log(content,"findData");
    const data=content.filter(element => {
      console.log(element,"element");
      return element.title==(searchText)
    });
    setContent(...data);
    console.log(content,"filter");
  }
  return (
    <header className='header'>
        <nav>
          <div className='left-nav'>
               <div className='logo'>
                <MovieFilterIcon className='logo-icon'/>
                <h1>MV<span style={{color:"white"}}>&</span>TVPLAYER</h1>
               </div>
               <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/tvseries'>TV Shows</Link></li>
                <li><Link to='/movies'>Movies</Link></li>
               </ul>
          </div>
          <div className='right-nav'>
               <Link to='/search'>
                <input
                className='search'
                placeholder='Search for Movies, TV shows etc...' 
                // value={searchText}
                  onChange={(e)=>handleInput(e)}
                />
                <button onClick={()=>findData()}>
               <SearchIcon className='icon'/>
               </button>
               </Link>

          </div>
        </nav>
    </header>
  )
}

export default Header

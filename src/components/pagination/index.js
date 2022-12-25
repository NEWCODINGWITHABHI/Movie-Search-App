

import * as React from 'react';

import  Pagination  from "@mui/material/Pagination";
import './style.css';


function PaginationComponent({paginationno,handleClick}) {

  // function handleClick(event,value){
  //   setPageno(value);
  // }
  return (
    <div className='pagination-container'>
      <Pagination className='page'
       sx={{
          margin:"3rem",
          color: "primary",
          "& .Mui-selected , .Mui-selected:hover": {
            backgroundColor: "primary",
            color: "red",
            borderColor: "blue !important",
            
    
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "grey",
          },
          "& .MuiPaginationItem-text": {
            color: "white",
            border: "1px solid grey",
          },
        }}
       count={paginationno}  onChange={(event,value)=>handleClick(event,value)} />
      
    </div>
  )
}

export default PaginationComponent;

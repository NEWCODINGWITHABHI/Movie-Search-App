import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { img_300,img_not_available } from '../../config';
import { API_KEY } from '../../constraint';
import MainDetails from '../../components/detailsComponent/mainDetails';
import CostarDetails from '../../components/detailsComponent/costarDetails';
function DetailsPage() {

  const params = useParams();
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [credits, setCredits] = useState();
  const titleName =  content && content.name && content.name !== '' ? content.name : content && content.title && content.title !== '' ?  content.title : '';
  const id = params.movieid || '';
  const _media_type = params && params.mediatype &&  params.mediatype !== '' ? params.mediatype.toLowerCase() : '';
  const APIKEY=API_KEY;
  console.log(params);

  const fetchData = async () =>{
    try{
      const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}?api_key=${APIKEY}&language=en-US`);
      setContent(data);
      console.log('fetchData details',  data);
    }catch(error){
      console.error(error)
    }
}
const fetchVideo = async () =>{
    try{
      const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`);
      setVideo(data.results[0]?.key);
      console.log('fetchVideo',  data);
    }catch(error){
      console.error(error)
    }
}

const creditsFetch = async ()=>{
    try{
      const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`);
      setCredits(data.cast);
      console.log('sdata',  data);
    }catch(error){
      console.error(error)
    }
}

useEffect(()=>{
    fetchData();
    fetchVideo();
    creditsFetch();
    //eslint-disable-next-line
}, [])
  return (
    <div className='detais-container'
    style={{backgroundColor:"black",paddingBottom:"4rem"}}>
       {
           titleName && titleName !==  '' ? <MainDetails content={content} video={video}
            _media_type={_media_type }
           /> : 'Loading...'
       }
       {
        credits && credits.length > 0 ? <CostarDetails data={credits}/>: 'Lading data...'
       }
    </div>
  )
}

export default DetailsPage

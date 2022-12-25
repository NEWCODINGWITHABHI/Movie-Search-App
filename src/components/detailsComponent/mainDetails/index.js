import React from 'react'
import './style.css';
import { img_300 , img_not_available} from '../../../config';
function MainDetails({content,video,_media_type }) {

    const titleName =  content && content.name && content.name !== '' ? content.name : content && content.title && content.title !== '' ?  content.title : '';
    const ImageURL = content.poster_path ? img_300 + content.poster_path : img_not_available;
        const tagline = content.tagline || '';
        const vote_average = parseInt(content.vote_average);
        const original_language = content.original_language || '';
        const adult = !content.adult ? '10+' : '18+';
        const origin_country = content.origin_country && content.origin_country[0] ? content.origin_country[0] : content.production_countries && content.production_countries[0] && content.production_countries[0].name ? content.production_countries[0].name : '';
        const overview = content.overview;
        const first_air_date = content.first_air_date || content.release_date;
        const  budget = content.budget || '';
        const genres = content.genres && content.genres.length > 0 ? content.genres.map((item)=> <span  key={item.id}>{item.name}</span>) : '' ;
     
  return (
    <div className='main-details-container'>
      <h2 className=''>{titleName}</h2>
      <div className='content-wrapper'>

        <div className='content-card'>
            <div className='card-img'>
                <img src={ImageURL} alt="" />
            </div>
            <div className='card-content'>
            <ul>
                <li>
                 <span className='card-rate'>{vote_average}</span>   
                 <span className='lan'>{original_language}</span>
                 <span className='adult'>{adult}</span>
                </li>
                <li>
                    <span>Genre :</span>
                    <span className='card-link'>{genres}</span>
                </li>
                <li>
                    <span>Type :</span>
                    <span className='card-link'>{_media_type}</span>
                </li>
                <li>
                <span>Release year:</span> 
                <span className='card-link'>{first_air_date}</span>
                </li>
                {/* <li>
                {
                budget && budget !== '' ? <li><span>Budget:- </span>
                 <span className='card-link'> {budget}</span></li> : ''
                                }
                </li> */}
                <li>
                <span>Country:</span> <span className='card-link'>{origin_country}</span>
                </li>
                <li>
                <p className='description'>{overview}</p>  
                </li>
             </ul>
          </div>
      
        </div>


        <div className='you-tube-frameSec'>
         {/* <a rel="noreferrer" target="_blank" href={`https://www.youtube.com/watch?v=${video}`}>
         <figure className="youtubeImage">
        <span className='imageSec'>
        <imgsrc={videoBgPoster} alt="" title="" />
        </span>
         <span className='iconYoutube'></span>
        </figure>
         </a> */}
          <iframe width="100%" height="454" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      </div>
    </div>
  )
}

export default MainDetails

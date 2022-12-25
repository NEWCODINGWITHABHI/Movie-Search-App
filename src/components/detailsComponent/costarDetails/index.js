import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './style.css';
import {img_300, no_picture} from '../../../config';
import './style.css';
const handleDragStart = (e) => e.preventDefault();

function CostarDetails({data}) {
    //console.log('cast',data);
    
   
   const responsive = {
    0: {
        items: 1,
    },
    320: {
        items: 2,
    },
    640: {
        items: 3,
    },
    900: {
        items: 4,
    },
    1024: {
        items: 5
    },
    1280: {
        items: 6
    }
  }
  const items = data.map((item)=>{
    return(
        <div className="carouselItem" style={{borderRadius:"2rem"}}>
            <img style={{borderRadius:"2rem"}} onDragStart={handleDragStart}  src={item.profile_path ? `${img_300}/${item.profile_path}`:no_picture} 
            alt={item.name} title={item.name} />
        
        <div style={{color:"white",fontSize:"2rem",textAlign:"center"}}className='carouselItemText'>
            <div >Name :- {item.name}</div>
            <div>Department :-  {item.known_for_department}</div>
        </div>
    </div>
   ) 
})
    return (
      <div className='myCarWrap'>
        <h2 style={{color:"white",fontSize:"4rem",padding:"3rem",borderTop:"2px solid red"}}>Co-Star Informations</h2>
        <AliceCarousel 
        responsive={responsive}
        autoPlay={true}
        autoPlayInterval={5000}
        infinite={true}
        disableButtonsControls
        disableDotsControls
        mouseTracking 
        items={items} />
      </div>
    );
  }
  
  export default CostarDetails;

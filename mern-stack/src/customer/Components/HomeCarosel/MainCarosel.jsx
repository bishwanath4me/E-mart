import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCaroselData';




const MainCarosel = () => {
    const items = MainCarouselData.map((item)=>(
        <img className='cursor-pointer' role='presentation' src={item.image} alt="" />
    ))
  return (  <AliceCarousel
     //   mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
       // controlsStrategy="alternate"
    />);
};


export default MainCarosel
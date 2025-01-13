import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';




const HomeSectionCarosel = ({data, sectionName}) => {
  



    


    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1.5
      }
    };

   
 const items = data.slice(0,10).map((item) => <HomeSectionCard key={item.id} product={item} />)

  return (
    <div className="  px-4 lg:px-8 ">
   
      <h2 className='text-2xl font-bold text-gray-800 py-5'>{sectionName}</h2>
      <div className="relative rounded-md p-5  bg-[#e9d5ff]">

      

        <Carousel key={items.id} responsive={responsive}>
        {items}
        </Carousel>




    </div>
  </div>
   
  )
}

export default HomeSectionCarosel
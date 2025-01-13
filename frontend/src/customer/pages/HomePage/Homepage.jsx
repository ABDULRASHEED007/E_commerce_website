import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta';

const Homepage = () => {
  return (
    <div>
        <MainCarosel />

    <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
    {/* <div className=''> */}
           <HomeSectionCarosel  data={mens_kurta} sectionName="Men's Wear"/>
           <HomeSectionCarosel  data={mens_kurta} sectionName="Men's Shoes "/>
           <HomeSectionCarosel  data={mens_kurta} sectionName="Men's Kurta"/>
           <HomeSectionCarosel  data={mens_kurta} sectionName="Women's Srees"/>
           <HomeSectionCarosel  data={mens_kurta} sectionName="Women's Suit"/>

        </div>
    </div>
  )
}

export default Homepage
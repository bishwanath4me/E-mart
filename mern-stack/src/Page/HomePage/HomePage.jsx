import React from 'react'
import mens_kurta from '../../Data/mens_kurta'
import HomeSectionCarosel from '../../customer/Components/HomeSectionCarosel/HomeSectionCarosel'
import MainCarosel from '../../customer/Components/HomeCarosel/MainCarosel';
const HomePage = () => {
  return (
    <div><MainCarosel/>
    
    <div className='space-y-10 py-20 flex flex-col justify-center px-10 lg:px-5'
    >

    <HomeSectionCarosel data={mens_kurta} sectionName={"Men's kurta"} />
    <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"} />
    <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"} />
    <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Saree"} />
    <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"} />
    <HomeSectionCarosel data={mens_kurta} sectionName={"Women's kurta"} />
    
    </div>
    </div>
    
  )
}

export default HomePage
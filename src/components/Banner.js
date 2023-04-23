import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'

import bg1 from '../components/images/bg1.png'
import bg2 from '../components/images/bg2.png'
import bg3 from '../components/images/bg3.png'

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100
         to-transparent bottom-0'/>
        <Carousel 
            autoPlay 
            infiniteLoop 
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000}
        >
            <div>
                <img src={bg1} alt="amazon prime" loading='lazy'/>
            </div>
            <div>
                <img src={bg2} alt="amazon music" loading='lazy'/>                                
            </div>
            <div>
                <img src={bg3} alt="amazon kindle" loading='lazy'/>
            </div>
        </Carousel>
        Banner
    </div>
  )
}

export default Banner
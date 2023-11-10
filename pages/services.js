import React from 'react'
import OurServices from '../components/Services/Services'
import Hero from '../components/Services/Hero'
import Block from '../components/Services/Block'
import HorizontalTimeline from '../components/Services/HorizontalTimeline'
import VerticalTimeline from '../components/Services/VerticalTimeline'
import Card from '../components/Cards'
import BuildingBlock from '../components/BuildingBlock'


const Services = () => {
  return (
    <div className='bg-[#0d0e11] '>

      <Hero/>
      <BuildingBlock/>
      <HorizontalTimeline/>
      <VerticalTimeline/>
      <Card/>
   {/* <Block/> */}
      {/* <OurServices/> */}
    </div>
  )
}

export default Services
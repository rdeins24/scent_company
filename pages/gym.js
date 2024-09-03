import React from 'react'
import Hero from '../components/Gym/Hero'
import InfoBlock from '../components/InfoBlock'
import Gallery from '../components/Main/Gallery'
import SensoryArchitecture from '../components/SensoryArchitecture'

const gym = () => {
  return (
    <div>
         <Hero/>
         <SensoryArchitecture/>
        <InfoBlock/>
        <Gallery />
    </div>
  )
}

export default gym
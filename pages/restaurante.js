import React from 'react'
import HeroService from '../components/Templates/HeroService'
import image from '../public/assets/restaurante/restaurant3.jpg'
import InfoBlock from '../components/InfoBlock'
import Gallery from '../components/Main/Gallery'

const restaurante = () => {
  return (
    <div>
        <HeroService
        
        backgroundColor="bg-yellow-200"
        imageSrc={image}
        title="Aroma Hotel Scent"
        description="Leverage our expertise in Guest Experience applied to olfactory sensory architecture 
        and let yourself be guided by experts in your sector."
        buttonText="Live the experience"
        />
            <InfoBlock/>
            <Gallery />
    </div>
  )
}

export default restaurante


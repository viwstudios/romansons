import React from 'react'
import AboutUs from '../../Components/About/AboutUs'
import AboutUsHero from '../../Components/About/AboutUsHero'
import Feature from '../../Components/About/Feature'
import Team from '../../Components/About/Team'

const Aboutsection = () => {
  return (
    <div>
        <AboutUsHero/>
        <AboutUs/>
        <Feature/>
        <Team/>
    </div>
  )
}

export default Aboutsection
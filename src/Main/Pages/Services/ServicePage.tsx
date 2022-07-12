import React from 'react'
import Facts from '../../Components/Services/Facts'
import OurServices from '../../Components/Services/OurServices'
import ServicesHero from '../../Components/Services/ServicesHero'

const ServicePage = () => {
    return (
        <div>
            <ServicesHero />
            <Facts />
            <OurServices/>
        </div>
    )
}

export default ServicePage
import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
    const data = useGlobalContext();
    
    return (
        <div>
            <h2>Hero.js</h2>
            
        </div>
    )
}

export default Hero


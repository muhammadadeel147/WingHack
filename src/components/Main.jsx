import React from 'react'
import Hero from './Hero';
import Community from './Community';

import Stats from './Stats';
import Service from './Service';
import DonationAndVictims from './DonationAndVictims';
const Main = () => {
  return (
    <div>
        <Hero/>
    <Community/>
    <Stats/>
    <Service/>
    <DonationAndVictims/>
    </div>
  )
}

export default Main
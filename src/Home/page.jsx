import React from 'react'
import NavBar from './navBar';
import Hero from './hero';
import FeatureCards from './FeatureCards';
import Footer from './Footer';
import Reviews from './Reviews';
const Page = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <FeatureCards/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Page;
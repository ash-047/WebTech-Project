import React from 'react'

import About from './Components/AboutLibrary'
import ImageSlider from './Components/ImageSlider'
import PopularBooks from './Components/PopularBooks'
import RecentAddedBooks from './Components/RecentAddedBooks'
import WelcomeBox from './Components/WelcomeBox'
import Stats from './Components/Stats'

function LandingPage() {
    return (
        <div id='landingpage'>
            <ImageSlider/>
            <WelcomeBox/>
            <Stats/>
            <RecentAddedBooks/>
            <PopularBooks/>
            <About/>
        </div>
    )
}

export default LandingPage

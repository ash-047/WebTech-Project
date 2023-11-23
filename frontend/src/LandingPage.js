import React from 'react'

import About from './Components/AboutLibrary'
import ImageSlider from './Components/ImageSlider'
import PopularBooks from './Components/PopularBooks'
import RecentAddedBooks from './Components/RecentAddedBooks'
import ReservedBooks from './Components/ReservedBooks'
import WelcomeBox from './Components/WelcomeBox'

function LandingPage() {
    return (
        <div id='landingpage'>
            <ImageSlider/>
            <WelcomeBox/>
            <About/>
            <RecentAddedBooks/>
            <PopularBooks/>
            <ReservedBooks/>
        </div>
    )
}

export default LandingPage

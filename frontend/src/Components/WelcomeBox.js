import React from 'react'
import './WelcomeBox.css'

function WelcomeBox() {
    return (
        <div className='welcome-box'>
            <p className='welcome-title'>WELCOME TO LIBRARY</p>
            <p className='welcome-message'>Grab a Book to read<br/>
            <span className='welcome-submessage'></span></p>
        </div>
    )
}

export default WelcomeBox

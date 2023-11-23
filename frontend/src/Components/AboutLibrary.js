import React from 'react'
import './AboutLibrary.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2332.jpg" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not 
                        only five centuries.<br/>
                        <br/>
                        To support the information needs of the institution through comprehensive collection development based on the needs of the users to encourage teaching and learning both in the real and virtual environment to meet the challenges in achieving excellence,
                         To achieve this mission the library commits to: Build diverse collections in variety of formats, Provide comfortable environment for studying, learning and research,
                          Provide innovative user friendly services which is future centric, Collaborate with the user community to strive for continuous improvement to meet their expectations.
                        <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

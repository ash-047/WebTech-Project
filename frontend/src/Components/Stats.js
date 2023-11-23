import React from 'react'
import './Stats.css'
import bookicon from './bookicon.jpg';
import newsicon from './news.jpg';
import journalsicon from './journals.jpg';

function Stats() {
    return (
        <div className='stats'>
            <div className='stats-block'>
                <img src = {bookicon} className='stats-icon'/>
                <p className='stats-title'>Total Books</p>
                <p className='stats-count'>42169</p>
            </div>
            <div className='stats-block'>
                <img src = {bookicon} className='stats-icon'/>
                <p className='stats-title'>Print Journals</p>
                <p className='stats-count'>420</p>
            </div>
            <div className='stats-block'>
                <img src = {newsicon} className='stats-icon'/>
                <p className='stats-title'>Newspapers</p>
                <p className='stats-count'>69</p>
            </div>
        </div>
    )
}

export default Stats
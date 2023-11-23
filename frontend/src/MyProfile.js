import React from 'react';
import './MyProfile.css'; 
import profilePic from './ProfilePicIcon.png'

const MyProfile = () => {
  return (
    <div className='ever'>
      <main>
        <div className="profile-info">
          <img className="profile-pic" src={profilePic} alt="Profile" />
          <h1 className="about-heading" align="center" style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>User Name</h1>
          <p className="about-content" style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-out' }}>Email: user@example.com</p>
          <p className="about-content" style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-out' }}>SRN: PES2UG22CSXXX</p>
          <hr width="50" color="#000000" className="hr_lines"/>
        </div>
      </main>
    </div>
  );
};

export default MyProfile;

// myprofile.js

import React from 'react';
import './MyProfile.css'; // Import the external CSS file

const MyProfile = () => {
  return (
    <div className='ever'>
      {/* <header>
        <div className="logo">
          <img src="logo.png" alt="Your Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Guidelines</a></li>
          </ul>
        </nav>
        <div className="actions">
          <button className="signup">Sign Up</button>
          <button className="signin">Sign In</button>
          <button><img src="profilepic.png" alt="Profile" /></button>
        </div>
      </header> */}

      <main>
        <div className="profile-info">
          <img className="profile-pic" src="profilepic.png" alt="Profile" />
          <h2>User Name</h2>
          <p>Email: user@example.com</p>
          <p>SRN: PES2UG22CSXXX</p>
        </div>
      </main>
    </div>
  );
};

export default MyProfile;

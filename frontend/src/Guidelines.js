import React from 'react';
import './Guidelines.css'

const GuidelinesPage = () => {
  return (
    <div>
      {/* <header style={{ backgroundColor: '#333333', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
        <div className="logo">
          <img src="logo.png" alt="Your Logo" style={{ maxHeight: '40px' }} />
        </div>
        <nav>
          <ul style={{ display: 'flex' }}>
            <li><a href="#">Home</a></li>
            <li><a href="AboutPage.html">About</a></li>
            <li><a href="GuidelinesPage.html">Guidelines</a></li>
          </ul>
        </nav>
        <div className="actions">
          <button className="signup" style={{ backgroundColor: '#ff5722', border: 'none', color: '#fff', padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>Sign Up</button>
          <button className="signin" style={{ backgroundColor: '#ff5722', border: 'none', color: '#fff', padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>Sign In</button>
          <button><img src="ProfilePicIcon.png" alt="Profile" width="40" height="40" /></button>
        </div>
      </header> */}
      <div className='content'>
      <section className="main-content">
        <h1 className="guidelines-heading" align="center" style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>Guidelines</h1>
        <p className="guidelines-content" style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-in-out' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt illo molestias adipisci perspiciatis qui quasi facere obcaecati voluptates, sunt in non aspernatur tenetur consequuntur nobis id doloribus ut fuga!</p>
        <hr width="50" color="#000000" className="hr_lines" style={{ animation: 'slideRight 0.5s ease-in' }} />
      </section>
      </div>
    </div>
  );
};

export default GuidelinesPage;

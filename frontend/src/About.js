import React from 'react';
import './About.css'


const AboutUs = () => {
  return (
    <div>
      <div className="main-content">
        <section className="content">
          <h1 className="about-heading" align="center" style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>About Us</h1>
          <p className="about-content" style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-out' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt illo molestias adipisci perspiciatis qui quasi facere obcaecati voluptates, sunt in non aspernatur tenetur consequuntur nobis id doloribus ut fuga!</p>
          <hr width="50" color="#000000" className="hr_lines"/>
          <h1 className="whatweoffer-heading" style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>What we offer</h1>
          <p className="whatweoffer-content" style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-out' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt illo molestias adipisci perspiciatis qui quasi facere obcaecati voluptates, sunt in non aspernatur tenetur consequuntur nobis id doloribus ut fuga!</p>
          <hr width="50" color="#000000" className="hr_lines"/>
          <h1 className="timings-heading" style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>Library Timings</h1>
          <p className="timings-content" style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-out' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt illo molestias adipisci perspiciatis qui quasi facere obcaecati voluptates, sunt in non aspernatur tenetur consequuntur nobis id doloribus ut fuga!</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

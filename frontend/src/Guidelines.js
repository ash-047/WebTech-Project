import React from 'react';
import './Guidelines.css'

const GuidelinesPage = () => {
  return (
    <div>
      <div className='main-content'>
        <section className="content">
          <h1 className="guidelines-heading" align="center" style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>Guidelines</h1>
          <p className="guidelines-content" style={{ textAlign: 'center', fontSize: '20px', color: '#000000', animation: 'slideIn 0.7s ease-in-out' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt illo molestias adipisci perspiciatis qui quasi facere obcaecati voluptates, sunt in non aspernatur tenetur consequuntur nobis id doloribus ut fuga!</p>
          <hr width="50" color="#000000" className="hr_lines" style={{ animation: 'slideRight 0.5s ease-in' }} />
        </section>
      </div>
    </div>
  );
};

export default GuidelinesPage;

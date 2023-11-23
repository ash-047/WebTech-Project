import React from 'react';
import './ReservedBooks.css';
import coverImage1 from './cover-image-1.jpg';
import coverImage2 from './cover-image-2.jpg';

const ReservedBooksPage = () => {
  return (
    <div className='ever'>
      <section className="main-content">
        <div className="reservedbooks-results">
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>Reserve Books</h2>
          <br />
          <hr width="50" color="#000000" className="hr_lines"/>
          <ul className="results-list" id="books-results">
            <li>
              <div className="result-item">
              <img src={coverImage2} alt="Book Cover" style={{ maxWidth: 'px', maxHeight: '180px', marginRight: '20px' }} />
                <button className="add-button">+</button>
                <div className="result-info">
                  <h3>Book Title 1</h3>
                  <p>Author: Author Name 1</p>
                  <p>Genre: Fantasy</p>
                </div>
              </div>
            </li>
            <li>
              <div className="result-item">
              <img src={coverImage1} alt="Book Cover" style={{ maxWidth: 'px', maxHeight: '180px', marginRight: '20px' }} />
                <button className="add-button">+</button>
                <div className="result-info">
                  <h3>Book Title 2</h3>
                  <p>Author: Author Name 2</p>
                  <p>Genre: Science Fiction</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ReservedBooksPage;

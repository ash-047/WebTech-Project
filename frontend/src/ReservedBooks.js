// Import React and any other necessary components
import React from 'react';
import './ReservedBooks.css'; // Replace with the correct path to your external CSS file
import coverImage1 from './cover-image-1.jpg';
import coverImage2 from './cover-image-2.jpg';

const ReservedBooksPage = () => {
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

      <section className="main-content">
        <div className="search-results">
          <h2 align="center">Reserve Books</h2>
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

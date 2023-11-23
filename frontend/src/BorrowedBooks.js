import React, { useState } from 'react';
import './BorrowedBooks.css'
import coverImage1 from './cover-image-1.jpg';
import coverImage2 from './cover-image-2.jpg';

const BorrowedBooksPage = () => {
  const [activeTab, setActiveTab] = useState('books');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='ever'>
      <section className="main-content" style={{ margin: '20px' }}>
        
        <div className="borrowedbooks-results" style={{ backgroundColor: 'rgba(245, 245, 245, 0.9)', padding: '20px', borderRadius: '5px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>Borrowed Books, Articles, and Pages</h2>
          <hr width="50" color="#000000" className="hr_lines"/>
          <br />
          <div className="tab-bar" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <div className={`tab ${activeTab === 'books' ? 'active' : ''}`} onClick={() => handleTabClick('books')} data-tab="books">Borrowed Books</div>
            <div className={`tab ${activeTab === 'articles' ? 'active' : ''}`} onClick={() => handleTabClick('articles')} data-tab="articles">Overdue Books</div>
          </div>
          <ul className="results-list" id="books-results" style={{ display: activeTab === 'books' ? 'block' : 'none', listStyle: 'none', padding: '0' }}>
            <li>
              <div className="result-item" style={{ margin: '10px 0', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <img src={coverImage2} alt="Book Cover" style={{ maxWidth: 'px', maxHeight: '180px', marginRight: '20px' }} />
                <div className="result-info" style={{ flex: '1' }}>
                  <h3>Book Title 1</h3>
                  <p>Author: Author Name 1</p>
                  <p>Genre: Fantasy</p>
                </div>
              </div>
            </li>
            <li>
              <div className="result-item" style={{ margin: '10px 0', display: 'flex', alignItems: 'center', position: 'relative' }}>
                <img src={coverImage1} alt="Book Cover" style={{ maxWidth: 'px', maxHeight: '180px', marginRight: '20px' }} />
                <div className="result-info" style={{ flex: '1' }}>
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

export default BorrowedBooksPage;

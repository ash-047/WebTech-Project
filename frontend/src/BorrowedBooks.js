import './BorrowedBooks.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import coverImage2 from './cover-image-2.jpg';

const BorrowedBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [activeTab, setActiveTab] = useState('books');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const getUserIdFromLocalStorage = () => {
    const user = localStorage.getItem('user'); // Assuming 'user' is the key you use to store user data
    if (user) {
      const userData = JSON.parse(user);
      return userData.userId;
    }
    return null;
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        var id = getUserIdFromLocalStorage();
        const response = await axios.get(`http://localhost:2000/books/reserved/${id}`);
        if (response.status === 200) {
          setBooks(response.data);
        } else {
          console.error('Failed to fetch books');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBooks();
  }, []);


  return (
    <div className='ever'>
      <section className="main-content" style={{ margin: '20px' }}>

        <div className="borrowedbooks-results" style={{ backgroundColor: 'rgba(245, 245, 245, 0.9)', padding: '20px', borderRadius: '5px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>Reserved Books, Articles, and Pages</h2>
          <br />
          <hr width="50" color="#000000" className="hr_lines" />
          <br />
          <ul className="results-list" id="books-results" style={{ display: activeTab === 'books' ? 'block' : 'none', listStyle: 'none', padding: '0' }}>
            {books.map((book) => (
              <li key={book._id}>
                <div className="result-item">
                  <img src={coverImage2} alt="Book Cover" style={{ maxWidth: 'px', maxHeight: '180px', marginRight: '20px' }} />
                  <div className="result-info">
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>USN: {book.USN}</p>
                    <p>Genre: {book.genre}</p>
                  </div>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </section>


    </div>
  );
};

export default BorrowedBooksPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import './ReservedBooks.css';
import coverImage2 from './cover-image-2.jpg';

const ReservedBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [reservedBooks, setReservedBooks] = useState([]);

  const getUserIdFromLocalStorage = () => {
    const user = localStorage.getItem('user'); // Assuming 'user' is the key you use to store user data
    if (user) {
      const userData = JSON.parse(user);
      console.log(userData)
      return userData.userId; // Adjust this based on the structure of your user data
    }
    return null;
  };

  const handleAddToReserved = async (bookId) => {
    try {
      const userId = getUserIdFromLocalStorage();

      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }

      const response = await axios.post('http://localhost:2000/books/reserved', {
        USN: bookId,
        by: userId,
      });

      if (response.status === 201) {
        const reservedBook = response.data;
        setReservedBooks((prevBooks) => [...prevBooks, reservedBook]);
        console.log('Book reserved successfully!');
      } else {
        console.error('Failed to reserve book');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:2000/books/view');
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
      <section className="main-content">
        <div className="reservedbooks-results">
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Arial, sans-serif', color: '#236b92', animation: 'slideIn 0.5s ease-in-out' }}>Reserve Books</h2>
          <br />
          <hr width="50" color="#000000" className="hr_lines" />
          <ul className="results-list" id="books-results">
            {books.map((book) => (
              <li key={book.id}>
                <div className="result-item">
                  <img src={coverImage2} alt="Book Cover" style={{ maxWidth: 'px', maxHeight: '180px', marginRight: '20px' }} />
                  <button onClick={() => handleAddToReserved(book.USN)} className="add-button">+</button>
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

export default ReservedBooksPage;

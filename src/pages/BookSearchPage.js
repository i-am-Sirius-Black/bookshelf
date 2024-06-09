import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

function BookSearchPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  // const fetchBooks = useCallback(
  //   debounce(async (query) => {
  //     if (query) {
  //       try {
  //         const response = await axios.get(
  //           `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
  //         );
  //         setBooks(response.data.docs);
  //       } catch (error) {
  //         console.error('Error fetching books:', error);
  //       }
  //     }
  //   }, 100),
  //   []
  // );

  useEffect(() => {
    if (query) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setBooks(response.data.docs);
        });
    }
  }, [query]);

  // useEffect(() => {
  //   fetchBooks(query);
  // }, [query, fetchBooks]);

  const addToBookshelf = useCallback((book) => {
    setBookshelf(prevBookshelf => {
      const updatedBookshelf = [...prevBookshelf];
      if (!updatedBookshelf.some((b) => b.key === book.key)) {
        updatedBookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
        return updatedBookshelf;
      }
      return prevBookshelf;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto p-5 flex flex-col items-center">
        <div className="text-center mb-5">
          <SearchBar query={query} setQuery={setQuery} />
          <a className='font-bold p-1 bg-green-400 text-white rounded' href="/bookshelf">BookShelf</a>
        </div>
        <BookList books={books} bookshelf={bookshelf} addToBookshelf={addToBookshelf} />
      </div>
    </div>
  );
}

export default BookSearchPage;

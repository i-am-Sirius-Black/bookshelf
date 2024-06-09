import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';

function PersonalBookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(bookshelf);
  }, []);

  return (
    <div>
      <h1 className='text-center font-bold text-xl p-2 mb-10'>My Bookshelf</h1>
      <BookList showAddButton={false} books={bookshelf} addToBookshelf={() => {}} />
    </div>
  );
}

export default PersonalBookshelfPage;

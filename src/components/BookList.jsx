import React from 'react';
import BookCard from './BookCard';

function BookList({ books, bookshelf = [], addToBookshelf }) {
  return (
   
      <div className="flex flex-col items-center md:flex-row flex-wrap justify-center gap-4 ">
      {books.map((book) => (
        <BookCard
          key={book.key}
          book={book}
          addToBookshelf={addToBookshelf}
          isAdded={bookshelf.some((b) => b.key === book.key)}
        />
      ))}
    </div>
 
  );
}

export default BookList;

import React from 'react';

function BookCard({ book, addToBookshelf, isAdded }) {
  const coverUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'placeholder_image_url';

  return (
    <div className="w-[220px] h-[400px] border border-black p-4 rounded flex flex-col items-center gap-4 shadow-lg">
      <div className="h-[200px] w-[185px]">
        <img className="bg-cover h-[200px] w-[185px] rounded" src={coverUrl} alt={`${book.title} cover`} />
      </div>
      <div className="py-1">
        <h3>
          <span className="font-bold">Book Title:</span> {book.title}
        </h3>
      </div>
      <p className='mt-auto'>Edition Count: {book.edition_count}</p>
      {!isAdded && (
        <button
          onClick={() => addToBookshelf(book)}
          className="mt-auto py-1 px-4 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Add to Bookshelf
        </button>
      )}
    </div>
  );
}

export default BookCard;

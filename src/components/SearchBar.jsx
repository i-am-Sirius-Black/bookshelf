import React from 'react';

function SearchBar({ query, setQuery }) {
  return (
    <div className='flex flex-col p-2 mb-10 items-center'>
      <label className='text-xl font-bold p-2'>Search by book name:</label>
      <input
      className='block w-full max-w-xl px-4 py-2 text-sm font-normal shadow-lg text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none leading-relaxed'
        type="text"
        placeholder='Search Books'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

import axios from 'axios';

const fetchBooks = (query) => {
  return axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
};

export default fetchBooks;

import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookSearchPage from './pages/BookSearchPage';
import PersonalBookshelfPage from './pages/PersonalBookshelfPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookSearchPage/>,
    },
    {
      path: "/bookshelf",
      element: <PersonalBookshelfPage/>,
    },
  ])

  return (
    <RouterProvider router={router} />
    
  );
}

export default App;

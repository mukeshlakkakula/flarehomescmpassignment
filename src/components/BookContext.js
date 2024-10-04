import React, { createContext, useState } from "react";

// Create a context for the personal library
export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);

  // Add a book to the personal library
  const addBookToLibrary = (book) => {
    const filter = myLibrary.filter((each) => each.id === book.id);

    if (filter.length === 0) {
      setMyLibrary([...myLibrary, book]);
    }
  };

  // Remove a book from the personal library
  const removeBookFromLibrary = (id) => {
    setMyLibrary(myLibrary.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ myLibrary, addBookToLibrary, removeBookFromLibrary }}
    >
      {children}
    </BookContext.Provider>
  );
};

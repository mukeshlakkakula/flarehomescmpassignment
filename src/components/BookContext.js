import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);

  const addBookToLibrary = (book) => {
    const filter = myLibrary.filter((each) => each.id === book.id);

    if (filter.length === 0) {
      setMyLibrary([...myLibrary, book]);
    }
  };

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

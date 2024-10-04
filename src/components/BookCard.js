import React from "react";
import "./styles.css";
const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src="https://i.pinimg.com/564x/e5/94/5c/e5945cc99bb9abb55fbcbb099e7d414a.jpg"
        alt="book"
        style={{ width: "60%", borderRadius: "10px" }}
      />
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
    </div>
  );
};

export default BookCard;

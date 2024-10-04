import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import booksData from "./books.json";
import "./styles.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = booksData.books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="HomeSection">
      <h1>Book Library</h1>
      <input
        type="search"
        placeholder="Search by title, author, or genre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id} className="Links">
              <BookCard book={book} />
            </Link>
          ))
        ) : (
          <div>
            {" "}
            <p>"No book like that"</p>
            <img
              src="https://i.pinimg.com/564x/f8/78/2c/f8782c1e0714f1d687d58e84226f0471.jpg"
              className="nosearchImg"
              alt="nosearcheditem"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

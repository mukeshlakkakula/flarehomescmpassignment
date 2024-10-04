import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import booksData from "./books.json";
import { BookContext } from "./BookContext";
import "./styles.css";

const BookDetails = () => {
  const { id } = useParams();
  const { addBookToLibrary, myLibrary, removeBookFromLibrary } =
    useContext(BookContext);
  const book = booksData.books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }
  const addedfilter = myLibrary.filter((each) => each.id === book.id);

  return (
    <div className="cardDetailsSection">
      <div>
        <img
          src="https://i.pinimg.com/564x/e5/94/5c/e5945cc99bb9abb55fbcbb099e7d414a.jpg"
          alt="myBook"
          style={{ width: "20%" }}
        />
      </div>
      <div>
        <h2>{book.title}</h2>

        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>Rating:</strong> {book.rating}
        </p>
        <p>
          <strong>Publication Year:</strong> {book.publication_year}
        </p>
        <p>{book.description}</p>
        {addedfilter.length < 1 ? (
          <button onClick={() => addBookToLibrary(book)}>
            Add to My Library
          </button>
        ) : (
          <button
            onClick={() => removeBookFromLibrary(book.id)}
            className="addedBtn"
          >
            Remove from My Library
          </button>
        )}
      </div>{" "}
    </div>
  );
};

export default BookDetails;

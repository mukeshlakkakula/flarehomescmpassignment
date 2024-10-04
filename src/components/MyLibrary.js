import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import "./styles.css";
import { Link } from "react-router-dom";

const MyLibrary = () => {
  const { myLibrary, removeBookFromLibrary } = useContext(BookContext);

  return (
    <div>
      <h2>My Library</h2>
      <div>
        {myLibrary.length === 0 ? (
          <div className="emptyLibContainer">
            <h1>Your library is empty</h1>
            <img
              src="https://i.pinimg.com/564x/e5/55/87/e55587d66eb7b637fc19ff959a6b04ab.jpg"
              alt="emptyLibraryImg"
              className="emptyLibImg"
            />
          </div>
        ) : (
          <ul>
            {myLibrary.map((book) => (
              <div className="myLibrarydelete">
                <Link to={`/book/${book.id}`} className="Links">
                  <li key={book.id} className="myLibrarySection">
                    <h4>{book.title}</h4> by {book.author}
                  </li>
                </Link>
                <button onClick={() => removeBookFromLibrary(book.id)}>
                  Remove
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyLibrary;

import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Books as BooksModel } from "./../../models";
import "./Books.css";

function BooksComponent() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10); // Set the number of items you want to display per page

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await DataStore.query(BooksModel);
      setBooks(bookData);
    };

    fetchBooks();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flexContainer">
        {currentBooks.map((book, index) => (
          <div className="flexItem" key={index}>
            <div className="bookCard">
              <img
                src={book.bookImage}
                alt={`${book.bookImage} Thumbnail`}
                className="books"
              />
              <div className="bookInfo">
                <h2 className="bookTitle">{book.bookName}</h2>
                <p className="bookDescription">{book.bookDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(books.length / booksPerPage) },
          (_, i) => i + 1
        ).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default BooksComponent;

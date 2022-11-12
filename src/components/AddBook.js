import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './Addbook.css';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: 'True Story',
  });

  const dispatch = useDispatch();
  const addTitle = (event) => setBook({
    ...book,
    title: event.target.value,
  });

  const addAuthor = (event) => setBook({
    ...book,
    author: event.target.value,
  });

  const clickEvent = () => {
    if (book.author && book.title) {
      book.id = uuidv4();
      dispatch(addBook(book));
      setBook({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div className="container-6">
      <h2 className="title-2">ADD NEW BOOK</h2>
      <form className="form display">
        <input
          type="text"
          placeholder="Add Title..."
          name="title"
          value={book.title}
          className="title"
          onChange={addTitle}
        />
        <input
          type="text"
          placeholder="Add Author..."
          name="author"
          value={book.author}
          className="author"
          onChange={addAuthor}
        />
        <button
          type="submit"
          className="submit"
          onClick={(e) => {
            e.preventDefault();
            clickEvent();
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;

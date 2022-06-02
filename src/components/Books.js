import React from 'react';
import Book from './Book';

/* eslint-disable react/prop-types */
function Books() {
  const books = [];
  return (
    <div>
      <ul>
        { books.length > 0 ? books.map((book) => (<Book key={book.id} book={book} />)) : '' }
      </ul>
      <button type="button">Remove</button>
    </div>
  );
}

export default Books;

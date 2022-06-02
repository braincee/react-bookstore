import React from 'react';

/* eslint-disable react/prop-types */
function Book(props) {
  const { book } = props;
  return (
    <div>
      <li>
        {`${book.title} : ${book.author}`}
      </li>
      <button type="button">Remove</button>
    </div>
  );
}

export default Book;

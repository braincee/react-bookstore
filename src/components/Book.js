import React from 'react';

/* eslint-disable react/prop-types */
function Book(props) {
  const { book } = props;
  return (
    <div>
      <li>
        {`${book.title} : ${book.author}`}
      </li>
    </div>
  );
}

export default Book;

import React from 'react';

/* eslint-disable react/prop-types */
function Book({ title, author }) {
  return (
    <div className="book">
      <ul>
        <li>{author}</li>
        <li>{title}</li>
      </ul>
      <button type="button" className="remove">Remove</button>
    </div>
  );
}

export default Book;

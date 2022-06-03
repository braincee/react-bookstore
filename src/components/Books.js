import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

function Books() {
  const books = [
    { id: 1, title: 'Harry Potter', author: 'JK. Rowlings' },
    { id: 2, title: 'Bad Boys', author: 'Will Smith' },
  ];
  return (
    <div>
      <ul className="books">
        { books.map((book) => (<Book key={book.id} title={book.title} author={book.author} />))}
      </ul>
      <div>
        <AddBook />
      </div>
    </div>
  );
}

export default Books;

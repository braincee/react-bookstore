import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

/* eslint-disable react/prop-types */
const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const clickEvent = () => {
    dispatch(removeBook(book.id));
  };

  const progress = `${Math.floor(Math.random() * 90) + 10}%`;
  const circleProgress = {
    backgroundImage: `conic-gradient(#379cf6 ${progress}, #e8e8e8 0)`,
  };

  return (
    <div className="container-3">
      <li className="container-4">
        <ul>
          <li className="category">{book.category}</li>
          <li className="title">{book.title}</li>
          <li className="author">{ book.author }</li>
          <>
            <button type="button">Comment</button>
            <button type="button" onClick={clickEvent}>Remove</button>
            <button type="button">Edit</button>
          </>
        </ul>
      </li>
      <div className="stats">
        <div className="circle" style={circleProgress}>
          <div className="circle-2" />
        </div>
        <div className="percentage">
          <h3 className="value">{ progress }</h3>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="container-5">
        <h3>CURRENT CHAPTER</h3>
        <h4>Chapter 2</h4>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;

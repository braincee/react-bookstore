import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <div className="navbar">
    <h1 className="book-title">BookStore CMS</h1>
    <nav>
      <ul className="navbar-link">
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
    <span className="user-icon"><BsFillPersonFill /></span>
  </div>
);

export default Navbar;

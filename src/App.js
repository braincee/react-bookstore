import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Books from './components/Books';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} exact="true" />
        <Route path="/categories" element={<Categories />} exact="true" />
      </Routes>
    </div>
  );
}

export default App;

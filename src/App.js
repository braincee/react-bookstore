import './App.css';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} exact="true" />
        <Route path="/categories" element={<Categories />} exact="true" />
      </Routes>
    </div>
  );
}

export default App;

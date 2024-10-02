import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeTab from './components/HomeTab';
import AboutTab from './components/AboutTab';
import CodingTab from './components/CodingTab';
import PhotographyTab from './components/PhotographyTab';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/coding">Coding</Link></li>
            <li><Link to = "/photography">Photography</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomeTab/>} />
          <Route path="/about" element={<AboutTab/>} />
          <Route path="/coding" element={<CodingTab/>} />
          <Route path="/photography" element={<PhotographyTab/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

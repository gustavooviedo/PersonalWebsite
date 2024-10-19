import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Photography from './pages/Photography';

function App() {
  return (
    //<Router>
      <div className="App">
        <Home />
      </div>
    //</Router>
  );
}

export default App;
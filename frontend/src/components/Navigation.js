import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/photography">Photography</Link></li>
        <li><Link to="/about">About/Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
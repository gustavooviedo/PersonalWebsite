import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomeTab';
import About from './AboutTab';
import Coding from './CodingTab';
import Photography from './PhotographyTab';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/coding" component={Coding} />
                <Route path='/photography' component={Photography} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
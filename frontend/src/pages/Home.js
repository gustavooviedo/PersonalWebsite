import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <h1>Gustavo Oviedo</h1>
            <p>Full Stack Developer / Photographer</p>
            <div className='quick-links'>
                <a href='/about'>About Me</a>
                <a href='/projects'>Coding Projects</a>
                <a href='/photography'>Photography</a>
            </div>
        </div>
    );
};

export default Home;
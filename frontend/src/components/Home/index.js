import { Link } from 'react-router-dom';
import NewLogo from '../../assets/images/NewLogo.PNG';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, {useState, useEffect} from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "ustavo".split("")
    const jobArray = "web developer.".split("")
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={NewLogo} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Frontend Developer / Photographer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;
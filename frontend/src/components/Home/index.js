import { Link } from 'react-router-dom';
import NewLogo from '../../assets/images/NewLogo.PNG';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm  
                <img src={NewLogo} alt="developer" />
                ustavo,
                <br />
                Web Developer.
                </h1>
                <h2>Frontend Developer / Photographer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;
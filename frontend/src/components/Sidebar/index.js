import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoG from '../../assets/images/LogoG.png'
import Name from '../../assets/images/Name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoG} alt="logo" />
            <img className="sub-logo" src={Name} alt="gustavo" />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeClassName="active" className="/photography-link" to="/photography">
                <FontAwesomeIcon icon={faCamera} color="#4d4d4e" />
            </NavLink>
            
            <NavLink exact="true" activeClassName="active" className="/about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeClassName="active" className="/contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar;
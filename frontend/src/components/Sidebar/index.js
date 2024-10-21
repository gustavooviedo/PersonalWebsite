import './index.scss';
import { Link } from 'react-router-dom';
import LogoG from '../../assets/images/LogoG.png'
import Name from '../../assets/images/Name.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoG} alt="logo" />
            <img src={Name} alt="gustavo" />
        </Link>
    </div>
)

export default Sidebar;
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <img className="logo" src="https://image.freepik.com/free-vector/rocket-space-moon-logo_26003-161.jpg" alt="Italian Trulli"></img>
            <ul className="nav-Links">
                <Link to="/" className='text-link'>
                <h2>Home</h2>
                </Link>
                <Link to="/itinerary" className='text-link'>
                <h2>Itinerary</h2>
                </Link>
                <Link to="/map" className='text-link'>
                <h2>Map</h2>
                </Link>
                <Link to="/about" className='text-link'>
                <h2>About</h2>
                </Link>
                
            </ul>
    </nav>
  );
}

export default Nav;
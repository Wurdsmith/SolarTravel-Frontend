import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <img className="logo" src="https://image.freepik.com/free-vector/rocket-space-moon-logo_26003-161.jpg" alt="Italian Trulli"></img>
            <ul className="nav-Links">
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/itinerary">
                <li>Itinerary</li>
                </Link>
                <Link to="/map">
                <li>Map</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
                
            </ul>
    </nav>
  );
}

export default Nav;
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <div className="logoContainer">
        <img className="logoImage" src="https://i.imgur.com/2fgyIPc.png" alt="Italian Trulli"></img>
          <h1 className="logo">SolarTravel™</h1>
        </div>
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
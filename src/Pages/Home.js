import '../App.css';
import DestinationsContainer from '../Destinations/DestinationsContainer';

function Home() {
  return (
    <div className="home">
        <h1>Welcome to Solar Travel</h1>
        <h2>The Leading Intra-Solar System Travel Agency since 2175</h2>
        <DestinationsContainer />
    </div>
  );
}

export default Home;
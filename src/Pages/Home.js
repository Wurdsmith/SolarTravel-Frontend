import '../App.css';
import DestinationsContainer from '../Destinations/DestinationsContainer';

function Home() {
  return (
    <div className="home">
        <div className="homeContent">
          <h1 className="homeHeader">Welcome to Solar Travel</h1>
          <h2 className="homeSubhead">The Leading Intra-Solar System Travel Agency since 2175</h2>
        </div>
          <DestinationsContainer />
    </div>
  );
}

export default Home;
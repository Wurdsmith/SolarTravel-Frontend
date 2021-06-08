import '../App.css';
import AddedDestinationsContainer from '../Destinations/AddedDestinationsContainer'



export default function Itinerary() {
  
  return (
    <div className="itinerary">
      <h1>Your Current List of Solar Destinations:</h1>
        <AddedDestinationsContainer/>
    </div>
  );
}
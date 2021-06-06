import '../App.css';
import AddedDestinationsContainer from '../Destinations/AddedDestinationsContainer'



export default function Itinerary() {
  
  return (
    <div className="itinerary">
      <h2>Your Current List of Solar Destinations:</h2>
        <AddedDestinationsContainer/>
    </div>
  );
}
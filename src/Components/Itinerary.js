import '../App.css';
import {useSelector} from 'react-redux'
import deleteAddedDestination from '../actions/DeleteDestination'


const handleDelete = (destination) => {
  let destinationId = destination.id
  this.props.deleteAddedDestination(destinationId)
  this.props.history.push("/itinerary")
}

export default function Itinerary() {
  const addedDests = useSelector(state => state.addedDestinations)

  return (
    <div className="itinerary">
      <h2>Your Current List of Solar Destinations:</h2>
      <div className="addedDestContainer">
              {addedDests.map((destination, i) => 
                <div className="addedDest" key={destination.id}>
                    <h2>{destination.name}</h2>
                    <img className="addedDestImage" src={destination.image_url} alt={destination.name}></img>
                    <button className="deleteButton" onClick={() => handleDelete(destination)}>Remove location from itinerary</button>
                    </div>
                 )}
          </div>
    </div>
  );
}
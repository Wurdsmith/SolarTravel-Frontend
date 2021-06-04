import '../App.css';
import {useSelector, useDispatch} from 'react-redux'
import deleteAddedDestination from '../actions/DeleteAddedDestination'




export default function Itinerary() {
  const addedDests = useSelector(state => state.addedDestinations);
  const dispatch = useDispatch();

  const handleDelete = (destination) => {
    let destinationId = destination.id
    dispatch(deleteAddedDestination(destinationId))
  }

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
export default function fetchAddedDestinations() {
    return (dispatch) => {
      fetch("http://localhost:3000/itineraries/2")//Fetches only the destinations from the custom itinerary that contains added destinations.
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FETCH_ADDED_DESTINATIONS", payload: destinationsArray.destinations})//Destinations is the key that points to an array of destination objects.
      })
    }
  }
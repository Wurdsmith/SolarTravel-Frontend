export default function fetchDestinations() {
    return (dispatch) => {
      fetch("http://localhost:3000/itineraries/1")//Fetches only the destinations from the main itinerary that contains all destinations.
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FETCH_DESTINATIONS", payload: destinationsArray.destinations})//Destinations is the key that points to an array of destination objects.
      })
    }
  }
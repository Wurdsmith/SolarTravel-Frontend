export function filterHotDestinations(temp, grav, dest) {
    return (dispatch) => {
      fetch("http://localhost:3000/itineraries/1")//Fetches only the destinations from the main itinerary that contains all destinations.
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FILTER_DESTINATIONS", payload: destinationsArray.destinations})
      })
    }
  }
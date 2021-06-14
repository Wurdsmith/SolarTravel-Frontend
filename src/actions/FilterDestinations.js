export default function filterDestinations(temp, grav, dist) {
  debugger
    return (dispatch) => {
      fetch("http://localhost:3000/itineraries/3")//Fetches only the destinations from the main itinerary that contains all destinations.
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FILTER_DESTINATIONS", payload: {array: destinationsArray.destinations, temp: temp, grav: grav, dist: dist}})
      })
    }
  }
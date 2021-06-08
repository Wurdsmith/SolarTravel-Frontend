export function filterHotDestinations() {
    return (dispatch) => {
      fetch("http://localhost:3000/itineraries/1")//Fetches only the destinations from the main itinerary that contains all destinations.
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FETCH_HOT_DESTINATIONS", payload: destinationsArray.destinations})
      })
    }
  }

  export function filterWarmDestinations() {
    return (dispatch) => {
      fetch("http://localhost:3000/itineraries/1")//Fetches only the destinations from the main itinerary that contains all destinations.
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FETCH_WARM_DESTINATIONS", payload: destinationsArray.destinations})
      })
    }
  }

  export function filterColdDestinations() {
    return (dispatch) => {
      fetch("http://localhost:3000/itineraries/1")//Fetches only the destinations from the main itinerary that contains all destinations.
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FETCH_COLD_DESTINATIONS", payload: destinationsArray.destinations})
      })
    }
  }

  export function filterFrigidDestinations() {
    return (dispatch) => {
      fetch("http://localhost:3000/itineraries/1")//Fetches only the destinations from the main itinerary that contains all destinations.
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FETCH_COLD_DESTINATIONS", payload: destinationsArray.destinations})
      })
    }
  }
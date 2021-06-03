export default function fetchLists() {
    return (dispatch) => {
      fetch("http://localhost:3000/destinations")
      .then(function(response) {
        return response.json()
      })
      .then((destinationsArray) => {
        dispatch({type: "FETCH_DESTINATIONS", payload: destinationsArray})
      })
    }
  }
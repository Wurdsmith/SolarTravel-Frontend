export default function deleteAddedDestination(destinationId) {
    return function(dispatch) {
      fetch(`http://localhost:3000/destinations/${destinationId}`, {
        method: "DELETE",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
      }).then(resp => resp.json())
      .then(dispatch => dispatch({type: "DELETE_DESTINATION", payload: destinationId}))
    }
  
  }
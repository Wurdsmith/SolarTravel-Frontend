export default function addDestination(destination) {
    return function(dispatch) {
      fetch("http://localhost:3000/destinations", {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({destination: destination})
      }).then(resp => resp.json())
      .then(destination => dispatch({type: "ADD_DESTINATION", payload: destination}))
    }
  
  }
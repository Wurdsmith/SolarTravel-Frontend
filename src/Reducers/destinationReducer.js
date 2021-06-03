export default function destinationReducer(state = {destinations: []}, action) {
    console.log(state)
      switch (action.type) {
        case "FETCH_DESTINATIONS":
            return {destinations: action.payload}
        default:
            return state
    }
  }
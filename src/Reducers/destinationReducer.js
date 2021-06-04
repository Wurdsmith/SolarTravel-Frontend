export default function destinationReducer(state = {destinations: [], addedDestinations: []}, action) {
    console.log(state)
      switch (action.type) {
        case "FETCH_DESTINATIONS":
            return {...state, destinations: action.payload}
        case "FETCH_ADDED_DESTINATIONS":
            return {...state, addedDestinations: action.payload}
        case "ADD_DESTINATION":
            return {...state, addedDestinations: [...state.addedDestinations, action.payload]}
        default:
            return state
    }
  }

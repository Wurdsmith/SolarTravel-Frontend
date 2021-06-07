export default function destinationReducer(state = {destinations: [], addedDestinations: []}, action) {
      switch (action.type) {
        case "FETCH_DESTINATIONS":
            return {...state, destinations: action.payload}
        case "FETCH_HOT_DESTINATIONS":
            return {...state, destinations: state.destinations.filter(destination => destination.temperature > 25)}
        case "FETCH_WARM_DESTINATIONS":
            return {...state, destinations: state.destinations.filter(destination => destination.temperature <= 25 && destination.temperature > -150)}
        case "FETCH_COLD_DESTINATIONS":
            return {...state, destinations: state.destinations.filter(destination => destination.temperature <= -150)}
        case "FETCH_ADDED_DESTINATIONS":
            return {...state, addedDestinations: action.payload}
        case "ADD_DESTINATION":
            return {...state, addedDestinations: [...state.addedDestinations, action.payload]}
        case "DELETE_DESTINATION":
            return {...state, addedDestinations: state.addedDestinations.filter(destination => destination.id !== action.payload.id)}
        default:
            return state
    }
  }

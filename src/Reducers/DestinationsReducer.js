export default function destinationsReducer(state = {destinations: [], addedDestinations: [], filteredDestinations: []}, action) {
    debugger
      switch (action.type) {
        case "FETCH_DESTINATIONS":
            return {...state, destinations: action.payload}
        case "FETCH_ADDED_DESTINATIONS":
            return {...state, addedDestinations: action.payload}
        case "FETCH_FILTERED_DESTINATIONS":
            return {...state, filteredDestinations: action.payload}
        case "FILTER_DESTINATIONS":
            return {...state, filteredDestinations: state.destinations.filter(destination => destination.temperature_class === action.payload.temp && destination.gravity_class === action.payload.grav && destination.distance_class === action.payload.dist)}
        case "ADD_DESTINATION":
            return {...state, addedDestinations: [...state.addedDestinations, action.payload]}
        case "DELETE_DESTINATION":
            return {...state, addedDestinations: state.addedDestinations.filter(destination => destination.id !== action.payload.id)}
        default:
            return state
    }
  }

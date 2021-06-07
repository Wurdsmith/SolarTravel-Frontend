export default function timelineReducer(state = [], action) {
    switch (action.type) {
      case "FETCH_TIMELINE_DATA":
        return state.concat(action.payload)
      default:
          return state
    }
}
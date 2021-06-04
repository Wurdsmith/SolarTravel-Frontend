import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import addDestination from  '../actions/AddDestinations'

class DestinationsContainer extends Component {

  constructor() {
    super()
    this.state = {destinations: []}
  }


    handleSubmit(destination) {
      let newDestination = destination;
      newDestination.itinerary_id = 2;
      this.props.addDestination(newDestination)
      this.props.history.push("/itinerary")
    }

    render() {
        return (
          <div className="destContainer">
              {this.props.destinations.map((destination, i) => 
                <div className="destination" key={destination.id}>
                    <h2>Name: {destination.name}</h2>
                    <h3>Distance from Earth: {destination.distance}Million Miles</h3>
                    <h3>Temperature: {destination.temperature}° Celcius</h3>
                    <h3>{destination.gravity}x Earth's Gravity</h3>
                    <img className="destImage" src={destination.image_url} alt={destination.name}></img>
                    <button className="destButton" onClick={() => this.handleSubmit(destination)}>Add Location to Itinerary!</button>
                    </div>
                 )}
          </div>
        )
    }

}

// list={this.state.lists.find(list => list.id === parseInt(routerProps.match.params.id))}
// <Route path="/lists/new" render={(routerProps) => <ListForm sendData={this.updateState} {...routerProps}/>}/>

function mapStateToProps(state) {
    return {destinations: state.destinations}
  }

export default withRouter(connect(mapStateToProps, {addDestination})(DestinationsContainer))
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import addDestination from  '../actions/AddDestinations'
import Destination from '../Components/Destination'
import Form from '../Components/Form'

class DestinationsContainer extends Component {

  constructor() {
    super()
    this.state = {
      destinations: [],
    }
  }


    handleSubmit(destination) {
      debugger
      let newDestination = destination;
      newDestination.itinerary_id = 2;
      this.props.addDestination(newDestination)
      this.props.history.push("/itinerary")
    }

    render() {
        return (
          <div className="destComponentContainer">
            <div className="formContainer">
              <Form/>
            </div>
              <div className="destContainer">
                  {this.props.destinations.map((destination, i) => 
                <Destination destination={destination} handleSubmit={() => this.handleSubmit(destination)}/>)}
              </div>
          </div>
        )
  }
}


function mapStateToProps(state) {
    return {destinations: state.destinations}
  }

export default withRouter(connect(mapStateToProps, {addDestination})(DestinationsContainer))
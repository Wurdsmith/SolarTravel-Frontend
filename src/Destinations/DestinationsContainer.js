import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import addDestination from  '../actions/AddDestinations'
import Destination from '../Components/Destination'
import Form from '../Components/Form'
import fetchDestinations from '../actions/FetchDestinations'

class DestinationsContainer extends Component {

  constructor() {
    super()
    this.state = {
      destinations: [],
      temperature: '',
      distance: '',
      gravity: ''
    }
  }


    handleSubmit(destination) {
      let newDestination = destination;
      newDestination.itinerary_id = 2;
      this.props.addDestination(newDestination)
      this.props.history.push("/itinerary")
    }

    handleSort(event){
      event.preventDefault(); 
      debugger
      this.props.fetchDestinations()
      let allDests = this.state

    }

    render() {
        return (
          <div className="destComponentContainer">
            <div className="formContainer">
              <Form handleFilter={this.handleSort}/>
            </div>
              <div className="destContainer">
                  {this.props.destinations.map((destination) => 
                <Destination destination={destination} handleSubmit={() => this.handleSubmit(destination)}/>)}
              </div>
          </div>
        )
  }
}


function mapStateToProps(state) {
    return {destinations: state.destinations}
  }

export default withRouter(connect(mapStateToProps, {addDestination, fetchDestinations})(DestinationsContainer))
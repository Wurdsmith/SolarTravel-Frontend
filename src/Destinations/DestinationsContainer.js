import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import addDestination from  '../actions/AddDestinations'
import Destination from '../Components/Destination'
import Form from '../Components/Form'
import fetchDestinations from '../actions/FetchDestinations'
import {filterHotDestinations, filterWarmDestinations, filterColdDestinations, filterFrigidDestinations} from '../actions/FilterDestinations'

class DestinationsContainer extends Component {

  constructor() {
    super()
    this.state = {
      destinations: []
    }
  }
   

    handleSubmit(destination) {
      let newDestination = destination;
      newDestination.itinerary_id = 2;
      this.props.addDestination(newDestination)
      this.props.history.push("/itinerary")
    }

    
    
    handleFilter(event){  
      event.preventDefault();
        switch (event.target.value) {
        case "any":
            return this.props.fetchDestinations()
        case "hot":
          return this.props.fetchDestinations() + this.props.filterHotDestinations()
        case "warm":
          return this.props.fetchDestinations() + this.props.filterWarmDestinations()
        case "cold":
         return this.props.fetchDestinations() + this.props.filterColdDestinations()
         case "frigid":
         return this.props.fetchDestinations() + this.props.filterFrigidDestinations()
         default:
            return this.props.destinations

        }
    }

    render() {
        return (
        <div className="homeContainer">
            <div className="formContainer">
              <Form handleFilter={this.handleFilter.bind(this)}/>
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
    return {destinations: state.allDestinations.destinations}
  }

export default withRouter(connect(mapStateToProps, {addDestination, fetchDestinations, filterHotDestinations, filterWarmDestinations, filterColdDestinations, filterFrigidDestinations})(DestinationsContainer))
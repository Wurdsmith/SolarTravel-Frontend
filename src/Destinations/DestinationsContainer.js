import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import addDestination from  '../actions/AddDestinations'
import Destination from '../Components/Destination'
import Form from '../Components/Form'
import fetchDestinations from '../actions/FetchDestinations'
import filterDestinations from '../actions/FilterDestinations'

class DestinationsContainer extends Component {

  constructor() {
    super()
    // Sets the intial state to the value that should be assigned to the default selections in the filter sections (this way if the user doesn't change the value, the filter will still work).
    this.state = {
      destinations: [],
      temperature:'hot',
      distance:'closest',
      gravity:'heavy'
    }
  }
  
    handleSubmit(destination) { // Adds the selected destination to the user's itinierary and renders the itinerary page.
      let newDestination = destination;
      newDestination.itinerary_id = 2;
      this.props.addDestination(newDestination)
      this.props.history.push("/itinerary")
    }
    
    handleFilter(eventValue, formType) { // Dynamically changes the container's state values depending on what the user selects on the filter form.
      this.setState({
        [formType]: eventValue,
      })
    }

    

    handleFilterSubmit(e) { // Uses the controlled state to send the current selections to the action and reducer.
      e.preventDefault()
      this.props.filterDestinations(this.state.temperature, this.state.gravity, this.state.distance)
      }


    render() {
        return (
        <div className="homeContainer">
            <div className="formContainer">
              <Form handleFilter={(eventValue, formType) => this.handleFilter(eventValue, formType)} handleFilterSubmit={(e) => this.handleFilterSubmit(e)}/>
            </div>
              <div className="destContainer">
                  {this.props.filteredDestinations.map((destination) => 
                <Destination destination={destination} handleSubmit={() => this.handleSubmit(destination)}/>)}
              </div>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      destinations: state.allDestinations.destinations,
      filteredDestinations: state.allDestinations.filteredDestinations
    }
  }

export default withRouter(connect(mapStateToProps, {addDestination, fetchDestinations, filterDestinations})(DestinationsContainer))
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import addDestination from  '../actions/AddDestinations'
import Destination from '../Components/Destination'
import Form from '../Components/Form'
import fetchDestinations from '../actions/FetchDestinations'
import {filterDestinations} from '../actions/FilterDestinations'

class DestinationsContainer extends Component {

  constructor() {
    super()
    this.state = {
      destinations: [],
      temperature:'',
      distance:'',
      gravity:''
    }
  }
   

    handleSubmit(destination) {
      let newDestination = destination;
      newDestination.itinerary_id = 2;
      this.props.addDestination(newDestination)
      this.props.history.push("/itinerary")
    }
    
    handleFilter(eventValue, formType) {
      this.setState({
        [formType]: eventValue
      }, () =>{
      this.fetchFilteredDests(this.state.temperature, this.state.distance, this.state.gravity) //This function was placed within the setState function to call only after the component's state has been updated.
      })
    }

    fetchFilteredDests(temperature, distance, gravity){
      debugger
      this.props.filterDestinations(temperature, distance, gravity)
    }


    render() {
        return (
        <div className="homeContainer">
            <div className="formContainer">
              <Form handleFilter={(eventValue, formType) => this.handleFilter(eventValue, formType)}/>
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

export default withRouter(connect(mapStateToProps, {addDestination, fetchDestinations, filterDestinations})(DestinationsContainer))
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
      console.log(formType, eventValue)
      
      this.setState({
        [formType]: eventValue
      })

    }


    render() {
      console.log(this.state)
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

export default withRouter(connect(mapStateToProps, {addDestination, fetchDestinations})(DestinationsContainer))
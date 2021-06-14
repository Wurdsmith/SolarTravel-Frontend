import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import addDestination from  '../actions/AddDestinations'
import Destination from '../Components/Destination'
import Form from '../Components/Form'
import fetchDestinations from '../actions/FetchDestinations'
import fetchFilteredDestinations from '../actions/FetchFilteredDestinations'
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

  componentWillUnmount(){
    this.props.fetchFilteredDestinations()
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

      handleReset(e){
        e.preventDefault()
        this.props.fetchFilteredDestinations()
      }


    render() {
      if (this.props.filteredDestinations.length > 0){
        return (
        <div className="homeContainer">
            <div className="formContainer">
              <Form handleFilter={(eventValue, formType) => this.handleFilter(eventValue, formType)} handleFilterSubmit={(e) => this.handleFilterSubmit(e)} handleReset={(e) => this.handleReset(e)}/>
            </div>
              <div className="destContainer">
                  {this.props.filteredDestinations.map((destination) => 
                <Destination destination={destination} handleSubmit={() => this.handleSubmit(destination)}/>)}
              </div>
          </div>
        )
      }
      else{
        return (
          <div className="alert">
            <div className="formContainer">
              <Form handleFilter={(eventValue, formType) => this.handleFilter(eventValue, formType)} handleFilterSubmit={(e) => this.handleFilterSubmit(e)} handleReset={(e) => this.handleReset(e)}/>
            </div>
              <h1>We're sorry. We don't have any destinations that match those criteria.</h1>
              <img className ="noResults" src='https://www.cnet.com/a/img/wb2a0OeMJ8t4Vq_pdSsoPxc9A1Y=/940x0/2019/05/22/1b710a6b-5f4d-4987-a046-c23674b221a3/picard-meme-facepalm.jpg'></img>
          </div>
          )
      }
    }
}


function mapStateToProps(state) {
    return {
      destinations: state.allDestinations.destinations,
      allDestinations: state.allDestinations.destinations,
      filteredDestinations: state.allDestinations.filteredDestinations
    }
  }

export default withRouter(connect(mapStateToProps, {addDestination, fetchDestinations, filterDestinations, fetchFilteredDestinations})(DestinationsContainer))
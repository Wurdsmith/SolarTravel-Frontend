import '../App.css';
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import AddedDestinations from '../Components/AddedDestinations'
import deleteAddedDestination from '../actions/DeleteAddedDestination'

class AddedDestinationsContainer extends Component {

  constructor() {
    super()
    this.state = {
        addedDestinations: [],
    }
  }

    handleDelete(destination){
    let destinationId = destination.id
    this.props.deleteAddedDestination(destinationId)
    this.props.history.push("/itinerary")
  }


    render() {
        return (
          <div className="addedDestContainer">
              {this.props.addedDestinations.map((destination) => 
            <AddedDestinations addedDestination={destination} handleDelete={() => this.handleDelete(destination)}/>)}
          </div>
        )
  }
}


function mapStateToProps(state) {
    return {addedDestinations: state.allDestinations.addedDestinations}
  }

export default withRouter(connect(mapStateToProps, {deleteAddedDestination})(AddedDestinationsContainer))
import '../App.css';
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import AddedDestination from '../Components/AddedDestination'
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
    deleteAddedDestination(destinationId)
  }


    render() {
        return (
          <div className="addedDestContainer">
              {this.props.addedDestinations.map((destination) => 
            <AddedDestination addedDestination={destination} handleDelete={() => this.handleDelete(destination)}/>)}
          </div>
        )
  }
}


function mapStateToProps(state) {
    return {addedDestinations: state.addedDestinations}
  }

export default withRouter(connect(mapStateToProps)(AddedDestinationsContainer))
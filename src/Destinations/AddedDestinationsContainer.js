import '../App.css';
import React, {Component} from 'react'
import AddedDestinations from '../Components/AddedDestinations'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import deleteAddedDestination from '../actions/DeleteAddedDestination'
import Ships from '../Components/Ships'

class AddedDestinationsContainer extends Component {

  constructor() {
    super()
    this.state = {
        ship: false
    }
  }

    handleChange(event){ // Sets the state depending on what ship is chosen, rendering the DOM differently for each.
      switch (event.target.value) {
        case "enterprise":
          return this.setState({
            ship: false
          })
        case "odyssey":
          return this.setState({
            ship: true
          })
        default:
          return this.state
    }
  }

    handleDelete(destination){
    let destinationId = destination.id
    this.props.deleteAddedDestination(destinationId)
    this.props.history.push("/itinerary")
  }

    render() {
        return (
          <div>
            <div className = "shipContainer">
              <Ships handleChange= {(event) => this.handleChange(event)}/>
            </div>
            <div className="addedDestContainer">
                {this.props.addedDestinations.map((destination) => 
                <AddedDestinations addedDestination={destination} handleDelete={() => this.handleDelete(destination)} shipType={this.state.ship}/>)}
            </div>
          </div>
        )
  }
}


function mapStateToProps(state) {
    return {addedDestinations: state.allDestinations.addedDestinations}
  }

export default withRouter(connect(mapStateToProps, {deleteAddedDestination})(AddedDestinationsContainer))
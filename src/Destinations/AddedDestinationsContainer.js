import '../App.css';
import React, {Component} from 'react'
import AddedDestinations from '../Components/AddedDestinations'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import deleteAddedDestination from '../actions/DeleteAddedDestination'
import Ships from '../Components/Ships'
import {Link} from 'react-router-dom'

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

    handleDelete(destination){ // Deletes the selected destinations object from the addedDestinations array, and thus, the DOM.
    let destinationId = destination.id
    this.props.deleteAddedDestination(destinationId)
    this.props.history.push("/itinerary")
  }

    render() {
      if (this.props.addedDestinations > 0)
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
      else{
        return(
          <div className="emptyItinerary">
          <h2>Looks like you havent added any destinations to your itinerary yet! Visit the {<Link to="/" className='home-link'>homepage</Link>} to add your first destination.</h2>
          <img src='https://images.theconversation.com/files/381158/original/file-20210128-21-1iu0ae0.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip' alt='Return home'></img>
          </div>
        )
      }
  }
}


function mapStateToProps(state) {
    return {addedDestinations: state.allDestinations.addedDestinations}
  }

export default withRouter(connect(mapStateToProps, {deleteAddedDestination})(AddedDestinationsContainer))
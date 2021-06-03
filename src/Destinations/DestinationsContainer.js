import React, {Component} from 'react'
import { connect } from 'react-redux'
import fetchDestinations from '../actions/FetchDestinations'

class DestinationsContainer extends Component {


    componentDidMount() {
        this.props.fetchDestinations()
    }

    render() {
        debugger
        return (
          <div>
              {this.props.destinations.map((destination, i) => 
                <li key={destination.id}>
                    <h2>{destination.name}</h2>
                    <img src={destination.image_url} alt={destination.name}></img>
                    </li>
                 )}
          </div>
        )
    }

}

// list={this.state.lists.find(list => list.id === parseInt(routerProps.match.params.id))}
// <Route path="/lists/new" render={(routerProps) => <ListForm sendData={this.updateState} {...routerProps}/>}/>

function mapStateToProps(state) {
    return {destinations: state.destinations}
  }

export default connect(mapStateToProps, {fetchDestinations})(DestinationsContainer)
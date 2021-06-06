import './App.css';
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Itinerary from './Components/Itinerary'
import About from './Components/About'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Map from './Components/Map'
import fetchDestinations from './actions/FetchDestinations'
import fetchAddedDestinations from './actions/FetchAddedDestinations'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {

  componentDidMount() {
    this.props.fetchDestinations()
    this.props.fetchAddedDestinations()
  }
  
  render(){
  return (
    <Router>
      <div className='AppContainer'>
        <Nav />
        <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path="/itinerary" component={Itinerary}/>
        <Route path="/about" component={About}/> 
        <Route path="/map" component={Map}/> 
        </Switch>
      </div>
    </Router>
  );
  }
}

export default connect(null, {fetchDestinations, fetchAddedDestinations})(App)
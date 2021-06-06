import './App.css';
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Itinerary from './Pages/Itinerary'
import About from './Pages/About'
import Nav from './Pages/Nav'
import Home from './Pages/Home'
import Map from './Pages/Map'
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
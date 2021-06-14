import './App.css';
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Itinerary from './Pages/Itinerary'
import About from './Pages/About'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Map from './Pages/Map'
import Footer from './Components/Footer'
import fetchDestinations from './actions/FetchDestinations'
import fetchAddedDestinations from './actions/FetchAddedDestinations'
import fetchFilteredDestinations from './actions/FetchFilteredDestinations'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {

  componentDidMount() { // Fetches the initial destination arrays that will be stored in our Redux store.
    this.props.fetchDestinations()
    this.props.fetchAddedDestinations()
    this.props.fetchFilteredDestinations()
  }
  
  render(){ // App is our highest parent component (besides index.js) and renders the entire application.
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
        <Footer />
      </div>
    </Router>
  );
  }
}

export default connect(null, {fetchDestinations, fetchAddedDestinations, fetchFilteredDestinations})(App)
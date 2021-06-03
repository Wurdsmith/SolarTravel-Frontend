import './App.css';
import Itinerary from './Itinerary'
import About from './About'
import Nav from './Nav'
import Home from './Home'
import Map from './Map'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div class='AppContainer'>
        <Nav />,
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

export default App;

import './App.css';
import Itinerary from './Components/Itinerary'
import About from './Components/About'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Map from './Components/Map'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className='AppContainer'>
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

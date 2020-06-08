import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ActivityList from './components/ActivityList';
import Details from './components/Details';
import Default from './components/Default';
import Home from './components/Home';
import VirtualFieldtrip from './components/VirtualFieldtrip';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/activities" component={ActivityList} />
          <Route path="/details" component={Details} />
          <Route path="/vft" component={VirtualFieldtrip} />
          <Route path=" vft" component={VirtualFieldtrip} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

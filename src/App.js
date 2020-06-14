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
import Calender from './components/Calender';
import Reading from './components/Reading';

import ScrollToTop from "./ScrollToTop";

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
          <Route path="/calender" component={Calender} />
          <Route path="/reading" component={Reading} />
          <Route path=" vft" component={VirtualFieldtrip} />
          <Route component={Default} />
        </Switch>
        <ScrollToTop />
      </React.Fragment>
    );
  }
}

export default App;

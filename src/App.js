import React, { Component } from 'react';
import Login from "./containers/Login/Login"
import Owner from "./containers/Owner/Owner"
import Reservation from './containers/Reservation/Reservation';
import Payments from './containers/Payments/Payments';
import Access from './containers/Access/Access'
import Maintenance from './containers/Maintenance/Maintenance'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        
        <Login />
        {/* <Reservation/> */}
        {/* <Access/>         */}
        {/* <Maintenance/> */}
        {/* <Payments/> */}
        {/* <Owner /> */}
        
      </div>
    );
  }
}

export default App;

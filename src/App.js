import React, { Component } from 'react';
import Login from "./containers/Login/Login"
import Owner from "./containers/Owner/Owner"
import Reservation from './containers/Reservation/Reservation';
import Payments from './containers/Payments/Payments';
import Access from './containers/Access/Access'
import Maintenance from './containers/Maintenance/Maintenance'
import OwnerList from './containers/Owner/OwnerList'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/reservation" component={Reservation}/>
          <Route path="/access" component={Access}/>
          <Route path="/maintenance" component={Maintenance}/>
          <Route path="/payments" component={Payments}/>
          <Route path="/owner" component={Owner} />
          <Route path="/all-users" component={OwnerList}/>
          <Route path="/" exact component={Login}/>
        </Switch>        
      </div>
    );
  }
}

export default App;

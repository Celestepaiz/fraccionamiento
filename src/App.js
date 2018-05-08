import React, { Component } from 'react';
import Login from "./containers/Login/Login"
import Owner from "./containers/Owner/Owner"
import Reservation from './containers/Reservation/Reservation';
import Payments from './containers/Payments/Payments';
import Access from './containers/Access/Access'
import Maintenance from './containers/Maintenance/Maintenance'
import OwnerList from './containers/Owner/OwnerList'
import MaintenanceList from './containers/Maintenance/MaintenanceList'
import PaymentsList from './containers/Payments/PaymentsList'
import AccessList from './containers/Access/AccessList'
import { Switch, Route, Redirect , withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import ReservationList from './containers/Reservation/ReservationList';
import {authCheckState} from './store/actions/index'
import UpdateAccess from './containers/Access/UpdateAccess'
import UpdateMaintenance from './containers/Maintenance/MaintenanceUpdate'
import UpdatePayment from './containers/Payments/UpdatePayment'
import Logout from './containers/Login/Logout/Logout'
class App extends Component {

  componentDidMount(){
    this.props.onCheckAuth()
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={Login}/>
        <Redirect to='/'/>
      </Switch>  
    )

    if(this.props.isAuth){
      routes = (
        <Switch>          
          <Route path="/reservation" component={Reservation}/>
          <Route path="/access" component={Access}/>
          <Route path="/maintenance" component={Maintenance}/>
          <Route path="/payments" component={Payments}/>
          <Route path="/owner" component={Owner} />
          <Route path="/all-payments" component={PaymentsList}/>
          <Route path="/all-maintenance" component={MaintenanceList}/>
          <Route path="/all-reservations"component={ReservationList}/>
          <Route path="/all-users" component={OwnerList}/>
          <Route path="/all-access" component={AccessList}/>
          <Route path="/update-access" component={UpdateAccess}/>
          <Route path="/update-maintenance" component={UpdateMaintenance}/>
          <Route path="/update-payments" component={UpdatePayment}/>
          <Route path="/logout" component={Logout}/>
          <Redirect to="/all-payments"/>
        </Switch>                
      )
    }


    return (
      <div>
        {routes}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAuth: state.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuth: () => dispatch(authCheckState())
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))


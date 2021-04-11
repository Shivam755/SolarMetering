import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
//Importing Components
import Login from './Components/Login';
import Register from './Components/RegisterUser';
import RegisterGrid from './Components/RegisterGrid';
//userpages
import userMain from './Components/userMain';
import userProfile from './Components/userProfile';
import updatereading from './Components/updatereading';
import Paybill from './Components/Paybill';
//Grid components
import GridMain from './Components/gridMain';
import VerifyCustomers from './Components/VerifyCustomers';
import CheckPayment from './Components/GridCheckPayment';
import MakePayment from './Components/GridMakePayment';

function App() {
  
  return (
    <Router>
        <Route path='/' exact component={Login}/>
        <Route path='/Sign-up' exact component={Register}/>
        <Route path='/Sign-up/Grid' exact component={RegisterGrid}/>
        <Route path='/User' exact component={userMain}/>
        <Route path='/UserProfile' exact component={userProfile}/>
        <Route path='/UserUpdateReading' exact component={updatereading}/>
        <Route path='/UserPaybill' exact component={Paybill}/>
        <Route path='/Grid' exact component={GridMain}/>
        <Route path='/GridVerifyCustomer' exact component={VerifyCustomers}/>
        <Route path='/GridCheckPayment' exact component={CheckPayment}/>
        <Route path='/GridMakePayment' exact component={MakePayment}/>
    </Router>
  );
}

export default App;
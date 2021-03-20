import './App.css';
import React from 'react';
import styled from 'styled-components';
import Login from './Components/Login';
import Register from './Components/RegisterUser';
import RegisterGrid from './Components/RegisterGrid'
import {Route, BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
    <Router>
    <Container className="App">
      <Route path='/' exact render={(route, setRoute)=>(<Login route={route} setRoute={setRoute}></Login>)}/>
      <Route path='/Sign-up' exact component={Register}/>
      <Route path='/Sign-up/Grid' exact component={RegisterGrid}/>
    </Container>
    </Router>
  );
}

export default App;


const Container = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
`

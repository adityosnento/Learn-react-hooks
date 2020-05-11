import React from 'react';
import './App.scss';
import SignUp from './components/Auth/Signup';
import SignIn from './components/Auth/Signin';
import Routes from './components/Try/routes';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path='/signup' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/' component={Routes}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
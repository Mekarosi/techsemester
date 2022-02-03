import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

import './App.css';

function App() {
  return (
    <Router>
      
       
          <Switch>
             <Route exact path='/' component={Landing} />

             <Route path='/register' component={Register} />

             <Route path='/login' component={Login} />

          </Switch>
            
        
        
    </Router>
  );
}

export default App;

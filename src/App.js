import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

// Redux 
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
          <Switch>
             <Route exact path='/' component={Landing} />

             <Route path='/register' component={Register} />

             <Route path='/login' component={Login} />

          </Switch>      
      </Router>
    </Provider>
    
  );
}

export default App;

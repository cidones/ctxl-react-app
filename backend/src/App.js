import React, { Component } from 'react';
import Navegation from './router/Navegation';
import { Router } from 'react-router-dom';
import history from './router/history';





class App extends Component{
    render(){
        return(
            <Router history={history}>
              <div>
                   <Navegation />
              </div>
            </Router>
               
        )
    }
}

export default App;
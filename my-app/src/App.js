import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from './router/history';
import Root from './component/Root';





class App extends Component{
    render(){
        return(
            <Router history={history}>
              <div>
                   <Root />
              </div>
            </Router>
               
        )
    }
}

export default App;
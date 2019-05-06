import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import history from './router/history';
import Root from './component/Root';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { fetchAuthenticated } from './actions/account';
import HomePage from './home/HomePage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
  const AuthRoute = props => {
    if (!store.getState().account.loggedIn) {
      return <Redirect to={{ pathname: '/' }} />
    }
    const { component, path } = props;

  return <Route path={path} component={component} />;
}

store.dispatch(fetchAuthenticated())
  .then(() => {
    ReactDOM.render( 
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                    <Route exact path='/' component={Root} />
                    <AuthRoute path='/home' component={HomePage}/>
                    </Switch>
                </Router>
            </Provider>
            , document.getElementById('root'));
    })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

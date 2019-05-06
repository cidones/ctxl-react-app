import React, {Component} from 'react';
import AuthForm from './AuthForm';
import { connect } from 'react-redux';
import Home from './Home';

class Root extends Component {
    render(){
        return(
            this.props.account.loggedIn ? <Home /> : <AuthForm />
        )
    }
}

export default connect(
  ({ account }) => ({ account }),
  null
)(Root);


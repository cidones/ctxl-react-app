import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, Alert } from 'react-bootstrap';
import { signup, login } from '../actions/account';
import fetchStates from '../reducers/fetchStates';
import logo from '../assets/logo.png';
import '../styles/AuthForm.css';
import history from '../router/history';



class AuthForm extends Component {
  state = { username: '', password: '', buttonClicked: false };

  updateUsername = event => {
    this.setState({ username: event.target.value });
  }

  updatePassword = event => {
    this.setState({ password: event.target.value });
  }

  login = () => {
    this.setState({ buttonClicked: true });

    const { username, password } = this.state;

    this.props.login({ username, password });

    
  }

  get Error() {
    if (
      this.state.buttonClicked && 
      this.props.account.status === fetchStates.error
      ) {
      return <div>
                <Alert variant="danger">{this.props.account.message}</Alert>
              </div>
    }
  }

  render() {
    return (
      <div>
        <div className="banner-login">
          <img src={logo} className="page-logo" alt="logo" />
          <br/>
          <h3 className="text-align center">Welcome to CTxL</h3>
        </div>
        <div className="form-group-div">
            <FormGroup>
              <FormControl
                type='text'
                value={this.state.username}
                placeholder='username'
                onChange={this.updateUsername}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type='password'
                value={this.state.password}
                placeholder='password'
                onChange={this.updatePassword}
              />
            </FormGroup>
        </div>
        <div className="button-div">
          <Button  size='lg'
                   onClick={this.login}
                   active>Login
          </Button>
        </div>
        <div className="signup-text">
          <a href="/signup" onClick={() => history.push('/signup')}>Don't have an account? click for Sign up</a>
        </div>
        <br />
        <div className="error-div">{this.Error}</div>
      
      </div>
      
    );
  }
}

export default connect(
  ({ account }) => ({ account }),
  { signup, login }
)(AuthForm);
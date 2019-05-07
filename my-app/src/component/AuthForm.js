import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { signup, login } from '../actions/account';
import fetchStates from '../reducers/fetchStates';
import logo from '../assets/logo.png';
import '../styles/AuthForm.css';


class AuthForm extends Component {
  state = { username: '', password: '', buttonClicked: false };

  updateUsername = event => {
    this.setState({ username: event.target.value });
  }

  updatePassword = event => {
    this.setState({ password: event.target.value });
  }

  signup = () => {
    this.setState({ buttonClicked: true });

    const { username, password } = this.state;

    this.props.signup({ username, password });
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
    ) 
      return <div>{this.props.account.message}</div>
    }

  render() {
    return (
      <div>
        <div className="banner">
          <img src={logo} className="page-logo" alt="logo" />
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
          <Button onClick={this.login}>Login</Button>
          <span>  or  </span>
          <Button onClick={this.signup}>Signup</Button>
        </div>
        <br />
        {this.Error}
      </div>
    );
  }
}

export default connect(
  ({ account }) => ({ account }),
  { signup, login }
)(AuthForm);
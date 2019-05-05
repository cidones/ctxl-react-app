import React, {Component} from 'react';
import { Button, FormGroup, FormControl} from 'react-bootstrap';

class AuthForm extends Component {
    state = {username: '', password: ''}

    updateUsername = (event) => {
        this.setState({username: event.target.value})
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value})
    }

    signup = () => {
        console.log('this.state', this.state)
    }

    login = () => {
        console.log('this.state', this.state)
    }



    render(){
        return(
           <div>
               <h2>CTxL</h2>
               <FormGroup>
                   <FormControl type='text'
                    value={this.state.username}
                     placeholder='username' 
                     onChange={this.updateUsername} />
                    <FormControl type='password'
                     value={this.state.password}  
                     placeholder='password' 
                     onChange={this.updatePassword}/> 
               </FormGroup>
               <div>
                   <Button onClick={this.login} >Log in</Button>
                   <span> or </span>
                   <Button  onClick={this.signup} >Sign up</Button>
               </div>
           </div>
        )
    }
}
export default AuthForm;
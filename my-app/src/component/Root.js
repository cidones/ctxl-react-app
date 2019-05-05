import React, {Component} from 'react';
import AuthForm from './AuthForm';
import Navegation from '../router/Navegation';

class Root extends Component {
    render(){
        return(
            false ? <Navegation /> : <AuthForm />
        )
    }
}

export default Root;


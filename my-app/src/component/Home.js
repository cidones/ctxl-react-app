import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import HomePage from '../home/HomePage';
import { logout } from '../actions/account';
import { connect } from 'react-redux';


class Home extends Component {
    render(){
        return(
            <div>
                <HeaderComponent />
                <HomePage/>
            </div>
        )
    }
}

export default connect(null, { logout })(Home);
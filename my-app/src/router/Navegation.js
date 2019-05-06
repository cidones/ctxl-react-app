import React, { Component } from 'react';
import './Navegation.css';
import HeaderComponent from '../component/HeaderComponent';
import  Button  from 'react-bootstrap/Button';
import { logout } from '../actions/account';
import { connect } from 'react-redux';



class Navegation extends Component{

    render(){
        return(
            <div className="header-div">
                <Button onClick={this.props.logout} className='logout-button'>
                    Log Out
                </Button>
                <HeaderComponent/>
           </div> 
        )
    }
}
export default connect(null, { logout })(Navegation);
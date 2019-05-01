import React, { Component } from 'react';
import './Navegation.css';
import HeaderComponent from '../component/HeaderComponent';



class Navegation extends Component{

    render(){
        return(
            <div className="header-div">
                <HeaderComponent/>
           </div> 
        )
    }
}
export default Navegation;
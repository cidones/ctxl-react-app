import React, {Component} from 'react';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCopyright)

class Footer extends Component{

    render(){
        return(
            <div className='footer'>
                <div className="text-footer">
                    <FontAwesomeIcon icon="copyright" />
                    <p className="para-text"><b>CTxL co.</b></p> 
                </div>
            </div>
        )
    }   
}

export default Footer
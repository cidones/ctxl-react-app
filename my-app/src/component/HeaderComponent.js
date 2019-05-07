import React from 'react';
import Nav from 'react-bootstrap/Nav';
import history from '../router/history';
import { logout } from '../actions/account';
import { connect } from 'react-redux';

class  HeaderComponent extends React.Component {
    
    render(){
        return(
             <div className="header-div">
                <Nav className="nav-div justify-content-center" variant="pills" >
                    <Nav.Item>
                        <Nav.Link onClick={ () => history.push('/home')} >Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  onClick={ () => history.push('/create')} >Create new project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={ () => history.push('/manage')} >Manage my projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={ () => history.push('/help')} >Help</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={this.props.logout} className='logout-button' >Log out </Nav.Link>
                    </Nav.Item>
                </Nav>
             </div> 
            
        )
    }
}
export default connect(null, { logout })(HeaderComponent);
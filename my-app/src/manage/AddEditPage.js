import React, { Component } from 'react';
import './AddEditPage.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import history from '../router/history';
import HeaderComponent from '../component/HeaderComponent';
import Spinner from 'react-bootstrap/Spinner'




class AddEdit extends Component{

    state = { ButtonCliked : false } 

    spinnerChange = event => {
        this.setState({ButtonCliked : true})
        

        setTimeout(()=> {
            this.setState({ButtonCliked: false})
        }, 2000)
    }

    
    render(){

        const content = `You may view an existing record/response by selecting it from the drop-down lists below.
            To create a new record/response, type a new value in the text box below and hit Tab or Enter.
            To quickly find a record without using the drop-downs,
            the text box will auto-populate with existing record names as you begin to type in it,
            allowing you to select it.`

        return(
            <div className="main-wrapper">
                <HeaderComponent/>
                <div className="content-text-div">
                    <p>{content}</p>
                </div>
                <div>
                    <Navbar bg="light" expand="lg">
                     <Navbar.Brand href="#home">Choose an existing participant</Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Dropdown as={NavItem} className="mr-auto">
                                <Dropdown.Toggle>Choose a participant </Dropdown.Toggle>
                                <span>  </span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Hello there!</Dropdown.Item>
                                </Dropdown.Menu>
                                <Button variant="outline-success">Search</Button>
                            </Dropdown>
                        </Nav>
                     </Navbar.Collapse>
                    </Navbar>
                    <Navbar bg="light" expand="lg">
                     <Navbar.Brand href="#home">Add a new participant </Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                        <FormControl type="text" placeholder="Participant number" className="mr-sm-2" />
                        <Button variant="outline-success" onClick={() => history.push('/baseline')} >
                        {this.spinnerChange ? <Spinner/> : 'error'}
                         Add
                        </Button>
                        
                        </Form>
                     </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default AddEdit;
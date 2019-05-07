import React, { Component } from 'react';
import './CreatePage.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import history from '../router/history';
import HeaderComponent from '../component/HeaderComponent';
import { logout } from '../actions/account';
import { connect } from 'react-redux';

class CreatePage extends Component{
    render(){

        const initialContent ="You may begin the creation of a new CTxL project on your own by completing the form below and clicking the Create Project button at the bottom."

        return(
               <div className="create-master-div">
                    <HeaderComponent/>
                   <div className="div-form-create">
                       <div >
                            {initialContent}
                       </div>
                       <Form className="form-project-info">
                            <Form.Group as={Row} controlId="formGroupTitle">
                                <Form.Label column sm="4">
                                    Project Title:
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control type="text" placeholder="Title" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formGroupPurpose">
                                <Form.Label column sm="4">
                                    Purpose of this project?
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control as="select">
                                        <option>-- Select --</option>
                                        <option>Just for fun/ Practice</option>
                                        <option>Research</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit" size="lg" className="button-sub" onClick={ () => history.push('/add')}>
                                Submit
                            </Button>
                       </Form>
                   </div>
               </div>
        )
    }
}
export default connect(null, { logout })(CreatePage);
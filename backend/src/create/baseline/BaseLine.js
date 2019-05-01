import React, { Component } from 'react';
import './BaseLine.css';
import history from '../../router/history';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

library.add(faCalendarAlt)

class BaseLineVisit extends Component{
    render(){
        return(

            <div className="baseline-wrapper">
                <Breadcrumb className="breadcrumb-div">
                    <Breadcrumb.Item href="#">Baseline visit </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Thermal data</Breadcrumb.Item>
                </Breadcrumb>

                <div className="demo-div">
                    <div className="demo-div-1"><h4>Demographics / Baseline Data</h4></div>
                </div>

                <div>
                    <hr/>
                    <div>Event Name: Baseline Visit</div>
                    <hr/>
                    <div><h5>Participant ID: ID HERE </h5></div>
                    <hr/>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalDate">
                            <Form.Label column sm={4}>Baseline visit date <FontAwesomeIcon icon="calendar-alt"/></Form.Label>
                            <Col sm={2}>
                            <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalName">
                            <Form.Label column sm={4}>Name</Form.Label>
                            <Col sm={4}>
                            <Form.Control type="text" placeholder="First Name" />
                            </Col>
                            <Col sm={4}>
                            <Form.Control type="text" placeholder="Last Name" />
                            </Col>
                        </Form.Group>
                    </Form>
                    <hr/>
                    <div><h5>Demographics</h5></div>
                    <hr/>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalDate">
                            <Form.Label column sm={4}>Date of Birth <FontAwesomeIcon icon="calendar-alt"/></Form.Label>
                            <Col sm={2}>
                            <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontaGender">
                            <Form.Label column sm={4}>Gender</Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Unknown</option>                        
                            </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalWeight">
                            <Form.Label column sm={4}>Weight</Form.Label>
                            <Col sm={4}>
                            <Form.Control type="text" placeholder="kg" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalHeight">
                            <Form.Label column sm={4}>Height</Form.Label>
                            <Col sm={4}>
                            <Form.Control type="text" placeholder="cm" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEthinicity">
                            <Form.Label column sm={4}>Ethinicity</Form.Label>
                            <Col sm={4}>
                            <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>
                    </Form>
                    <hr/>
                    <div><h5>Confounding factor</h5></div>
                    <hr/>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontaHair">
                            <Form.Label column sm={4}>Hair Color</Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option></option>
                                <option>Black</option>
                                <option>Blonde</option>
                                <option>Dark Brown</option>
                                <option>Light Brown</option>
                                <option>Red</option> 
                            </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontaHand">
                            <Form.Label column sm={4}>Dominant Hand</Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option></option>
                                <option>Left</option>
                                <option>Right</option>
                            </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontaSmoker">
                            <Form.Label column sm={4}>Is the participant a current smoker?</Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                    <hr/>
                    <div><h5>Exclusion Criteria</h5></div>
                    <hr/>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontaDRug">
                            <Form.Label column sm={4}>Is the participant a drug user?</Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                            <p>An answer of Yes here should exclude the participant </p>
                            </Col>
                        </Form.Group>
                    </Form>
                    <hr/>
                    <div><h5>Form Status</h5></div>
                    <hr/>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontaStatus">
                            <Form.Label column sm={4}>Complete ?</Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option>Incomplete</option>
                                <option>Unverified</option>
                                <option>Complete</option>
                            </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontaButton">
                            <Form.Label column sm={4}></Form.Label>
                            <Col sm={4}>
                                <Button  className="buttonSave" variant="light" onClick={() => history.push('/thermal')}>Save</Button>
                                <Button variant="light">Cancel</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}
export default BaseLineVisit;
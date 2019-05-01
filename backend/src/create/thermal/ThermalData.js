import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import './ThermalData.css';

library.add(faCalendarAlt)

class ThermalData extends Component {
    render(){
        return(
            <div className="thermal-wrapper">
                <Breadcrumb className="breadcrumb-div">
                    <Breadcrumb.Item href="#">Baseline visit </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Thermal data</Breadcrumb.Item>
                </Breadcrumb>
                <div className="thermal-div">
                    <div className="thermal-div-1"><h4>Thermal Data</h4></div>
                    <div className="thermal-div-2">
                        <DropdownButton title="Visit number">
                            <Dropdown.Item >1</Dropdown.Item>
                            <Dropdown.Item >2</Dropdown.Item>
                            <Dropdown.Item >3</Dropdown.Item>
                            <Dropdown.Item >4</Dropdown.Item>
                        </DropdownButton> 
                    </div>
                </div>
                <hr/>
                <div>Event name: Thermal visit measurement </div>
                <hr/>
                <div><h5>Participant ID: ID HERE </h5></div>
                <hr/>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalVDate">
                        <Form.Label column sm={4}>Visit date <FontAwesomeIcon icon="calendar-alt"/></Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontaDrugCombo">
                        <Form.Label column sm={4}>Drug combination</Form.Label>
                        <Col sm={2}>
                        <Form.Control  as="select">
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>                        
                        </Form.Control>
                        </Col>
                        <div>Leave blank if no drug cocktail administration</div>
                    </Form.Group>
                        <hr/>
                        <div><h5>Round 1 - Sensory pain measurements ( relative intensity ) </h5></div>
                        <hr/>
                    <Form.Group as={Row} controlId="formHorizontathermal1">
                        <Form.Label column sm={4}>Thermal combination 1</Form.Label>
                        <Col sm={4}>
                        <Form.Control  as="select">
                            <option></option>
                            <option>37 deg + 49 deg + 51 deg</option>
                            <option>37 deg + 51 deg + 49 deg</option>
                            <option>49 deg + 37 deg + 51 deg</option>
                            <option>51 deg + 37 deg + 49 deg</option>                        
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontalSensor1">
                        <Form.Label column sm={4}>Sensory pain measurement 1</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSensor2">
                        <Form.Label column sm={4}>Sensory pain measurement 2</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSensor3">
                        <Form.Label column sm={4}>Sensory pain measurement 3</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <hr/>
                        <div><h5>Round 2 - Affective pain measurements ( relative unpleasantness ) </h5></div>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontathermal2">
                        <Form.Label column sm={4}>Thermal combination 2</Form.Label>
                        <Col sm={4}>
                        <Form.Control  as="select">
                            <option></option>
                            <option>37 deg + 49 deg + 51 deg</option>
                            <option>37 deg + 51 deg + 49 deg</option>
                            <option>49 deg + 37 deg + 51 deg</option>
                            <option>51 deg + 37 deg + 49 deg</option>                        
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontalAffective1">
                        <Form.Label column sm={4}>Affective pain measurement 1</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAffective2">
                        <Form.Label column sm={4}>Affective pain measurement 2</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAffective3">
                        <Form.Label column sm={4}>Affective pain measurement 3</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <hr/>
                        <div><h5>Round 3 - Sensory pain measurements ( relative intensity ) </h5></div>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontathermal1">
                        <Form.Label column sm={4}>Thermal combination 3</Form.Label>
                        <Col sm={4}>
                        <Form.Control  as="select">
                            <option></option>
                            <option>37 deg + 49 deg + 51 deg</option>
                            <option>37 deg + 51 deg + 49 deg</option>
                            <option>49 deg + 37 deg + 51 deg</option>
                            <option>51 deg + 37 deg + 49 deg</option>                        
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontalSensor4">
                        <Form.Label column sm={4}>Sensory pain measurement 4</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSensor5">
                        <Form.Label column sm={4}>Sensory pain measurement 5</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalSensor6">
                        <Form.Label column sm={4}>Sensory pain measurement 6</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <hr/>
                        <div><h5>Round 4 - Affective pain measurements ( relative unpleasantness ) </h5></div>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontathermal4">
                        <Form.Label column sm={4}>Thermal combination 4</Form.Label>
                        <Col sm={4}>
                        <Form.Control  as="select">
                            <option></option>
                            <option>37 deg + 49 deg + 51 deg</option>
                            <option>37 deg + 51 deg + 49 deg</option>
                            <option>49 deg + 37 deg + 51 deg</option>
                            <option>51 deg + 37 deg + 49 deg</option>                        
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontalAffective4">
                        <Form.Label column sm={4}>Affective pain measurement 4</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAffective5">
                        <Form.Label column sm={4}>Affective pain measurement 5</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAffective6">
                        <Form.Label column sm={4}>Affective pain measurement 6</Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <hr/>
                    <div><h5>Adverse event information </h5></div>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontaAdverse">
                            <Form.Label column sm={4}>Redness or Swelling?</Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontaDisorientation">
                            <Form.Label column sm={4}>Disorientation ?</Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontaOther">
                            <Form.Label column sm={4}>
                              any physical or mental sensations ,
                              other than those related to the heat probe testing ,
                              that you experienced after receiving the drugs today ?
                            </Form.Label>
                            <Col sm={4}>
                            <Form.Control  as="select">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                            </Col>
                    </Form.Group>
                    <hr/>
                    <div><h5>Form status </h5></div>
                    <hr/>
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
                                <Button  className="buttonSave" variant="light">Save</Button>
                                <Button variant="light">Cancel</Button>
                            </Col>
                        </Form.Group>
                </Form>
            </div>
        )
    }
}

export default ThermalData;

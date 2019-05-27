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



function ListNames(props){
    const names = props.names;
    const listNames = names.map(() =>
    <ListNames key={names.id} value={names.text}/>
    );
    return(
        <ul>{listNames}</ul>
    )
}

class BaseLineVisit extends Component{

    state ={ 
            user_id: 0, baseline_date: "", 
             first_name: "", last_name: "", 
             date_of_birth: "", gender: "", 
             race: "", p_height: "", 
             p_weight: "", hair_color: "", 
             dominant_hand: "", smoker: "", 
             pregnant: "", drug_user: ""   
            }
    
    inputChangeHandlerUser = (event) => {
        event.preventDefault();
        this.setState({user_id: event.target.value})
    }
    inputChangeHandlerDate = (event) => {
        event.preventDefault();
        this.setState({baseline_date: event.target.value})
    }
    inputChangeHandlerFname = (event) => {
        event.preventDefault();
        this.setState({first_name: event.target.value})
    }
    inputChangeHandlerLname = (event) => {
        event.preventDefault();
        this.setState({last_name: event.target.value})
    }
    inputChangeHandlerDob = (event) => {
        event.preventDefault();
        this.setState({date_of_birth: event.target.value})
    }
    inputChangeHandlerGender = (event) => {
        event.preventDefault();
        this.setState({gender: event.target.value})
    }
    inputChangeHandlerRace = (event) => {
        event.preventDefault();
        this.setState({race: event.target.value})
    }
    inputChangeHandlerPHeight = (event) => {
        event.preventDefault();
        this.setState({p_height: event.target.value})
    }
    inputChangeHandlerPWeight = (event) => {
        event.preventDefault();
        this.setState({p_weight: event.target.value})
    }
    inputChangeHandlerHairColor = (event) => {
        event.preventDefault();
        this.setState({hair_color: event.target.value})
    }
    inputChangeHandlerHand = (event) => {
        event.preventDefault();
        this.setState({dominant_hand: event.target.value})
    }
    inputChangeHandlerSmoker = (event) => {
        event.preventDefault();
        this.setState({smoker: event.target.value})
    }
    inputChangeHandlerPregnant = (event) => {
        event.preventDefault();
        this.setState({pregnant: event.target.value})
    }
    inputChangeHandlerDrug = (event) => {
        event.preventDefault();
        this.setState({drug_user: event.target.value})
    }

    

    submitHandler = (event) => {
        fetch('http://localhost:1234/baseline/baseline-add', {
            method: 'POST',
            body: JSON.stringify({
                data: this.state.data
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .catch((error) => {
            if(error) return console.log('error', error)
        })
        console.log(this.state);
        history.push('/thermal/thermal-add')
        event.preventDefault();
        
    }
    
   


    render(){
        return(

        <div className="baseline-wrapper">
            <Breadcrumb className="breadcrumb-div">
                <Breadcrumb.Item 
                onClick={() => history.push('/home')}>Home</Breadcrumb.Item>
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
                <Form className="form" onSubmit={this.submitHandler}>
                    <Form.Group as={Row} controlId="formHorizontalId">
                        <Form.Label column sm={4}>Participant ID: </Form.Label>
                        <Col sm={2}>
                        <Form.Control  
                            type="text" 
                            placeholder="participant_id"
                            value={this.state.user_id}
                            onChange={this.inputChangeHandlerUser}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label column sm={4}>Baseline visit date <FontAwesomeIcon icon="calendar-alt"/></Form.Label>
                        <Col sm={4}>
                        <Form.Control 
                            type="date" 
                            placeholder="Visit Date"
                            value={this.state.baseline_date}
                            onChange={this.inputChangeHandlerDate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>Name</Form.Label>
                        <Col sm={4}>
                        <Form.Control  
                            type="text" 
                            placeholder="First Name"
                            value={this.state.first_name}
                            onChange={this.inputChangeHandlerFname} />
                        </Col>
                        <Col sm={4}>
                        <Form.Control
                            type="text" 
                            placeholder="Last Name" 
                            value={this.state.last_name}
                            onChange={this.inputChangeHandlerLname} />
                        </Col>
                    </Form.Group>
                    <hr/>
                    <div><h5>Demographics</h5></div>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontalDate">
                        <Form.Label column sm={4}>Date of Birth <FontAwesomeIcon icon="calendar-alt"/></Form.Label>
                        <Col sm={4}>
                        <Form.Control 
                            as="input" 
                            type="date" 
                            placeholder="Date of Birth"
                            value={this.state.date_of_birth}
                            onChange={this.inputChangeHandlerDob} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontaGender">
                        <Form.Label column sm={4}>Gender</Form.Label>
                        <Col sm={4}>
                        <Form.Control  
                            as="select"
                            type="text"
                            value={this.state.gender.option}
                            onChange={this.inputChangeHandlerGender} >
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
                        <Form.Control
                             type="text"
                             placeholder="kg"
                             value={this.state.p_weight}
                             onChange={this.inputChangeHandlerPWeight} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalHeight">
                        <Form.Label column sm={4}>Height</Form.Label>
                        <Col sm={4}>
                        <Form.Control 
                            type="text" 
                            placeholder="cm"
                            value={this.state.p_height}
                            onChange={this.inputChangeHandlerPHeight} />
                        </Col>
                    </Form.Group>
                    <hr/>
                    <div><h5>Confounding factor</h5></div>
                    <hr/>
                    <Form.Group as={Row} controlId="formHorizontaHair">
                        <Form.Label column sm={4}>Hair Color</Form.Label>
                        <Col sm={4}>
                        <Form.Control  
                            as="select"
                             >
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
                        <Form.Control  
                            as="select"
                             >
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

                    <hr/>
                    <div><h5>Exclusion Criteria</h5></div>
                    <hr/>

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

                    <hr/>
                    <div><h5>Form Status</h5></div>
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
          
                    <Form.Group as={Row} controlId="formHorizontaButton">
                        <Form.Label column sm={4}></Form.Label>
                        <Col sm={4}>
                            <Button 
                                
                                type="submit"
                                className="buttonSave"
                                variant="light" 
                            >
                                Save
                            </Button>
                            <Button
                                onClick={() => history.push('/home')}
                                variant="light">
                                Cancel
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
      )
    }
}
export default BaseLineVisit;
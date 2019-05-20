import React, { Component } from 'react';
import './CreatePage.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import history from '../router/history';
import HeaderComponent from '../component/HeaderComponent';

class CreatePage extends Component{
    state = {title: ""}

    changeTextData = field => event =>
    this.setState({data: {...this.state.data, [field]: event.target.value}})

    updateTitle = event => {
        this.setState({title: event.target.value})

    }

    goTo = (event) => {
        event.preventDefault();
        alert('Project Created! ')
        fetch('http://localhost:1234/create/create-project', {
            method: 'POST',
            body: JSON.stringify({
            title: this.state.title}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .catch((error) => {
            if(error) return console.log('error', error)
        })
        
        console.log(this.state);
        history.push('/baseline/baseline-add');
        

    }

    render(){
        

        function Content(props){
            return <div className="create-text">{props.text}</div>
        }

        const content = {
            text: 'You may begin the creation of a new CTxL project on your own by completing the form below and clicking the Create Project button at the bottom.'
        }

        return(
               <div className="create-master-div">
                    <HeaderComponent />
                   <div className="div-form-create">
                       <div >
                            <Content text={content.text}/>
                       </div>
                       <Form className="form-project-info">
                            <Form.Group as={Row} controlId="formGroupTitle">
                                <Form.Label column sm="4">
                                    Project Title:
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control 
                                    type="text" 
                                    value= {this.state.title}
                                    placeholder="Title" 
                                    onChange={this.updateTitle}/>
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
                            <Button variant="primary"
                             type="button" 
                             size="lg" 
                             className="button-sub" 
                             onClick={this.goTo}>
                                Submit
                            </Button>
                       </Form>
                   </div>
               </div>
        )
    }
}
export default CreatePage;
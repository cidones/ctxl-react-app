import React, { Component } from 'react';
import './CreatePage.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import history from '../router/history';
import HeaderComponent from '../component/HeaderComponent';
<<<<<<< HEAD

class CreatePage extends Component{
    state = {title: "", buttonClicked: false}
=======



class CreatePage extends Component{
    state = {title: '', buttonClicked: false}
>>>>>>> 4d7c6f5ff0aa210ee79155e4361044bdd642f81a

    changeTextData = field => event =>
    this.setState({data: {...this.state.data, [field]: event.target.value}})

    updateTitle = event => {
        this.setState({title: event.target.value})
<<<<<<< HEAD

    }

    goTo = (event) => {
        event.preventDefault();
        console.log(this.state)
        fetch('http://localhost:1234/baseline/create', {
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
        
        console.log(this.state.title);
        history.push('/baseline/add');
        

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        fetch('http://localhost:1234/baseline/create', {
            method: 'POST',
            body: JSON.stringify({
                id: 3,
                title: this.state.title
            }),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {return response.json()})
        .catch(error => {console.log('error', error)
        })
        console.log('message', this.fetch());
    }
=======
        
    }

    goTo = () => {
        this.setState({buttonClicked: true});
        history.push('/add');
        console.log('Title: ', this.state.title);

    }
    
>>>>>>> 4d7c6f5ff0aa210ee79155e4361044bdd642f81a
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
<<<<<<< HEAD
                       <Form className="form-project-info" onSubmit={this.handleSubmit} >
=======
                       <Form className="form-project-info" >
>>>>>>> 4d7c6f5ff0aa210ee79155e4361044bdd642f81a
                            <Form.Group as={Row} controlId="formGroupTitle">
                                <Form.Label column sm="4">
                                    Project Title:
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control 
                                    type="text" 
<<<<<<< HEAD
                                    value= {this.state.title}
                                    placeholder="Title" 
=======
                                    value={this.state.title}
                                    placeholder="Title"
>>>>>>> 4d7c6f5ff0aa210ee79155e4361044bdd642f81a
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
<<<<<<< HEAD
                            <Button variant="primary" type="submit" size="lg" className="button-sub" onClick={this.goTo}>
=======
                            <Button variant="primary" type="button" size="lg" className="button-sub" onClick={this.goTo}>
>>>>>>> 4d7c6f5ff0aa210ee79155e4361044bdd642f81a
                                Submit
                            </Button>
                       </Form>
                   </div>
               </div>
        )
    }
}
export default CreatePage;
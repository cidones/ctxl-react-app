import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/logo.png';


const homeContent = `CTxL is a secure, web-based application for building and managing online surveys and databases.
                   Using CTxL's stream-lined process for rapidly developing projects, you may create and design projects using 1) the online method from your web browser using the Online Designer; and/or 2) the offline method by constructing a 'data dictionary' template file in Microsoft Excel, which can be later uploaded into CTxL. 
                   Both surveys and databases (or a mixture of the two) can be built using these methods. CTxL provides automated export procedures for seamless data downloads to Excel and common statistical packages (SPSS, SAS, Stata, R), as well as a built-in project calendar, a scheduling module, ad hoc reporting tools, and advanced features, such as branching logic, file uploading, and calculated fields.`
class HomeContent extends Component {

    render(){
        return(
            <div className="fullwidth">
            <div className="banner">
                <img src={logo} className="page-logo" alt="logo" />
            </div>
            <Container className="container-wrapper" >
                <Row>
                    <Col sm={8}>
                    <div className="main-text-wrapper">
                        <h4 className="h4-home">Welcome to CTxL Case Report Form</h4>
                        <p>
                            {homeContent}
                        </p>   
                    </div>
                    </Col>
                    <Col sm={4}>
                        <div className="features-text-div">
                            <div>
                                <h4>CTxL features</h4>
                                <p><b>Build online surveys and databases quickly and securely</b> - Create and design your project rapidly using secure web authentication from your browser. No extra software is required.</p>
                                <p><b>Fast and flexible</b> - Conception to production-level survey/database in less than one day.</p>
                                <p><b>Export data to common data analysis packages</b> - Export your data to Microsoft Excel, PDF, SAS, Stata, R, or SPSS for analysis.</p>
                            </div>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </div>
        )
    }
}

export default HomeContent;
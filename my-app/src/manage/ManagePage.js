import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from 'react-bootstrap/Table';
import './ManagePage.css';
import HeaderComponent from '../component/HeaderComponent';

library.add(faEdit, faCheckSquare, faStopCircle)

const statusMap = {
    complete: 'check-square',
    development: 'edit',
    inactive: 'stop-circle'
}

class ManagePage extends Component{
    state = {
        icon: null
    }

    constructor() {
        super();

        const result = { status: 'complete'};

        this.state = {
            icon: statusMap[result.status]
        }
    }

    changeIcon = ({ target }) => this.setState({ icon: statusMap[target.value]})
 
    render(){
        const { icon } = this.state;

        const manageContent = <div>
                                    Listed below are the CTxL projects to which you currently have access. Click the project title to open the project.
                                    Newly created projects begin in <b>Development status</b> <FontAwesomeIcon icon="edit"/> as you begin to build and design them.
                                    When you are ready to begin entering real data in the project, you may move it to <b>Production status</b> <FontAwesomeIcon icon="check-square"/> to designate the project as officially collecting data. When you are finished collecting data or if you wish to stop collection,  
                                    the project may be set to <b>Inactive status </b> <FontAwesomeIcon icon="stop-circle"/>, although it may be brought back to Production status at any time when you are ready to begin collecting data again.
                              </div>
    return(
        <div className="managePageStyle">
            <HeaderComponent/>
            <input onChange={this.changeIcon}/>
            <div className="manage-text-div">    
                {manageContent}
            </div>
            <div className="table-div">
                <Table responsive bordered hover  size="sm">
                    <thead>
                        <tr>
                            <th>Project Title</th>
                            <th>Records</th>
                            <th>Fields</th>     
                            <th>Instruments</th>
                            <th>Status</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Marinol vs Morphine</td>
                            <td>1</td>
                            <td>35</td>
                            <td>Pain measurement</td>
                            <td> <FontAwesomeIcon icon={icon}/></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        )
    }
}

export default ManagePage;
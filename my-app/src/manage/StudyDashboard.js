import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './studyDashboard.css';
import circle_green from '../assets/circle_green.png';
import circle_red from '../assets/circle_red.gif';
import Table from 'react-bootstrap/Table';
import AddEdit from './addEditPage';




class StudyDashboard extends Component{
    render(){
        const contentDash = `Displayed below is a table listing all existing records/responses and their status for every data collection instrument (and if longitudinal, for every event).
        You may click any of the colored buttons in the table to open a new tab/window in your browser to view that record on that particular data collection instrument.
        Please note that if your form-level user privileges are restricted for certain data collection instruments, you will only be able to view those instruments,
        and if you belong to a Data Access Group, you will only be able to view records that belong to your group.`


        return(
            <div className="wrapper1">
                <Tabs defaultActiveKey="Dashboard" id="tab-study-page">
                    <Tab eventKey="Dashboard" title="Dashboard">
                        <h4>Name of the study(props)</h4>
                        <div className="dashboard-wrapper">
                            <div className="text-div-content">{contentDash}</div>
                            <div className="legend-box-status">
                                <div><img src={circle_green} className="status-pic" alt="circle_green" /> Complete</div>
                            
                                <div><img src={circle_red} className="status-pic" alt="circle_red" /> Incomplete</div>
                            </div>
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Person identifier</th>
                                    <th>Demographics(baseline visit)</th>
                                    <th>Thermal data(visit 1)</th>
                                    <th>Thermal data(visit 2)</th>
                                    <th>Thermal data(visit 3)</th>
                                    <th>Thermal data(visit 4)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ParticipantID</td>
                                    <td>Image</td>
                                    <td>Image</td>
                                    <td>Image</td>
                                    <td>Image</td>
                                    <td>Image</td>
                                </tr>
                            </tbody>
                        
                        </Table> 
                        
                     </Tab>
                     <Tab eventKey="add" title="Add/Edit Records"><AddEdit /> </Tab>
                 </Tabs>
             </div>
         )
     }
}
export default StudyDashboard;


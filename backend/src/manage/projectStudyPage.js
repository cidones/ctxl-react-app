import React, { Component } from 'react';
import logo from '../assets/logo.png';
import './ProjectStudyPage.css';
import StudyDashboard from './StudyDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';


library.add(faHome, faProjectDiagram, faTasks, faUserLock, faSignOutAlt, faFileExport, faFileExcel, faClipboardList)


class ProjectStudy extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="menu-div">
                    <div className="logo-div">
                        <img src={logo} className="page-logo" alt="logo" />
                    </div>
                    <hr/>
                    <div className="login-session-div">
                        <FontAwesomeIcon icon="home" /> cids82@gmail.com<br/>
                        <div><FontAwesomeIcon icon="sign-out-alt" /> log out</div>
                    </div>
                    <div className="menu-div-option">
                        <div><FontAwesomeIcon icon="home" /> Project Home</div>
                        <div><FontAwesomeIcon icon="project-diagram" /> Manage my projects</div>
                        <br/>
                        <div><h5>Application</h5></div>
                        <div><FontAwesomeIcon icon="file-excel" /> Data Export</div>
                        <div><FontAwesomeIcon icon="clipboard-list" /> Logging</div>
                    </div>
                    <hr/>
                </div>
                <div className="project-info-div"> <StudyDashboard/> </div>
            </div>
        )
    }
}
export default ProjectStudy;
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import history from '../router/history';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../home/HomePage';
import CreatePage from '../create/CreatePage';
import ManagePage from '../manage/ManagePage';
import NotFoundComponent from '../component/NotfoundComponent';
import Navegation from '../router/Navegation';
import AddEdit from '../manage/AddEditPage';
import Baseline from '../create/baseline/BaseLine';
import ThermalData from '../create/thermal/ThermalData';


class  HeaderComponent extends React.Component {
    
    render(){
        return(
             <div className="header-div">
                <Nav className="nav-div justify-content-center" variant="pills" >
                    <Nav.Item>
                        <Nav.Link onClick={ () => history.push('/home')} >Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  onClick={ () => history.push('/create')} >Create new project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={ () => history.push('/manage')} >Manage my projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={ () => history.push('/help')} >Help</Nav.Link>
                    </Nav.Item>
                </Nav>
                    <Switch>
                            <Route exact path='/home' component={HomePage} />
                            <Route component={Navegation}>
                            <Route exact path='/create' component={CreatePage}/>
                            <Route path='/create/add' component={AddEdit}/>
                            <Route path='/baseline' component={Baseline} />
                            <Route path ='/thermal' component={ThermalData}/>
                            <Route exact path='/manage' component={ManagePage} />                
                            </Route>  
                        <Route  component={NotFoundComponent} />
                    </Switch>   
             </div> 
            
        )
    }
}
export default HeaderComponent;
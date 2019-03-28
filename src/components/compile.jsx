import React, {Component} from 'react';
import Main from './main';
import LogIn from './login';

import Profile from './profile';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {navLink,links, textDecor, border} from './styles/nav-bar-styles';
export default class Compile extends Component{
    constructor(){
        super();
        this.state = {
            element: this.getElem()
        }
    }

    getElem(){
        if (!localStorage.key(0)){
            return<li className={'nav-item'}><Link to={'/login'} className={'nav-link'}>Log in</Link></li>;
        }
    }
    render(){
        return(
            <Router>
                <div>
                    <nav className="nav navbar navbar-light bg-light navbar-expand-lg " style={border}>
                        <ul className="mr-auto navbar-nav">
                            <li className={'nav-item'}><Link to={''} className={'nav-link'} style={navLink}>Main</Link></li>
                            <li className={'nav-item'}><Link to={'/profile'} className={'nav-link'}>Profile</Link></li>
                            {this.state.element}
                        </ul>
                    </nav>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/login" component={LogIn}></Route>
                    <Route path="/profile" component={Profile}></Route>
                </div>

            </Router>

        );
    }
}

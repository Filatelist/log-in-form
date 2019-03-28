import React, {Component} from 'react';
import avatar from './images/profile.png';
import Prof from './profile-handle';
import {back, list, white} from './styles/nav-bar-styles';
import {BrowserRouter as Router, Route} from "react-router-dom";
import LogIn from "./login";

export default class Profile extends Component{

    constructor(){
        super();
        this.state = {
            elem: ''
        }
    }
    componentDidMount() {
        if (!localStorage.key(0)){
            window.location.replace('http://localhost:3000/login')
        }else this.setState({elem:
                <Prof></Prof>})
    }
    render(){
        return(
            <Router>
                <div>
                    {this.state.elem}
                </div>
            </Router>
        );
    }
}

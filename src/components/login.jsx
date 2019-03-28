import React, {Component} from 'react';
import {text, formStyle, top} from './styles/nav-bar-styles';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Profile from './profile';

export default class LogIn extends Component{
    constructor(){
        super();
        this.state={
            user: '',
            pass: ''
        }
    };
    onChangeHandler = event => {
        this.setState({user:event.target.value});
    }
    onChangeHandler2 = event =>{
        this.setState({pass:event.target.value});
    }
    clickHandler = () => {
        localStorage.setItem(this.state.user, this.state.password);
        window.reload();
    };
    render(){
        return(
            <Router>
                <div className={'container'} style={top}>
                    <div className={'row justify-content-center align-items-center'}>
                        <div style={formStyle} className={'shadow-sm bg-light'}>
                            <form action="submit">
                                <p style={text}>Username</p>
                                <input style={{width:'100%'}} className={'user'} value={this.state.user} onChange={this.onChangeHandler} type="text"/>
                                <p style={text}>password</p>
                                <input type="password" className={'pass'} value={this.state.pass} onChange={this.onChangeHandler2} style={{width:'100%'}}/>
                                <a href="" style={text}>Forgot the password?</a>
                                <Link className={'btn btn-default butt'} onClick={this.clickHandler} to="/profile">Submit</Link>
                            </form>
                        </div>
                    </div>

                    <Route exact path={'/profile'} component={Profile}></Route>
                </div>
            </Router>

        );
    }
}

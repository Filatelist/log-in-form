import React, {Component} from 'react';
import {back, backing, list,text, border} from "./styles/nav-bar-styles";
import avatar from './images/avatar.jpg';

export default class Toggler extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            avatar: avatar
        }
    }
    componentDidMount() {
        this.setState({username:localStorage.key(0)});
    }
    render(){
        return(
            <div className="col-3" style={border}>
            <div className={'d-flex'} style={back}><span>
                <img src={this.state.avatar} style={backing} alt="avatar" width={150} height={100}/></span>
                <ul><li className={'nav-item'} style={list}>{this.state.username}</li>
                    <li style={list}><p style={text}>@{this.state.username}</p></li></ul>
            </div>
            <div className={''}>
                <ul className={''}>
                    <li className={'nav-item'} style={list}><a href="">settings</a></li>
                    <li className={'nav-item'} style={list}><a href="">Other</a></li>
                    <li className={'nav-item'} style={list}><a href="" onClick={()=>{localStorage.clear()}}>Exit</a></li>
                </ul>
            </div>
        </div>);
    }
}

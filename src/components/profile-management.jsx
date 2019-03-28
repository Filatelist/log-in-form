import React, {Component} from 'react';
import avatar from './images/avatar.jpg';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {links, hrefDecoration,backing, border, back, list} from './styles/nav-bar-styles'
import toggle from './scripts/animation-scripts';

export default class Management extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            avatart:avatar,
            display:'none'
        }
    }
    componentDidMount() {
        if (localStorage.key(0)){
            this.setState({username:localStorage.getItem('user'), display:''})
        }
    }

    render(){
        return(
                <div className={'bg-light d-'+this.state.display} style={border}>
                    <div className={'rounded'}>
                        <div  style={back}><img src={avatar} style={backing} alt="avatar" width={100}/></div></div>
                    <ul className={'mr-auto'}>
                        <li className={'nav-item'}><Link to={'/profile'} style={hrefDecoration} style={list}>To profile</Link></li>
                        <li className={'nav-item'} style={hrefDecoration} style={list}>Other</li>
                        <li className={'nav-item'} style={hrefDecoration} style={list}><a href="" onClick={toggle}>Exit</a></li>
                    </ul>
                </div>
        );
    }
}

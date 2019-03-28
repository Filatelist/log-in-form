import React, {Component} from 'react';
import {back, list, backing, border} from "./styles/nav-bar-styles";
import avatar from './images/avatar.jpg';
import Toggler from './toogler';
export default class Prof extends Component {
    constructor(){
        super();

    }

    render(){
        return(<div className="container-fluid handle" style={border}>
            <div className="row bg-light">
                <Toggler></Toggler>
                <div className="col-9">
                    <div className="jumbotron mt-3">
                        <h1>Bottom Navbar example</h1>
                        <p className="lead">This example is a quick exercise to illustrate how the bottom navbar
                            works.</p>
                        <a className="btn btn-lg btn-primary" href="/docs/4.3/components/navbar/" role="button">View
                            navbar docs »</a>
                    </div>
                    <div className="jumbotron mt-3">
                        <h1>Bottom Navbar example</h1>
                        <p className="lead">This example is a quick exercise to illustrate how the bottom navbar
                            works.</p>
                        <a className="btn btn-lg btn-primary" href="/docs/4.3/components/navbar/" role="button">View
                            navbar docs »</a>
                    </div>
                    <div className="jumbotron mt-3">
                        <h1>Bottom Navbar example</h1>
                        <p className="lead">This example is a quick exercise to illustrate how the bottom navbar
                            works.</p>
                        <a className="btn btn-lg btn-primary" href="/docs/4.3/components/navbar/" role="button">View
                            navbar docs »</a>
                    </div>
                    <div className="jumbotron mt-3">
                        <h1>Bottom Navbar example</h1>
                        <p className="lead">This example is a quick exercise to illustrate how the bottom navbar
                            works.</p>
                        <a className="btn btn-lg btn-primary" href="/docs/4.3/components/navbar/" role="button">View
                            navbar docs »</a>
                    </div>
                </div>
            </div>
        </div>);
    }
}

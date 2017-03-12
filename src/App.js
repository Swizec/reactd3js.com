import React, { Component } from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './css/bootstrap-override.css';
import './css/bootstrap-custom-utils.css';
import './css/salesbury-lilac.css';
//import './css/salesbury-bg-grid_light_wool.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;

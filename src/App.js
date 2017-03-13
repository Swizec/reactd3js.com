import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './css/bootstrap-override.css';
import './css/bootstrap-custom-utils.css';
import './css/salesbury-lilac.css';
import './css/custom.css';
//import './css/salesbury-bg-grid_light_wool.css';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

import * as Content from './Content';
import { TestimonialsCarousel } from './Testimonials';
import { LowSection } from './Section';


class App extends Component {
    render() {
        return (
            <div>
                <div className="bg-white-dark padding-small-top" />

                <Content.Header />

                <LowSection>
                    <TestimonialsCarousel keynames={['michel', 'patrick', 'ulterior',
                                                     'bjorg2', 'myusef',
                                                     'd3noob']} />
                </LowSection>
            </div>
        );
    }
}

export default App;

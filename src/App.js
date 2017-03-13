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
import Section, { LowSection } from './Section';
import { HalfColumn } from './Columns';


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

                <LowSection>
                    <HalfColumn>
                        <h2 className="text-center">The book</h2>
                        <p className="lead">
                            Learn at your own pace, <b>build cool things</b>, discover the beauty behind <b>declarative data visualization</b> and <b>fun web toys</b>.
                        </p>
                        <p>
                            <a href="https://swizec.com/reactd3js/">
                                <img src="img/book.png" title="React+D3v4 book"/>
                            </a>
                        </p>
                    </HalfColumn>

                    <HalfColumn>
                        <h2 className="text-center">The workshop</h2>
                        <p className="lead">
                            Learn <b>in person</b> with a <b>group of peers</b>, get <b>detailed walkthroughs</b> for several fun projects, <b>ask anything</b>. We help you solve your specific problem.
                        </p>

                        <p>&nbsp;</p>

                        <h3>Next workshop: March 25th in San Francisco</h3>

                        <p>
                            <a href="https://www.eventbrite.com/e/javascript-workshop-reactd3v4-tickets-32708332503">
                                <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F29174463%2F445634759%2F1%2Foriginal.jpg?w=800&rect=59%2C0%2C1340%2C670&s=0c085262fc7fcda49bd88caca3a3d540" title="React+D3v4 workshop in San Francisco" style={{width: '100%'}} />
                            </a>
                        </p>

                        <p className="text-center"><a href="https://www.eventbrite.com/e/javascript-workshop-reactd3v4-tickets-32708332503" className="btn btn-success btn-lg">Get Tickets  👉 </a></p>
                    </HalfColumn>
                </LowSection>
            </div>
        );
    }
}

export default App;

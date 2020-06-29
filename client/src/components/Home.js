import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="homeHeader">
                    <div className="Title">
                        <h1>Providence Transport</h1>
                    </div>
                    <div className="locater">
                        <input type="text" placeholder="Enter Location"/>
                        <button>Submit</button>
                    </div>
                </div>
                <div className="About">
                    <h3>About Us</h3>
                    <p>Providence lets you manage routes for trucks, buses, delivery vehicles, and more. Instead of manually calling drivers to see where they are, Providence lets you instantly track vehicle location, route progress, and late or missed stops.</p>
                    <p>Let customers and outside stakeholders track route progress and receive alerts automatically. Authorized users can anticipate arrivals or delays, which improves customer service, reduces calls, and can become a differentiator for your business.</p>
                    <p>Adapt on the go by remotely re-routing vehicles and sending messages to drivers through the Providence Driver app.</p>
                </div>
                <div className="homeBody">
                    <div className="homeImg">
                        <div className="truckImg">
                            <a href="#">
                                <img src="/Truck2.jpg" alt="Truck" width="450" height="300" />
                                <div className="truckText"><h4>Find a Truck</h4></div>
                            </a>
                        </div>
                        <div className="freightImg">
                        <a href="#">
                            <img src="/freight3.jpg" alt="Truck" width="450" height="300" />
                            <div className="freightText"><h4>Find a Load</h4></div>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="homeFooter">
                    <div><p>Page created by Clayborn Guess</p></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

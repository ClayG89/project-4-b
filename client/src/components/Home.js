import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="homeHeader">
                    <div className="Title">
                        <h1>Providence Transport</h1>
                    </div>
                    <div className="locater">
                        <input type="text" />
                        <button>Submit</button>
                    </div>
                </div>
                <div className="homeBody">
                    <div className="About">
                        <h3>About Us</h3>
                    </div>
                    <div className="Homeimg">
                        <img src="https://via.placeholder.com/300 x 150" alt="Truck" />
                        <img src="https://via.placeholder.com/300 x 150" alt="Freight" />
                    </div>
                </div>
                <div className="homeFooter"></div>       
            </div>
        )
    }
}

import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <label className="section-header">1. General Info</label>
                <br></br>
                <input type="text" placeholder="Name *" className="name-input" required></input>
                <br></br>
                <input type="email" placeholder="E-Mail *" required></input>
                <br></br>
                <input type="tel" placeholder="Phone Number *" required></input>
            </div>
        );
    };
}

export default General;
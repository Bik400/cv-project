import React, { Component } from "react";

class General extends Component {

    render() {
        return (
            <div className="container">
                <label className="section-header">1. General Info</label>
                <br></br>
                <input type="text" placeholder="Name *" className="name-input" onChange={this.props.handleName} value={this.props.generalInfo.name} required></input>
                <br></br>
                <input type="email" placeholder="E-Mail *" onChange={this.props.handleEmail} value={this.props.generalInfo.email} required></input>
                <br></br>
                <input type="tel" placeholder="Phone Number *" onChange={this.props.handlePhone} value={this.props.generalInfo.phone} required></input>
            </div>
        );
    };
}

export default General;
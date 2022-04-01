import React, {Component} from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container">
                <label className="section-header">2. Education</label>
                <br></br>
                <input type="text" placeholder="School Name"></input>
                <br></br>
                <input type="text" placeholder="Major"></input>
                <br></br>
                <input type="text" placeholder="Graduation Date"></input>
            </div>
        )
    };
}

export default Education;
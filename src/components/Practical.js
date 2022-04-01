import React, {Component} from "react";

class Practical extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container">
                <label className="section-header">3. Work</label>
                <br></br>
                <input type="text" placeholder="Company Name" className="company-name"></input>
                <br></br>
                <input type="text" placeholder="Position Title"></input>
                <br></br>
                <textarea placeholder="List the main tasks of the job"></textarea>
                <br></br>
                <label className="work-label">Work Date: </label>
                <br></br>
                <input type="text" placeholder="Start date"></input>
                <input type="text" placeholder="End date"></input>
            </div>
        );
    };
}

export default Practical;
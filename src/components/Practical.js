import React, {Component} from "react";

class Practical extends Component {

    render() {
        return (
            <div className="container">
                <label className="section-header">3. Work</label>
                <br></br>
                <input type="text" placeholder="Company Name" className="company-name" value={this.props.workInfo.company} onChange={this.props.handleCompany}></input>
                <br></br>
                <input type="text" placeholder="Position Title" value={this.props.workInfo.position} onChange={this.props.handlePosition}></input>
                <br></br>
                <textarea placeholder="List the main tasks of the job" value={this.props.workInfo.tasks} onChange={this.props.handleTasks}></textarea>
                <br></br>
                <label className="work-label">Work Date: </label>
                <br></br>
                <input type="text" placeholder="Start date" value={this.props.workInfo.startDate} onChange={this.props.handleStartDate}></input>
                <input type="text" placeholder="End date" value={this.props.workInfo.endDate} onChange={this.props.handleEndDate}></input>
            </div>
        );
    };
}

export default Practical;
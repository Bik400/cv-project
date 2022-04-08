import React, {Component} from "react";


class Education extends Component { 
    render() {
        return (
            <div className="container">
                <label className="section-header">2. Education</label>
                <br></br>
                <input type="text" placeholder="School Name" value={this.props.educationInfo.school} onChange={this.props.handleSchool}></input>
                <br></br>
                <input type="text" placeholder="Major" value={this.props.educationInfo.major} onChange={this.props.handleMajor}></input>
                <br></br>
                <input type="text" placeholder="Add Coursework" className="coursework-input" onChange={this.props.handleCoursework}></input>
                <br></br>
                <input type="text" placeholder="Graduation Date" value={this.props.educationInfo.graduation} onChange={this.props.handleGraduation}></input>
            </div>
        )
    };
}

export default Education;
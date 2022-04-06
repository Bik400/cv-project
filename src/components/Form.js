import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div>
                <div className="resume-container">
                    <div className="general-info-container">
                    <h1 className="form-name">{this.props.generalInfo.name}</h1>
                    <div className="phone-email">
                        <h3>{this.props.generalInfo.email}</h3>
                        <h3>{this.props.generalInfo.phone}</h3>
                    </div>
                    </div>
                    <div className="education-container">
                    <div className="school-info">
                        <h2>{this.props.educationInfo.school}</h2>
                        <h3>{this.props.educationInfo.graduation}</h3>  
                    </div>
                        <h3 className="major">{this.props.educationInfo.major}</h3>
                    </div>
                    <div className="work-container">
                    <div className="company-info">
                        <div className="company-position">
                    <h1>{this.props.workInfo.company}</h1>
                    <h2>{this.props.workInfo.position}</h2>
                    </div>
                    <div className="work-date">
                    <h3>{this.props.workInfo.startDate} -</h3>                 
                    <h3>- {this.props.workInfo.endDate}</h3>
                    </div>
                </div>
                <p className="tasks">{this.props.workInfo.tasks}</p>
                </div>
            </div> 
            <button onClick={this.props.onBtnClick}>Edit</button>
            </div>
            
        )
    }
}

export default Form;
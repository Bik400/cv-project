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
                        <h3 className="relevant-coursework">Relevant Coursework</h3>
                        <ul className="coursework">
                            <li>{this.props.educationInfo.coursework}</li>
                        </ul>
                      </div>
                    <div className="work-container">
                      <div className="company-info">
                        <h1 className="company-name">{this.props.workInfo.company}</h1>
                        <h2 className="company-position">{this.props.workInfo.position}</h2>
                      <div className="work-date">
                      <h3>{this.props.workInfo.startDate} -</h3>                 
                      <h3>- {this.props.workInfo.endDate}</h3>
                    </div>
                </div>
                <div className="tasks-container">
                  <h3>Tasks: </h3>
                  <p className="tasks">{this.props.workInfo.tasks}</p>
                </div>
                </div>
            </div> 
            <button onClick={this.props.onBtnClick} className="edit-btn">Edit</button>
            </div>
            
        )
    }
}

export default Form;
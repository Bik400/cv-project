import React, { Component } from "react";
import General from "./components/General";
import Practical from "./components/Practical";
import Education from "./components/Education";
import "./styles/styles.css"; 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "",
        email: "",
        phone: ""
      },
      education: {
        school: "",
        major: "",
        graduation: ""
      },
      work: {
        company: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: ""
      },
      edit: true
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleGraduationChange = this.handleGraduationChange.bind(this);

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleTasksChange = this.handleTasksChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  };

  handleNameChange(e) {
    var general = {...this.state.general};
    this.setState({
      general: {
        name: e.target.value,
        email: general.email,
        phone: general.phone
      }
    });
  };

  handleEmailChange(e) {
    var general = {...this.state.general};
    this.setState( {
      general: {
        name: general.name,
        email: e.target.value,
        phone: general.phone
      }
    });
  };

  handlePhoneChange(e) {
    var general = {...this.state.general};
    this.setState({
      general: {
        name: general.name,
        email: general.email,
        phone: e.target.value
      }
    });
  };

  handleSchoolChange(e) {
    var education = {...this.state.education};
    this.setState({
      education: {
        school: e.target.value,
        major: education.major,
        graduation: education.graduation
      }
    })
  };

  handleMajorChange(e) {
    var education = {...this.state.education};
    this.setState({
      education: {
        school: education.school,
        major: e.target.value,
        graduation: education.graduation
      }
    })
  };

  handleGraduationChange(e) {
    var education = {...this.state.education};
    this.setState({
      education: {
        school: education.school,
        major: education.major,
        graduation: e.target.value
      }
    })
  };

  handleCompanyChange(e) {
    var work = {...this.state.work};
    this.setState({
      work: {
        company: e.target.value,
        position: work.position,
        tasks: work.tasks,
        startDate: work.startDate,
        endDate: work.endDate
      }
    })
  };

  handlePositionChange(e) {
    var work = {...this.state.work};
    this.setState({
      work: {
        company: work.company,
        position: e.target.value,
        tasks: work.tasks,
        startDate: work.startDate,
        endDate: work.endDate
      }
    })
  };

  handleTasksChange(e) {
    var work = {...this.state.work};
    this.setState({
      work: {
        company: work.company,
        position: work.position,
        tasks: e.target.value,
        startDate: work.startDate,
        endDate: work.endDate
      }
    })
  };

  handleStartDateChange(e) {
    var work = {...this.state.work};
    this.setState({
      work: {
       company: work.company,
        position: work.position,
        tasks: work.tasks,
        startDate: e.target.value,
        endDate: work.endDate
      }
    })
  }

  handleEndDateChange(e) {
    var work = {...this.state.work};
    this.setState({
      work: {
        company: work.company,
        position: work.position,
        tasks: work.tasks,
        startDate: work.startDate,
        endDate: e.target.value
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("the submit button was pressed");
    this.setState({
      edit: false
    });
  };

  handleEdit() {
    this.setState({
      edit: true
    });
  };

  render() {
    if (this.state.edit) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <General generalInfo={this.state.general} handleName={this.handleNameChange}  handleEmail={this.handleEmailChange} handlePhone={this.handlePhoneChange}/>
            <Education educationInfo={this.state.education} handleSchool={this.handleSchoolChange} handleMajor={this.handleMajorChange} handleGraduation={this.handleGraduationChange}/>
            <Practical workInfo={this.state.work} handleCompany={this.handleCompanyChange} handlePosition={this.handlePositionChange} handleTasks={this.handleTasksChange} handleStartDate={this.handleStartDateChange} handleEndDate={this.handleEndDateChange}/>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h1>The form was submitted</h1>
          <button onClick={this.handleEdit}>Edit</button>
        </div>

      )
    }
  }
}

export default App;

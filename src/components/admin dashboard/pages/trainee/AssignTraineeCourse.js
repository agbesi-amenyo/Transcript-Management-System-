import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action";


class AssignTraineeCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.trainees[0]._id,
        trainee:this.props.trainees[0],
        course:this.props.courses[0],
      }
  }


  
   handleValueChange=(e)=>{
     const fieldName=e.target.name;
     console.log(e.target.name);
     switch(fieldName){
       case "trainee_name":
         this.setState({trainee:e.target.value})
         break;
       case "course":
          this.setState({course:e.target.value})
          break;
     }
   }


   handleSave=(e)=>{
      e.preventDefault()
      let newAssign={
        id: this.state.id,
        trainee:this.state.trainee,
        course:this.state.course,
      }
      this.props.assignCourse(newAssign);
      setTimeout(()=>{window.location.reload()}, 1000)
      
   }
  render() {
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
            <label className="form-label">Trainee Name</label>
            <select name="trainee_name" className="form-control">
              {this.props.trainees.map(trainee =>{
                return(
                  <option>{trainee.firstname +" "+ trainee.lastname}</option>
                )
              })}
            </select>
          </Col>
          <Col>
            <label className="form-label">Course</label>
            <select name="course" className="form-control">
            {this.props.courses.map(course => {
              return(
                <option>{course.course_name}</option>
              )
            })}
            </select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <label className="form-label">Course Code</label>
            <input
              className="form-control"
              type="text"
              value="001"
              disabled
              placeholder="Course Code"
            />
          </Col>
          {/* <Col>
            <div>
              <label className="form-label">Track</label>
              <select className="form-control">
              {this.props.tracks.map(track=>{
                return(
                  <option>{track.track_name}</option>
                )
              })}
              </select>
            </div>
          </Col> */}
        </Row>
        <Button variant="secondary" onClick={this.props.closeButton}>
              Close
            </Button>
        <Button variant="primary" onClick={this.handleSave}>
              Assign Course  
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.allTrainees.loading,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrainees: () => dispatch(actionCreator.fetchTrainees()),
    delTrainee: (id) => dispatch(actionCreator.delTrainee(id)),
    fetchCourses: () => dispatch(actionCreator.fetchCourses()),
    fetchTracks: ()=> dispatch(actionCreator.fetchTracks()),
    assignCourse: (newAssign) => dispatch(actionCreator.AssignCourse(newAssign)),
    assignTrack: () => dispatch(actionCreator.AssignTrack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignTraineeCourse);


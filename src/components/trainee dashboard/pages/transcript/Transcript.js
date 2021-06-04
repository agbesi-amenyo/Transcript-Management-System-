import React, { Component } from "react";
import Pagination from "../../pagination/Pagination";
import "../courses/Course.css";

class transcript extends Component {
  render() {
    return (
      <div class="container p-5">
        <div class="row ">
          <div class="col">
            <label >Trainee Name</label>:<span class="ms-3">Victor Aremu</span>
          </div>
          <div class="col">
          <label>Trainee ID</label>:<span class="ms-3">TKB3-001</span>
          </div>
          <div class="col">
            <label>Date</label>:<span class="ms-3">2021-06-03</span>
          </div>
        </div>

        <div className="row mt-3">
          <div class="col">
           <label>Batch</label>:<span class="ms-3">Batch 3</span>
          </div>
          <div class="col">
          <label>Track</label>:<span class="ms-3">Media & Design</span>
          </div>
          <div className="col">
           <label>Gender</label>:<span className="ms-3">Male</span>
          </div>
        </div>

        <div class="row mt-3">

            <button class="w-auto btn btn-success">Print</button>
        
        </div>
        <hr />
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Course Title</th>
              <th>Course Code</th>
              <th>Date Enrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr ><td className="text-center" colspan="4">No Records Available</td></tr>
          </tbody>
        </table>
        <Pagination/>
      </div>

    );
  }
}

export default transcript;

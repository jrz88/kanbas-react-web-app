import React, { useState } from "react";

import { Link } from "react-router-dom";
import * as db from "../Database";
export default function Dashboard(
    {courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
    
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            <h5>
        New Course
        <button className="btn btn-primary float-end"
                onClick={addNewCourse} id="wd-add-new-course-click">
          Add
        </button>
        <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
            <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />


            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                                <div className="card rounded-3 overflow-hidden">
                                    <img src={`/images/${course.imgName}`} height="{160}" />
                                    <div className="card-body">

                                        <span className="wd-dashboard-course-link"
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                                            {course.name}
                                        </span>

                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>


                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                                    
                                        <button onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                                id="wd-delete-course-click">
                                Delete
                            </button>

                            <button id="wd-edit-course-click"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}
                                className="btn btn-warning me-2 float-end" >
                                Edit
                            </button>

                                    </div>
                                </div>
                            </Link>

        


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



/*
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">


                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/cloudcomputing.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/6620/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS6620 Cloud Computing
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Cloud Computing
                                </p>
                                <a href="#/Kanbas/Courses/6620/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>




                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/datastructures.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/5008/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5008 Data Structures
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Data Structures & Algorithms
                                </p>
                                <a href="#/Kanbas/Courses/5008/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/discretestructures.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/5002/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002 Discrete Structures
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Discrete Structures & Math
                                </p>
                                <a href="#/Kanbas/Courses/5002/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>



                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/mobileappdev.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/6900/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS6900 Mobile App Dev
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Mobile App Development
                                </p>
                                <a href="#/Kanbas/Courses/6900/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/ood.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/5004/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5004 OOD
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Objected-Oriented Design
                                </p>
                                <a href="#/Kanbas/Courses/5004/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/webdev.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/5610/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5610 Web Dev
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Website development
                                </p>
                                <a href="#/Kanbas/Courses/5610/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>

                    </div>

                 

                </div>
            </div>
        </div>
    );
}
*/
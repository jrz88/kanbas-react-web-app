import { FaSearch } from "react-icons/fa";
import GradesButtons from "./GradesButtons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import "./table.css";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Grades() {
    const{cid} = useParams();
    const{aid} = useParams();
    const assignments = db.assignments.filter((assignment)=> assignment.course === cid);
    const enrolledIDs = db.enrollments
        .filter((enrollment)=> enrollment.course === cid)
        .map((enrollment)=> enrollment.user);
    const students = db.users.filter((user)=>user.role === "STUDENT");
    const grades = db.grades;

    return (
        <div id="wd-grades">
            <GradesButtons /><br /><br /><br /> <br />
            <div className="row mb-3">
                <div className="col mb-4">
                    <label className="form-label fw-bold">
                        Student Names</label>
                    <div className="input-group">
                        <a className="input-group-text"> <FaSearch/></a>
                        <input type="text" className="form-control" id="wd-search-student-name" placeholder="Search Students" />
                        <a className="input-group-text"><MdOutlineKeyboardArrowDown/> </a></div></div>
                <div className="col mb-3"><label className="form-label fw-bold">
                    Assignment Names</label>
                    <div className="input-group">
                        <a className="input-group-text"><FaSearch/> </a>
                        <input className="form-control" placeholder="Search Assignments" />
                        <a className="input-group-text"> <MdOutlineKeyboardArrowDown/> </a></div>
                </div> </div>
            <a><button className="btn btn-secondary float-start "><FiFilter className="me-1" />
                Apply Filters </button> </a> <br /><br />
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {assignments.map((assignment) => (
                                <th>{assignment.title}<br />{`Out of ${assignment.points}`}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {enrolledIDs.map((enrolledID)=> {
                        let student = students.find((student)=>student._id===enrolledID);
                        let studentID = student&&student._id? student._id : '';
                       
                        return (
                            <tr>
                                <td>{student ? `${student.firstName} ${student.lastName}` : 'NOT FOUND'}</td>
                                {assignments.map((assignment) =>{
                                    let gradeObj = grades.find((grade)=>grade.assignment===assignment._id && grade.student === studentID);
                                    return (
                                        <td><input type="text" value={`${gradeObj? gradeObj.grade : 'N/A'}`}/></td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div></div>
    );
}
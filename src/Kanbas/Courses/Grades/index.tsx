import { FaSearch } from "react-icons/fa";
import GradesButtons from "./GradesButtons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import "./table.css";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Grades() {
    const { cid } = useParams();
    const students = db.users.filter(user => user.role === "STUDENT");
    const courseGrade = db.grades;
    const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);
    const enrolledStudents = db.enrollments.filter(enrollment => enrollment.course === cid).map(enrollment => enrollment.user);
    return (
        <div id="wd-grades">
            <GradesButtons /><br /><br /><br /> <br />
            <div className="row mb-3">
                <div className="col mb-4">
                    <label className="form-label fw-bold">
                        Student Names</label>
                    <div className="input-group">
                        <a className="input-group-text"> <FaSearch /></a>
                        <input type="text" className="form-control" id="wd-search-student-name" placeholder="Search Students" />
                        <a className="input-group-text"><MdOutlineKeyboardArrowDown /> </a></div></div>
                <div className="col mb-3"><label className="form-label fw-bold">
                    Assignment Names</label>
                    <div className="input-group">
                        <a className="input-group-text"><FaSearch /> </a>
                        <input className="form-control" placeholder="Search Assignments" />
                        <a className="input-group-text"> <MdOutlineKeyboardArrowDown /> </a></div>
                </div> </div>
            <a><button className="btn btn-secondary float-start "><FiFilter className="me-1" />
                Apply Filters </button> </a> <br /><br />
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {courseAssignments.map((assignment) => (
                                <th key={assignment._id}>
                                    {assignment.title}
                                    <br />
                                    {`Out of ${assignment.points}`}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledStudents.map((enrollmentId) => {
                            const student = students.find((user) => user._id === enrollmentId);
                            const studentName = student ? `${student.firstName} ${student.lastName}` : 'none';

                            return (
                                <tr key={enrollmentId}>
                                    <td>{studentName}</td>
                                    {courseAssignments.map((assignment) => {
                                        const studentGrade = courseGrade.find((grade) => grade.assignment === assignment._id && grade.student === enrollmentId);
                                        return (
                                            <td key={assignment._id}>
                                                <input type="text" value={studentGrade ? studentGrade.grade : 'none'} readOnly />
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div></div>
    );
}
import { FaSearch } from "react-icons/fa";
import GradesButtons from "./GradesButtons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiFilter } from "react-icons/fi";

export default function Grades() {
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
                            <th>A1 SETUP<br />Out of 100</th>
                            <th>A2 HTML<br />Out of 100</th>
                            <th>A3 CSS<br />Out of 100</th>
                            <th>A4 BOOTSTRAP<br />Out of 100</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jane Adams</td>
                            <td><input type="text" value="100%" /></td>
                            <td><input type="text" value="96.67%" /></td>
                            <td><input type="text" value="92.18%" /></td>
                            <td><input type="text" value="66.22%" /></td>
                        </tr>
                        <tr>
                            <td>Christina Allen</td>
                            <td><input type="text" value="100%" /></td>
                            <td><input type="text" value="100%" /></td>
                            <td><input type="text" value="100%" /></td>
                            <td><input type="text" value="100%" /></td>
                        </tr>
                        <tr>
                            <td>Samreen Ansari</td>
                            <td><input type="text" value="100%" /></td>
                            <td><input type="text" value="100%" /></td>
                            <td><input type="text" value="100%" /></td>
                            <td><input type="text" value="100%" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
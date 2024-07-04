import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useParams } from "react-router";

export default function AssignmentControls() {
    const { cid } = useParams()

    return (
        <div id="wd-assignment-controls" className="text-nowrap d-flex">
            <div id="wd-search-assignment" className="input-group me-1">
                <span className="input-group-text"><HiMagnifyingGlass /></span>
                <input type="text" className="form-control" placeholder="Search..." />
            </div>
            <div className="input-group justify-content-end">
                <div id="wd-add-group">
                    <button id="wd-add-group-btn"
                        className="btn btn-lg btn-secondary me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </button>
                </div>
                <div id="wd-add-assignment">
                    <a id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end" href={`#/Kanbas/Courses/${cid}/Assignments/new`} >
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </a>
                </div>
            </div>
        </div>
    );
}
import {FaFileExport, FaFileImport} from "react-icons/fa";
import {FaGear} from "react-icons/fa6";

export default function GradesButtons() {
    return (
        <div className="text-nowrap">
            <button className="btn btn-lg btn-secondary me-1 float-end">
                <FaGear /></button>
            <button id="wd-add-group-btn" className="btn dropdown-toggle btn-lg btn-secondary me-2 float-end">
                <FaFileExport className="me-2" />  
                Export</button>
            <button className="btn btn-lg btn-secondary me-2 float-end">
                <FaFileImport className="me-2"/>
                Import</button></div>
    );
}
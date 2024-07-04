import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {FaTrash} from "react-icons/fa";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";

export default function EditorControlButtons({assignmentId, assignmentName, deleteAssignment}:
     {
         assignmentId: string;
         assignmentName: string;
         deleteAssignment: (name: string) => void;
     }) {

    return (
        <div className="  align-items-center float-end">
            <button className="btn p-0" data-bs-toggle="modal"  data-bs-target= {`#wd-delete-${assignmentId}`}><FaTrash className="text-danger me-2"/></button>
            <GreenCheckmark/><IoEllipsisVertical className="fs-6"/>
            <DeleteAssignmentDialog assignmentId={assignmentId} deleteAssignment={deleteAssignment} assignmentName={assignmentName} />
        </div>
    );
}
import { BsGripVertical } from "react-icons/bs";
import { TfiPencilAlt } from "react-icons/tfi";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <BsGripVertical className="me-2 fs-3" />
            <TfiPencilAlt className="me-3 fs-5 text-success" />
        </div>
    );
}
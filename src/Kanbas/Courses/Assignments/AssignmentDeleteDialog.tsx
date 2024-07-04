import {useDispatch} from "react-redux";

export default function AssignmentDeleteDialog({assignmentId, assignmentName, deleteAssignment}:
   {
       assignmentId: string;
       assignmentName: string;
       deleteAssignment: any;
   }) {
    const dispatch = useDispatch();
    return (
        <div id={`wd-delete-${assignmentId}`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Warning </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        {`Delete or no?`}
</div>
                    <div className="modal-footer">

                    <button  onClick={() => {
                            console.log(assignmentName);
                            console.log(assignmentId);
                            dispatch(deleteAssignment(assignmentId));
                        }} 
                        data-bs-dismiss="modal" className="btn btn-danger">
                            Ok
                        </button>

                        <button className="btn btn-secondary" data-bs-dismiss="modal">
                            No
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
import {useParams} from "react-router";
import assignments from "../../Database/assignments.json";
export default function AssignmentEditor() {
    const { aid} = useParams();
    const assignment = assignments.find((a)=> a._id===aid);
    return (
        <div id="wd-assignment-editor" className="pt-2">
            <form>
                <div className="row mb-3">
                    <label htmlFor="wd-name" className="col-sm-2 col-form-label">
                        Assignment Name </label>
                    <div className="col-sm-12">
                        <input id="wd-name" className="form-control" value={assignment && assignment.title ? `${assignment.title}` : ""} />
                    </div> </div>

                <div className="row mb-3 ">
                    <div className="col-sm-12">
                        <textarea className="col-sm-12 form-control" id="wd-description" rows={15}>
                        {assignment && assignment.description ? `${assignment.description}` : ""}
                        </textarea>
                    </div>
                </div>

                <div className="row mb-3 text-end">
                    <div className="col">
                        <label htmlFor="wd-points" className="col-sm-2 col-form-label">
                            Points</label> </div>
                    <div className="col">
                        <input id="wd-points" className="form-control" value={assignment && assignment.points ? `${assignment.points}` : ""} />
                    </div>
                </div>

                <div className="row mb-3 text-end">
                    <div className="col">
                        <label htmlFor="wd-group" className="col-sm-2 col-form-label">
                            Assignment Group</label> </div>
                    <div className="col">
                        <select id="wd-group" className="form-select">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="PROJECTS">PROJECTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 text-end">
                    <div className="col">
                        <label htmlFor="wd-display-grades-as" className=" col-sm-2 col-form-label">
                            Display Grade as </label> </div>
                    <div className="col">
                        <select id="wd-display-grades-as" className="form-select">
                            <option value="Percentage">Percentage</option>
                        </select></div>
                </div>

                <div className="row mb-3">
                    <div className="col text-end">
                        <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">
                            Submission Type </label> </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <select id="wd-submission-type" className="form-select ">
                                    <option value="INPERSON">In person</option>

                                    <option value="ONLINE">Online</option> </select>
                                <label htmlFor="wd-online-dropdown" className="ol-form-label">
                                    Online Entry Options </label>
                                <div className="col-sm-10">
                                    <div className="form-check d-flex">
                                        <input className="form-check-input" type="checkbox" id="twd-text-entry" />
                                        <label className="form-check-label" htmlFor="wd-text-entry">
                                            Text Entry </label> </div>
                                    <div className="form-check d-flex">
                                        <input className="form-check-input" type="checkbox" id="wd-wd-website-url" />
                                        <label className="form-check-label" htmlFor="wd-wd-website-url">
                                            Website URL</label></div>
                                    <div className="form-check d-flex">
                                        <input className="form-check-input" type="checkbox" id="mwd-media-recordings" />
                                        <label className="form-check-label" htmlFor="wd-media-recordings">
                                            Media Recordings</label> </div>
                                    <div className="form-check d-flex">
                                        <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                        <label className="form-check-label" htmlFor="wd-student-annotation">
                                            Student Annotation </label></div>
                                    <div className="form-check d-flex">
                                        <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                        <label className="form-check-label" htmlFor="wd-file-upload">
                                            File Uploads</label> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col text-end">
                        <label htmlFor="wd-assign" className="col-sm-2 col-form-label">
                            Assign</label> </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <label htmlFor="wd-assign-to" className="col col-form-label">
                                        Assign to</label>
                                    <div className="col-sm-12">
                                        <input id="wd-assign-to" className="form-control" value="everyone" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="wd-due-date" className="col col-form-label">
                                        Due </label>
                                    <div className="col-sm-12">
                                        <input id="wd-due-date" className="form-control" type="date" value={assignment && assignment.due ? `${assignment.availableUntil}` : ""} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="wd-available-from" className="col col-form-label">
                                        Available from </label>
                                    <div className="col-sm-12">
                                        <input id="wd-available-from" className="form-control" type="date" value={assignment && assignment.availableFrom ? `${assignment.availableFrom}` : ""} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="wd-available-from" className="col col-form-label">
                                        until </label>
                                    <div className="col-sm-12">
                                        <input id="wd-available-to" className="form-control" type="date"value={assignment && assignment.availableUntil ? `${assignment.availableUntil}` : ""} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form >
            <hr />
            <div id="wd-editor-buttom">
                <button id="wd-save" className="btn btn-lg btn-danger me-2 mb-2 float-end">
                    Save
                </button>
                <button id="wd-cancel" className="btn btn-lg btn-secondary me-2 mb-2 float-end">
                    Cancel
                </button>
            </div>
        </div>
    );
}

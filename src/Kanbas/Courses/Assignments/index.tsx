import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import TitleButtons from "./TitleButtons";
import "./Assignment.css";

import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <AssignmentControls /><br />
      <ul id="wd-assignments" className="list-group rounded-0 text-nowrap">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray text-nowrap">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-1 fs-3" />
            <GoTriangleDown className="me-1 fs-5" />
            ASSIGNMENTS
            <TitleButtons />
          </div>

          <ul className="list-group rounded-0 text-nowrap green-left-border">
            {/*
            <li className="list-group-item p-3 ps-1 d-flex text-nowrap">
              <div className="me-2 fs-3 float-end">
              <AssignmentControlButtons />
              </div>
              <div className="flex-fill">
                <a className="wd-assignment-link bold no-underline text-black" href="#/Kanbas/Courses/1234/Assignments/123 ">
                  A1
                </a><br />
                <a className="text-danger no-underline"> Multiple Modules</a> | <strong>Not available until</strong> May 6 at 12:00am |<br />
                <strong>Due</strong> May 13 at 11:59pm | 100pts
              </div>
              <LessonControlButtons />
            </li>


            <li className="list-group-item p-3 ps-1 d-flex text-nowrap">
              <div className="me-2 fs-3 float-end">
              <AssignmentControlButtons />
              </div>
              <div className="flex-fill">
                <a className="wd-assignment-link bold no-underline text-black" href="#/Kanbas/Courses/1234/Assignments/456">
                  A2
                </a>
                <br />
                <a className="text-danger no-underline"> Multiple Modules</a> | <strong>Not available until</strong> May 13 at 12:00am |<br />
                <strong>Due</strong> May 20 at 11:59pm | 100pts
              </div>
              <LessonControlButtons />
            </li>


            <li className="list-group-item p-3 ps-1 d-flex text-nowrap">
              <div className="me-2 fs-3 float-end">
              <AssignmentControlButtons />
              </div>
              <div className="flex-fill">
                <a className="wd-assignment-link bold no-underline text-black" href="#/Kanbas/Courses/1234/Assignments/789">
                  A3
                </a>
                <br />
                <a className="text-danger no-underline"> Multiple Modules</a> | <strong>Not available until</strong> May 20 at 12:00am |<br />
                <strong>Due</strong> May 27 at 11:59pm | 100pts
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>*/}
            {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
              <li className="list-group-item p-3 ps-1 d-flex text-nowrap">
                <div className="me-2 fs-3 float-end">
                  <AssignmentControlButtons />
                </div>
                <div className="flex-fill">
                  <a className="wd-assignment-link bold no-underline text-black" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </a><br />
                  <a className="text-danger no-underline"> Multiple Modules</a> | <strong>Not available until</strong> {assignment.availableTime} |<br />
                  <strong>Due</strong> {assignment.dueTime} | {assignment.points} pts
                </div>
                <LessonControlButtons />
              </li>

            ))}


          </ul>

          {/* <input id="wd-search-assignment"
               placeholder="Search for Assignments" /> 
               <button id="wd-add-assignment-group">+ Group</button> 
               <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>

        <ul id="wd-assignment-list">

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br/>
            Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |<br/>
            <strong>Due</strong> May 13 at 11:59pm | 100pts
          </li>

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/456">
              A2 - CSS + BOOTSTRAP
            </a>
            <br/>
            Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |<br/>
            <strong>Due</strong> May 20 at 11:59pm | 100pts
          </li>

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/789">
              A3 - JAVASCRIPT + REACT
            </a>
            <br/>
            Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |<br/>
            <strong>Due</strong> May 27 at 11:59pm | 100pts
          </li>

    </ul>*/}
        </li>
      </ul>
    </div>
  )
};

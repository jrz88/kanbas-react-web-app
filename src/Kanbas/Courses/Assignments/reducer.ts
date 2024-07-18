import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: [],
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                dueTime: new Date().getTime().toString(),
                availableTime: new Date().getTime().toString(),
                due: assignment.due,
                availableFrom: assignment.availableFrom,
                availableUntil: assignment.availableUntil,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignment._id ? assignment : m
            ) as any;
        },
        editAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignment ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { setAssignments ,addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;
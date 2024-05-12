import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Root from "../pages/Root";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import PrivateRouter from "./PrivateRouter";
import AssignmentDetails from "../pages/AssignmentDetails";
import UpdateAssignments from "../pages/UpdateAssignments";
import AssignmentMarking from "../pages/AssignmentMarking";

const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/assignments',
                element: <Assignments></Assignments>,
            },
            {
                path: '/createAssignments',
                element: <PrivateRouter><CreateAssignments></CreateAssignments></PrivateRouter>,
            },
            {
                path: '/pendingAssignments',
                element: <PrivateRouter><PendingAssignments></PendingAssignments></PrivateRouter>,
            },
            {
                path: '/assignmentDetails/:id',
                element: <PrivateRouter><AssignmentDetails></AssignmentDetails></PrivateRouter>,
            },
            {
                path: '/updateAssignments/:id',
                element: <PrivateRouter><UpdateAssignments></UpdateAssignments></PrivateRouter>,
            },
            {
                path: '/assignmentMarking',
                element: <PrivateRouter><AssignmentMarking></AssignmentMarking></PrivateRouter>,
            },
        ]
    }
])

export default Router;
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Stafflist from "../pages/dashboard/stafflist/Stafflist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "/stafflist",
                element: <Stafflist />
            },
            {
                path: "/about",
                element: <div>About Page</div>
            },
        ]

    }
]);

export default router;
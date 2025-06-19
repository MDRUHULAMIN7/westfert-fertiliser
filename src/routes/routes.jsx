import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Stafflist from "../pages/dashboard/stafflist/Stafflist";
import SalesDetails from "../pages/dashboard/stafflist/SalesDetails";
import ClientsDetails from "../pages/dashboard/ClientsDetails/ClientsDetails";
import QuoteUpdate from "../pages/dashboard/QuoteUpdate/QuoteUpdate";
import QuoteHistory from "../pages/dashboard/QuoteHistory/QuoteHistory";

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
                path: "/sales-details",
                element: <SalesDetails />
            },
            {
                path: "/clients-details",
                element: <ClientsDetails />
            },
            {
                path: "quote-update",
                element: <QuoteUpdate />
            },
            {
                path: "/quote-history",
                element: <QuoteHistory />
            },
            {
                path: "/about",
                element: <div>About Page</div>
            },
        ]

    }
]);

export default router;
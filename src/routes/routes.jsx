import { createBrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Stafflist from "../pages/dashboard/stafflist/Stafflist";

import ClientsDetails from "../pages/dashboard/ClientsDetails/ClientsDetails";
import QuoteUpdate from "../pages/dashboard/QuoteUpdate/QuoteUpdate";
import QuoteHistory from "../pages/dashboard/QuoteHistory/QuoteHistory";
import SalesDetailsModal from "../modal/SalesDetailsModal";
import EditProfilePage from "../pages/dashboard/EditProfilePage/EditProfilePage";
import SalesDetailsPage from "../pages/dashboard/stafflist/SalesDetailsPage";
import ChangePasswordPage from "../pages/dashboard/ChangePassword/ChangePasswordPage";
import ManagerDetailsPage from "../pages/dashboard/stafflist/ManagerDetailsPage";
import Modal from "../modal/Modal";
import CustomerDetailsModal from "../modal/CustomerDetailsModal";
import QuoteDetailsModal from "../modal/QuoteDetailsModal";

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
                path: "/quote-details/:id",
                element: <QuoteDetailsModal isOpen={true} />
            },
            {
                path: "/about",
                element: <div>About Page</div>
            },
            {
                path: "/stafflist/sales/:id/details",
                element: <div><SalesDetailsPage /></div>
            },
            {
                path: "/stafflist/manager/:id/details",
                element: <div><ManagerDetailsPage /></div>
            },
            {
                path: "/stafflist/:id/edit",
                element: <div><EditProfilePage  /></div>
            },
            {
                path: "/stafflist/:id/password",
                element: <div><ChangePasswordPage  /></div>
            },
            {
                path: "/stafflist/modal",
                element: <div><Modal /></div>
            },
            {
                path: "/customer-details/:id",
                element: <div><CustomerDetailsModal isOpen={true} /></div>
            },
             

        ]

    }
]);

export default router;
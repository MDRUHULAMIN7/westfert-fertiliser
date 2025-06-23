import { createBrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Stafflist from "../pages/dashboard/stafflist/Stafflist";

import ClientsDetails from "../pages/dashboard/ClientsDetails/ClientsDetails";
import QuoteUpdate from "../pages/dashboard/QuoteUpdate/QuoteUpdate";
import QuoteHistory from "../pages/dashboard/QuoteHistory/QuoteHistory";
import SalesDetailsModal from "../modal/SalesDetailsModal";

import SalesDetailsPage from "../pages/dashboard/stafflist/SalesDetailsPage";

import ManagerDetailsPage from "../pages/dashboard/stafflist/ManagerDetailsPage";
import Modal from "../modal/Modal";
import CustomerDetailsModal from "../modal/CustomerDetailsModal";
import QuoteDetailsModal from "../modal/QuoteDetailsModal";
import RawMaterial from "../pages/dashboard/RawMaterial/RawMaterial";
import MaterialDetailsModal from "../modal/MaterialDetailsModal";
import RawMaterialEditModal from "../modal/RawMaterialEditModal";
import EditProfileModal from "../modal/EditProfileModal";
import ChangePasswordModal from "../modal/ChangePasswordModal";


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
                path: "/raw-material",
                element: <RawMaterial />
            },
            {
                path: "/raw-material/:id/details",
                element: <MaterialDetailsModal isOpen={true} />
            },
            {
                path: "/raw-material/:id/edit",
                element: <RawMaterialEditModal isOpen={true} />
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
                element: <div><EditProfileModal isOpen={true}  /></div>
            },
            {
                path: "/stafflist/:id/password",
                element: <div><ChangePasswordModal isOpen={true}  /></div>
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
import { createBrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Stafflist from "../pages/dashboard/stafflist/Stafflist";
import ClientsDetails from "../pages/dashboard/ClientsDetails/ClientsDetails";
import QuoteUpdate from "../pages/dashboard/QuoteUpdate/QuoteUpdate";
import QuoteHistory from "../pages/dashboard/QuoteHistory/QuoteHistory";
import CustomerDetailsModal from "../modal/CustomerDetailsModal";
import QuoteDetailsModal from "../modal/QuoteDetailsModal";
import RawMaterial from "../pages/dashboard/RawMaterial/RawMaterial";
import MaterialDetailsModal from "../modal/MaterialDetailsModal";
import RawMaterialEditModal from "../modal/RawMaterialEditModal";
import EditProfileModal from "../modal/EditProfileModal";
import ChangePasswordModal from "../modal/ChangePasswordModal";
import StandardRecipes from "../pages/dashboard/StandardRecipes/StandardRecipes";
import StandardRecipesModal from "../modal/StandardRecipesDetailsModal";
import StandardRecipesEditModal from "../modal/StandardRecipesEditModal";
import StaffAddModal from "../modal/StaffAddModal";
import ManagerDetailsModal from "../modal/ManagerDetailsModal";
import SalesDetailsModal from "../modal/SalesDetailsModal";
import RawAddModal from "../modal/RawAddModal";
import StandardAddModal from "../modal/StandardAddModal";
import AppSupport from "../pages/dashboard/AppSupport/AppSupport";
import About from "../pages/dashboard/About/About";
import Terms from "../pages/dashboard/Terms/Terms";
import AdminProfile from "../pages/dashboard/AdminProfile";
import Notifications from "../pages/dashboard/Notifications";
import SignInLayout from "../components/layout/SignInLayout";
import SignIn from "../pages/SignIn/SignIn/SignIn";
import Faq from "../pages/dashboard/Faq/Faq";
import FaqEditModal from "../modal/FaqEditModal";


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
        path: "/about",
        element: <div><About /></div>
      },
      {
        path: "/clients-details",
        element: <ClientsDetails />
      },
      {
        path: "/customer-details/:id",
        element: <div><CustomerDetailsModal isOpen={true} /></div>
      },
      {
        path: "/quote-details/:id",
        element: <QuoteDetailsModal isOpen={true} />
      },
      {
        path: "/quote-history",
        element: <QuoteHistory />
      },
      {
        path: "/quote-update",
        element: <QuoteUpdate />
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
        path: "/rawadd-modal",
        element: <RawAddModal />
      },
      {
        path: "/stafflist",
        element: <Stafflist />
      },
      {
        path: "/staffadd-modal",
        element: <StaffAddModal />
      },
      {
        path: "/stafflist/:id/edit",
        element: <div><EditProfileModal isOpen={true} /></div>
      },
      {
        path: "/stafflist/:id/password",
        element: <div><ChangePasswordModal isOpen={true} /></div>
      },
      {
        path: "/stafflist/manager/:id/details",
        element: <div><ManagerDetailsModal /></div>
      },
      {
        path: "/stafflist/sales/:id/details",
        element: <div><SalesDetailsModal /></div>
      },
      {
        path: "/standard-recipes",
        element: <div><StandardRecipes /></div>
      },
      {
        path: "/standard-recipes/:id/details",
        element: <StandardRecipesModal isOpen={true} />
      },
      {
        path: "/standard-recipes/:id/edit",
        element: <StandardRecipesEditModal isOpen={true} />
      },
      {
        path: "/standardadd-modal",
        element: <StandardAddModal />
      },
      {
        path: "/app-support",
        element: <AppSupport />
      },
      {
        path: "/terms-condition",
        element: <Terms />
      },
      {
        path: "/admin-profile",
        element: <AdminProfile />
      },
      {
        path: "/notifications",
        element: <Notifications />
      },
      {
        path: "/faq",
        element: <Faq />
      },
        {
        path: "/faq/:id/edit",
        element: <FaqEditModal  />
      },
    ]
  },
  {
       path:"/signin",
       element:<SignInLayout></SignInLayout>,
       errorElement: <ErrorPage></ErrorPage>,
       children:[
        {
         index: true,
          element:<div> <SignIn/> </div>
        },
       ]
  },
  
]);

export default router;
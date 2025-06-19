import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";
import HeaderDashboard from "./HeaderDashboard";

const MainLayout = () => {
    return (
                <div className="grid grid-cols-12 px-4">
            <div className="col-span-2 h-screen ">
                <Sidebar />
                   </div>

            {/* main container with header */}
            <div className="col-span-10 ">
                <div className="flex items-center justify-end px-2">
                    <HeaderDashboard/>
                </div>

                <div className="px-4 mx-auto">
                    <div className=" rounded-md">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

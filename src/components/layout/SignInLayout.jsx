import { Outlet } from "react-router-dom";
import Logo from "../shared/logo";
import BigLogo from "../shared/BigLogo";

const SignInLayout = () => {
  return (
    <div className="flex h-screen w-full bg-bgColor">
      {/* Left Half */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <BigLogo/>
      </div>

      {/* Right Half */}
      <div className="w-1/2 h-full flex items-center justify-center ">
        <Outlet />
      </div>
    </div>
  );
};

export default SignInLayout;

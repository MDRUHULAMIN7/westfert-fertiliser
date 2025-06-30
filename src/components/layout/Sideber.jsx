import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiSettings, CiUser } from 'react-icons/ci';
import { PiChats, PiHandCoinsThin, PiNoteDuotone } from 'react-icons/pi';
import { TbNotes } from 'react-icons/tb';
import { MdKeyboardArrowUp, MdLogout, MdOutlineDriveFolderUpload, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { BiCategory } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { LuArrowRightLeft } from 'react-icons/lu';
import { GiFertilizerBag } from 'react-icons/gi';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import Logo from '../shared/Logo';
import { IoNewspaperOutline } from "react-icons/io5";
const menuItems = [
    { label: 'Analytics', path: '/', icon: <BiCategory size={22} /> },
    { label: 'Staff List', path: '/stafflist', icon: <CiUser size={22} /> },
    { label: 'Customer List', path: '/clients-details', icon: <BsPeople size={22} /> },
    { label: 'Quote Update', path: '/quote-update', icon: <MdOutlineDriveFolderUpload size={22} /> },
    { label: 'Quote History', path: '/quote-history', icon: <LuArrowRightLeft size={22} /> },
    { label: 'Raw Material ', path: '/raw-material', icon:<PiHandCoinsThin size={22} /> },
    { label: 'Standard Recipes', path: '/standard-recipes', icon:<GiFertilizerBag size={22} /> },
    { label: 'News', path: '/news', icon:<IoNewspaperOutline size={22} /> },

   

];

const settings = [
    {
        label: <span className="text-[18px]">Setting</span>,
        icon: <CiSettings size={24} />,
        path: '',
        children: [
             { label: 'App Support', path: '/app-support', icon:<PiNoteDuotone size={22} /> },
            { label: 'About Westfert', path: '/about', icon: <IoMdInformationCircleOutline size={22} /> },
            { label: 'Terms & Condition', path: '/terms-condition', icon: <TbNotes size={22} /> },
            { label: 'Faq', path: '/faq', icon: <PiChats size={22} /> },
        ],
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    const handleLogout = () => {
        navigate('/signin');
    };
    return (
        <div className="h-full fixed " style={{ backgroundColor: '#FEFEFE', fontFamily: 'Poppins' }}>
            <div className="flex items-center justify-center pt-10 cursor-pointer">
                <Logo></Logo>
            </div>

            <div style={{ backgroundColor: '#FEFEFE', color: '#929292' }} className="mt-10 ">
                {menuItems.map((item) => {
                    return (
                        <div
                            key={item.path}
                            className={
                                pathname === item.path
                                    ? 'bg-primary rounded-r-full w-[90%] text-nowrap text-lg font-medium text-[#FEFEFE] transition-transform'
                                    : 'text-xl '
                            }
                        >
                            <Link className={`flex items-center gap-4 text-lg  p-6 py-3`} to={item.path}>
                                <span>{item.icon}</span>
                                {item.label}
                            </Link>
                        </div>
                    );
                })}

                <div onClick={() => setIsSettingOpen(!isSettingOpen)} className="cursor-pointer">
                    <div className="flex items-center ml-6 my-2 text-xl ">
                        <div className="flex gap-3">
                            <span>
                                <CiSettings size={26} />
                            </span>
                            <span> Setting</span>
                        </div>
                        <div className="ml-28">
                            {isSettingOpen ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                    </div>
                </div>

                {/* dublicate */}
                <div className={isSettingOpen ? 'block' : 'hidden'}>
                    {settings.map((setting) => (
                        <div key={setting.path}>
                            {setting.children.map((child) => (
                                <div
  key={`${setting.path}-${child.path}`}
  className={
    pathname === child.path
      ? 'bg-primary rounded-r-full w-[90%] text-nowrap text-lg font-medium text-[#FEFEFE] transition-transform'
      : 'text-xl'
  }
>
  <Link to={child.path} className="flex items-center gap-4 text-lg p-6 py-3">
    <span>{child.icon}</span>
    {child.label}
  </Link>
</div>
                            ))}
                        </div>
                    ))}
                </div>

                <div
                    className=" flex items-center mt-20 gap-3 text-[#929292]  text-[18px]  py-2 rounded-xl cursor-pointer ml-6"
                    onClick={handleLogout}
                >
                    <span>
                        <MdLogout className="font-bold" size={23} />
                    </span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

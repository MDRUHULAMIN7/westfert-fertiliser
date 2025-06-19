import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiSettings, CiUser } from 'react-icons/ci';


import { PiNoteDuotone } from 'react-icons/pi';
import { TbNotes } from 'react-icons/tb';
import { MdKeyboardArrowUp, MdLogout, MdOutlineDriveFolderUpload, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { BiCategory } from 'react-icons/bi';

import Logo from '../shared/logo';
import { BsPeople } from 'react-icons/bs';
import { LuArrowRightLeft } from 'react-icons/lu';

const menuItems = [
    { label: 'Analytics', path: '/', icon: <BiCategory size={22} /> },
    { label: 'Staff List', path: '/stafflist', icon: <CiUser size={22} /> },
    { label: 'Clients Details', path: '/clients-details', icon: <BsPeople size={22} /> },
    { label: 'Quote Update', path: '/quote-update', icon: <MdOutlineDriveFolderUpload size={22} /> },
    { label: 'Quote History', path: '/quote-history', icon: <LuArrowRightLeft size={22} /> },

];

const settings = [
    {
        label: <span className="text-[18px]">Setting</span>,
        icon: <CiSettings size={24} />,
        path: '',
        children: [

            { label: 'Privacy & Policy', path: '/privacy-policy', icon: <PiNoteDuotone size={22} /> },
            { label: 'Terms & Condition', path: '/terms-condition', icon: <TbNotes size={22} /> },
        ],
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    const handleLogout = () => {
        navigate('/login');
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
                                    ? 'bg-[#6DBD44] rounded-r-full w-[90%] text-nowrap text-lg font-medium text-[#FEFEFE] transition-transform'
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
                                        pathname === child.path ? 'bg-[#FFB953] rounded-r-full  w-[3%] text-nowrap' : ''
                                    }
                                >
                                    <Link to={child.path} className="flex items-center gap-4 p-6 py-2">
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

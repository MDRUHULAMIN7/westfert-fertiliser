import { Layout } from 'antd';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

import { HiArrowSmallLeft } from 'react-icons/hi2';
import PageTitle from '../shared/PageTitle';

const { Header } = Layout;

const path = [
    { path: '/', name: 'Analytics' },
    { path: '/stafflist', name: 'Staff List' },
    { path: '/faq', name: 'FAQ' },
    { path: '/clients-details', name: 'Clients Details' },
    { path: '/quote-update', name: 'Quote Update' },
    { path: '/quote-history', name: 'Quote History' },
    { path: '/notifications', name: 'Notifications' },
    { path: '/profile', name: 'Profile' },
    { path: '/edit-profile', name: 'Edit Profile' },
    { path: '/change-password', name: 'Change Password' },
];

const HeaderDashboard = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const currentPage = path.find((item) => item.path === currentPath);
    return (
        <Header
            className="px-8 my-2 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg mb-8 h-[80px]"
            style={{
                width: '100%',
                overflow: 'hidden',
                background: '#FEFEFE',
            }}
        >
            <div className="flex  justify-between items-center pt-2">
                <div>
                    {currentPage ? (
                        currentPage.path === '/employee-details' ||
                            currentPage.path === '/customer-details' ||
                            currentPage.path === '/all-details' ? (
                            <div className="flex items-center gap-2">
                                <HiArrowSmallLeft className="" size={25} /> <PageTitle>{currentPage.name}</PageTitle>
                            </div>
                        ) : (
                            <PageTitle className="text-gray-700 uppercase ">{currentPage.name}</PageTitle>
                        )
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex items-center justify-end gap-5 h-full ">
                    <div>

                        <Link to={'/notifications'}>
                            <div className="size-10 rounded-full p-6  flex items-center justify-center bg-[#F2F2F2] ">
                                <button className="py-4 px-1 relative border-2 border-transparent rounded-full  focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
                                    <span className="absolute inset-0 -top-4  -mr-4">
                                        <div className="inline-flex items-center px-1 py-0.3  text-[11px] font-semibold leading-4 rounded-full bg-[#EEC10B]  text-[#5C5C5C">
                                            1
                                        </div>
                                    </span>

                                    < IoIosNotificationsOutline size={22} />
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div>
                        {/* profile */}

                        <Link
                            to={'/profile'}
                            style={{
                                height: '42px',
                                cursor: 'pointer',

                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                margin: '10px',
                            }}
                        >
                            <img
                                src={'/user.svg'}
                                style={{
                                    width: '44px',
                                    height: '44px',

                                }}
                                alt=""
                            />
                            <h2
                                className="text-[#333333] font-semibold"
                                style={{
                                    fontSize: '16px',
                                }}
                            >
                                Admin No Name
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default HeaderDashboard;

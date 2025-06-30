
import { Table, Space, ConfigProvider } from 'antd';
import { useDeleteNewsMutation, useGetNewsQuery } from '../../../redux/api/newsApi2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../../modal/DeleteModal';
import toast from 'react-hot-toast';
import SuspenseWithLoader from '../../../components/shared/SuspenseWithLoader';
const NewsTable = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const navigate = useNavigate();
    const { data = [], refetch, isLoading } = useGetNewsQuery();
    const [deleteNews] = useDeleteNewsMutation();

    if (isLoading) {
        return <SuspenseWithLoader></SuspenseWithLoader>
    }
    const handleDelete = async (id) => {
        try {
            console.log('handeler', id)
            const response = await deleteNews(id).unwrap(); // this contains { message, deletedNews }
            toast.success(response.message); // ✅ logs: "News deleted successfully"
            refetch(); // optional
        } catch (error) {
            toast.error(error?.data?.message || error.message);
        }
    };


    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const columns = [
        {
            title: 'Serial No.',
            dataIndex: 'index',
            key: 'index',
            render: (_, __, index) => <span>{index + 1}</span>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image, record) => (
                <img
                    src={image}
                    alt={record.title}
                    className="w-24 h-14 rounded-md object-cover"
                />
            ),
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <span className="font-medium">{text}</span>,
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle" >
                    <img
                        onClick={() =>
                            navigate(`/news/${record?._id}/details`, {
                                state: { from: '/news' },
                            })
                        }
                        src="/stafflist/detail.png"
                        alt="Detail"
                        className="cursor-pointer"
                    />
                    <img
                        onClick={() =>
                            navigate(`/news/${record?._id}/edit`, {
                                state: { from: '/news' },
                            })
                        }
                        src="/edit.png"
                        alt="Edit"
                        className="cursor-pointer h-5"
                    />
                    <button>
                        <img
                            onClick={() => setDeleteTarget(record?._id)}
                            src="/delete.png"
                            alt="Delete"
                            className="cursor-pointer h-6"
                        />
                    </button>
                    {deleteTarget === record?._id && (
                        <DeleteModal
                            materialCode={record?._id}
                            onClose={() => setDeleteTarget(null)}
                            refetch={refetch}
                            handleDelete={handleDelete}
                        />
                    )}
                </Space>
            ),
        },
    ];
    return (
        <div>

            <ConfigProvider 
            theme={{
                    components: {
                        Pagination: {
                            itemActiveBg: "#6DBD44",
                            borderRadius: "100%",
                            colorPrimary: "white",
                            bottomLeft :true,
                          
                        },
                        Table:{
                              rowHoverBg:"#F0F8EC",
                              headerColor:"#5C5C5C",
                              headerBg:'#f1f1f1',
                              linkDecoration:'none',
                                                       
                              
                        },
                       
                         
                    },
                     token:{
                            colorText:"#767676",
                            fontSize:14,
                           
                        }
                }}
            >
            <Table
                columns={columns}
                dataSource={data}
                rowSelection={rowSelection}
                pagination={{ pageSize: 7 }}
                rowKey="_id"
            />
            </ConfigProvider>
            </div>
    )
}

export default NewsTable
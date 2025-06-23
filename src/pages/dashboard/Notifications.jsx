import { Table, Button } from 'antd';
import { useState } from 'react';

const Notifications = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "New order Come from Asadujjaman",
      address: "Asad ux ui salon , 76/A Corona, Michigan, Paris",
      time: "8:00am, today",
      isRead: false
    },
    {
      id: 2,
      title: "New order Come from Mr. Nadir",
      address: "Asad ux ui salon , 76/A Corona, Michigan, Paris",
      time: "8:00am, today",
      isRead: false
    },
    {
      id: 3,
      title: "New Clients Update Come from Asadujjaman",
      address: "Asad ux ui salon , 76/A Corona, Michigan, Paris",
      time: "8:00am, today",
      isRead: false
    },
    {
      id: 4,
      title: "New Clients Update Come from Asadujjaman",
      address: "Asad ux ui salon , 76/A Corona, Michigan, Paris",
      time: "8:00am, today",
      isRead: true
    },
    {
      id: 5,
      title: "New order Come from Mr. Nadir",
      address: "Asad ux ui salon , 76/A Corona, Michigan, Paris",
      time: "8:00am, today",
      isRead: true
    },
    {
      id: 6,
      title: "New order Come from Asadujjaman",
      address: "Asad ux ui salon , 76/A Corona, Michigan, Paris",
      time: "8:00am, today",
      isRead: true
    },
    {
      id: 7,
      title: "New order Come from Mr. Nadir",
      address: "Asad ux ui salon , 76/A Corona, Michigan, Paris",
      time: "8:00am, today",
      isRead: true
    },
    {
      id: 8,
      title: "New order Come from Asadujjaman",
      address: "Asad ux ui salon , 76/A Corona, Michigan, Paris",
      time: "8:00am, today",
      isRead: true
    }
  ]);

  const handleMarkAllAsRead = () => {
    const updated = data.map(item => ({ ...item, isRead: true }));
    setData(updated);
  };

  const columns = [
    {
      dataIndex: 'title',
      key: 'title',
      render: (_, record) => (
        <div className="p-2">
          <div className={`font-medium ${record.isRead ? 'text-gray-400' : 'text-gray-800'}`}>
            {record.title}
          </div>
          <div className={`text-sm ${record.isRead ? 'text-gray-400' : 'text-gray-600'}`}>
            {record.address}
          </div>
        </div>
      )
    },
    {
      dataIndex: 'time',
      key: 'time',
      width: 160,
      align: 'right',
      render: (_, record) => (
        <div className={`text-sm ${record.isRead ? 'text-gray-400' : 'text-gray-800'}`}>
          {record.time}
        </div>
      )
    }
  ];

  return (
    <div className="bg-bgColor rounded-xl">
      {/* Title and Read All Button */}
      <div className="flex justify-between items-center mb-4 px-6 pt-6">
        <span className="text-2xl font-medium text-[#222222]">Notifications</span>
        <Button
          className="px-4 py-4"
          type="default"
          size="middle"
          style={{
            borderColor: '#1854F9',
            color: '#1854F9',
            fontWeight: 400
          }}
          onClick={handleMarkAllAsRead}
        >
          Read all
        </Button>
      </div>

      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
        rowKey="id"
        showHeader={false}
        bordered={false}
        rowClassName={(record) => (!record.isRead ? 'bg-[#F0F8EC]' : '')}
      />
    </div>
  );
};

export default Notifications;

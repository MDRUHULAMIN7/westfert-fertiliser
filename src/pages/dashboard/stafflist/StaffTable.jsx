import { Table, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import staffData from '../../../../database/stafflist.json';
import { useNavigate } from 'react-router-dom';

const { Column } = Table;

const StaffTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const getDesignationColor = (designation) => {
    switch (designation) {
      case 'Sales Executive':
        return '#006EEE';
      case 'Manager':
        return '#F97316';
      default:
        return '#006EEE';
    }
  };

  return (
    <>
      <Table
        dataSource={staffData}
        rowSelection={rowSelection}
        pagination={{ pageSize: 10 }}
        rowKey="id"
      >
        <Column title="ID No." dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Company Name" dataIndex="company" key="company" />
        <Column
          title="Designation"
          dataIndex="designation"
          key="designation"
          render={(text) => (
            <span
              style={{
                color: getDesignationColor(text),
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              {text}
            </span>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <span
                onClick={() => {

                  navigate(
                    `/stafflist/${record.designation === 'Manager' ? 'manager' : 'sales'}/${record.id}/details`,
                    { state: { from: '/stafflist' } }
                  );
                  ;
                }}
                className="text-blue-500 underline cursor-pointer"
              >
                <img src="/stafflist/detail.png" alt="Detail" />
              </span>
              <LockOutlined style={{ color: '#A1A1A1', fontSize: '20px', cursor: 'pointer' }} />
            </Space>
          )}
        />
      </Table>


    </>
  );
};

export default StaffTable;

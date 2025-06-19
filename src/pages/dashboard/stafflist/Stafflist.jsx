import React, { useState } from 'react';
import { Table, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import StaffListHeader from '../../../components/shared/TableHeader';
import staffData from '../../../../database/stafflist.json';

const { Column } = Table;

const Stafflist = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);


  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Designation color logic
  const getDesignationColor = (designation) => {
    switch (designation) {
      case 'Sales executive':
        return '#006EEE';
      case 'Manager':
        return '#F97316';
      default:
        return '#333';
    }
  };

  return (
    <section className="bg-[#F9F9F9] rounded-3xl">
      {/* Top Header */}
      <StaffListHeader
        title="Staff List"
        actionIcons={[
          <LockOutlined key="lock1" style={{ color: '#A1A1A1', fontSize: '22px', cursor: 'pointer' }} />,
          <LockOutlined key="lock2" style={{ color: '#A1A1A1', fontSize: '22px', cursor: 'pointer' }} />
        ]}
        showSearch={true}
        menuIcon={<img className="h-5 w-5" src="/stafflist/three-dot.png" alt="menu" />}
        actionButton={{
          label: 'Add Media',
          icon: <img src="/stafflist/plus.png" alt="plus" />
        }}
        bgColor="bg-[#f0f0f0]"
      />

      {/* Staff Table */}
      <Table dataSource={staffData} rowSelection={rowSelection} pagination={{ pageSize: 10 }}>
        <Column title="ID No." dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Company Name" dataIndex="company" key="company" />
        
        <Column
          title="Designation"
          dataIndex="designation"
          key="designation"
          render={(text) => (
            <span style={{ color: getDesignationColor(text), fontWeight: 600, fontSize: '14px' }}>
              {text}
            </span>
          )}
        />

        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              {/* Detail button: Different routes based on role */}
              <Link to={record.designation === 'Manager' ? '/' : '/sales-details'}>
                <img src="/stafflist/detail.png" alt="Detail" />
              </Link>

          
              <Link to="/">
                <LockOutlined style={{ color: '#A1A1A1', fontSize: '20px', cursor: 'pointer' }} />
              </Link>
            </Space>
          )}
        />
      </Table>
    </section>
  );
};

export default Stafflist;

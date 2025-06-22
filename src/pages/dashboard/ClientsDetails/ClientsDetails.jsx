
import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { LockOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Column, ColumnGroup } = Table;

import data from '../../../../database/stafflist.json'

import StaffListHeader from '../../../components/shared/TableHeader';

const ClientsDetails = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const navigate = useNavigate();
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <section className='bg-[#F9F9F9] rounded-3xl'>
    

      <StaffListHeader
        title="Customer List"

        showSearch={true}
        menuIcon={<img className='h-5 w-5' src="/stafflist/three-dot.png" alt="menu" />}

        bgColor="bg-[#f0f0f0]"
      />

      
      <Table dataSource={data} rowSelection={rowSelection}>
        <Column title="S.no." dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Company Name" dataIndex="company" key="company" />
        
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
       <button
  onClick={() =>
    navigate(`/customer-details/${record?.id}`, {
      state: { from: '/clients-details' },
    })
  }
>
  <img src="/stafflist/detail.png" alt="Detail" />
</button>

              



            </Space>
          )}
        />
      </Table>
    </section>
  );
};

export default ClientsDetails;
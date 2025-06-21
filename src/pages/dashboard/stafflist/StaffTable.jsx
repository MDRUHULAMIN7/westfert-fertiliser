import { Table, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import staffData from '../../../../database/stafflist.json';

import ManagerDetailsModal from '../../../modal/ManagerDetailsModal';
import SalesDetailsModal from '../../../modal/SalesDetailsModal';

const { Column } = Table;

const StaffTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [modalType, setModalType] = useState(null);

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
        return '#333';
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
                  setSelectedStaff(record);
                  setModalType(record.designation === 'Manager' ? 'manager' : 'sales');
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

      {/* Conditional Modal Rendering */}
     {modalType === 'sales' && selectedStaff && (
  <SalesDetailsModal
    isOpen={true}
    staff={selectedStaff}
    onClose={() => setModalType(null)}
  />
)}
         {modalType === 'manager' && selectedStaff && (
  <ManagerDetailsModal
    isOpen={true}
    staff={selectedStaff}
    onClose={() => setModalType(null)}
  />
)}
    </>
  );
};

export default StaffTable;

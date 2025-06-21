import  { useState } from 'react';
import { Table, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import TableHeader from '../../../components/shared/TableHeader';
import StaffAddModal from '../../../modal/StaffAddModal';
import StaffTable from './StaffTable';

const { Column } = Table;

const Stafflist = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modal, setModal] = useState(null);



  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Designation color logic
  

  return (
    <section className="bg-[#F9F9F9] rounded-3xl">
      {/* Top Header */}
      <TableHeader
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
        setModal={setModal}
      />

      {/* Staff Table */}
  <StaffTable  />


      {/* Modal for Add Media */}
      {
        modal && (
          <StaffAddModal

            isOpen={modal}
            onClose={() => {
              setModal(null), setEdit(null);
            }}></StaffAddModal>
        )
      }
    </section>
  );
};

export default Stafflist;

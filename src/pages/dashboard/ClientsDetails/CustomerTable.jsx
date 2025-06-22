import { Table, Space } from 'antd';
import { useState } from 'react';
import { TfiHandPointRight } from 'react-icons/tfi';

// Sample data (you can move this to a JSON file if needed)
import staffData from '../../../../database/salesDetails.json';
import { useNavigate } from 'react-router-dom';

const { Column } = Table;

const CustomerTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [modalType, setModalType] = useState('');

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'red'; 
      case 'On Way':
        return '#f59e0b'; 
      case 'Delivery':
        return '#10b981'; 
      case 'Processing':
        return 'blue'; 
      default:
        return '#6b7280'; // gray
    }
  };
const navigate = useNavigate();
  return (
    <Table
      dataSource={staffData}
    
      pagination={{ pageSize: 6 }}
      
    >
      <Column title="Quote. no." dataIndex="id" key="id" />
      <Column title="S.Executive" dataIndex="farmers name" key="farmers name" />
      <Column title="Manager" dataIndex="manager" key="manager" />
      <Column title="Quote Recipe" dataIndex="quote recipe" key="quote recipe" />
      <Column title="Weight" dataIndex="weight" key="weight" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column title="Delivery Time" dataIndex="delivery time" key="delivery time" />
      <Column
        title="Status"
        dataIndex="status"
        key="status"
        render={(text) => (
          <span
            style={{
              color: getStatusColor(text),
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
                    { state: { from: `/customer-details/${record?.id}` } }
                  );
                  ;
                }}
              className="text-blue-500 underline cursor-pointer"
            >
              <img src="/stafflist/detail.png" alt="Detail" />
            </span>
            
          </Space>
        )}
      />
    </Table>
  );
};

export default CustomerTable;

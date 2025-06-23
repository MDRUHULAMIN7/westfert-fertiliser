import { Table, Space } from 'antd';
import { TfiHandPointRight } from 'react-icons/tfi';

// Sample data (you can move this to a JSON file if needed)
import staffData from '../../../../database/salesDetails.json';

const { Column } = Table;

const SalesTable = () => {


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

  return (
    <Table
      dataSource={staffData}
    
      pagination={{ pageSize: 4 }}
      
    >
      <Column title="Quote. no." dataIndex="id" key="id" />
      <Column title="Farmer Name" dataIndex="farmers name" key="farmers name" />
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
        render={() => (
          <Space size="middle">
            <span
              
              className="text-blue-500 underline cursor-pointer"
            >
              <img src="/stafflist/detail.png" alt="Detail" />
            </span>
            <TfiHandPointRight
              style={{ color: '#A1A1A1', fontSize: '20px', cursor: 'pointer' }}
            />
          </Space>
        )}
      />
    </Table>
  );
};

export default SalesTable;

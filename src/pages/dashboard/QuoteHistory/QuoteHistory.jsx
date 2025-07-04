import { useState } from 'react';
import { Table, Space, Select } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import TableHeader from '../../../components/shared/TableHeader';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { Column } = Table;

const initialData = [
  {
    "key": "1",
    "quoteNo": "2472",
    "executive": "Fahim",
    "deliveryTime": "12/1/2024, 12:30 am",
    "weight": "2 Tonnes",
    "subtotal": "R20,000.00",
    "points": "5 Point",
    "price": "R20,000.00",
    "profit": "R1,000.00",
    "status": "Accepted",
    "action": ""
  },
  {
    "key": "2",
    "quoteNo": "2473",
    "executive": "Nadir",
    "deliveryTime": "14/2/2024, 11:00 am",
    "weight": "1.5 Tonnes",
    "subtotal": "R18,000.00",
    "points": "4 Point",
    "price": "R18,000.00",
    "profit": "R900.00",
    "status": "Pending",
    "action": ""
  },
  {
    "key": "3",
    "quoteNo": "2474",
    "executive": "Asadujjaman",
    "deliveryTime": "20/3/2024, 02:45 pm",
    "weight": "3 Tonnes",
    "subtotal": "R25,000.00",
    "points": "6 Point",
    "price": "R25,000.00",
    "profit": "R1,500.00",
    "status": "Accepted",
    "action": ""
  },
  {
    "key": "4",
    "quoteNo": "2475",
    "executive": "Fahim",
    "deliveryTime": "5/4/2024, 04:30 pm",
    "weight": "2.2 Tonnes",
    "subtotal": "R22,500.00",
    "points": "5 Point",
    "price": "R22,500.00",
    "profit": "R1,200.00",
    "status": "Pending",
    "action": ""
  },
  {
    "key": "5",
    "quoteNo": "2476",
    "executive": "Nadir",
    "deliveryTime": "10/5/2024, 09:15 am",
    "weight": "1.8 Tonnes",
    "subtotal": "R19,500.00",
    "points": "4 Point",
    "price": "R19,500.00",
    "profit": "R950.00",
    "status": "Accepted",
    "action": ""
  },
  {
    "key": "6",
    "quoteNo": "2477",
    "executive": "Asadujjaman",
    "deliveryTime": "18/6/2024, 01:00 pm",
    "weight": "2.5 Tonnes",
    "subtotal": "R24,000.00",
    "points": "6 Point",
    "price": "R24,000.00",
    "profit": "R1,300.00",
    "status": "Pending",
    "action": ""
  },
  {
    "key": "7",
    "quoteNo": "2478",
    "executive": "Fahim",
    "deliveryTime": "25/7/2024, 10:30 am",
    "weight": "1.7 Tonnes",
    "subtotal": "R17,800.00",
    "points": "3 Point",
    "price": "R17,800.00",
    "profit": "R800.00",
    "status": "Accepted",
    "action": ""
  },
  {
    "key": "8",
    "quoteNo": "2479",
    "executive": "Nadir",
    "deliveryTime": "1/8/2024, 03:15 pm",
    "weight": "2.8 Tonnes",
    "subtotal": "R26,000.00",
    "points": "6 Point",
    "price": "R26,000.00",
    "profit": "R1,400.00",
    "status": "Pending",
    "action": ""
  },
  {
    "key": "9",
    "quoteNo": "2480",
    "executive": "Asadujjaman",
    "deliveryTime": "10/9/2024, 05:45 pm",
    "weight": "3.1 Tonnes",
    "subtotal": "R27,500.00",
    "points": "7 Point",
    "price": "R27,500.00",
    "profit": "R1,800.00",
    "status": "Accepted",
    "action": ""
  },
  {
    "key": "10",
    "quoteNo": "2481",
    "executive": "Fahim",
    "deliveryTime": "22/10/2024, 08:00 am",
    "weight": "2.3 Tonnes",
    "subtotal": "R21,000.00",
    "points": "5 Point",
    "price": "R21,000.00",
    "profit": "R1,100.00",
    "status": "Pending",
    "action": ""
  }
]

const QuoteHistory = () => {
  const [dataSource, setDataSource] = useState(initialData);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

 const navigate = useNavigate();


  return (
    <section className="bg-[#F9F9F9] rounded-3xl">
      <TableHeader
        title="Quote History"
        actionIcons={[
          <LockOutlined key="lock1" style={{ color: '#A1A1A1', fontSize: '22px', cursor: 'pointer' }} />,
          <LockOutlined key="lock2" style={{ color: '#A1A1A1', fontSize: '22px', cursor: 'pointer' }} />
        ]}
        showSearch={true}
        menuIcon={<img className="h-5 w-5" src="/stafflist/three-dot.png" alt="menu" />}
        bgColor="bg-[#f0f0f0]"
      />

      <Table dataSource={dataSource} rowSelection={rowSelection} pagination={{ pageSize: 10 }} scroll={{ x: 1200 }}>
  <Column title="Quote no." dataIndex="quoteNo" key="quoteNo" />
  <Column title="Executive" dataIndex="executive" key="executive" /> 
  <Column title="Delivery Time" dataIndex="deliveryTime" key="deliveryTime" className='text-[#6CA0DC]' />
  <Column title="Weight" dataIndex="weight" key="weight" />
  <Column title="Subtotal" dataIndex="subtotal" key="subtotal" />
  <Column title="Points" dataIndex="points" key="points" />
  <Column title="Price" dataIndex="price" key="price" />
  <Column title="Profit" dataIndex="profit" key="profit" />
  <Column
    title="Status"
    dataIndex="status"
    key="status"
    render={(text) => (
      <span
        style={{
          color: text === 'Accepted' ? '#5DCA54' : 'red',
          fontWeight: '600',
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
      <img src="/pdf.png" alt="pdf" className="cursor-pointer" />

      <button
        onClick={() => {
          navigate(`/quote-details/${record?.quoteNo}`, {
            state: { from: '/quote-history' },
          });
        }}
      >
        <img src="/stafflist/detail.png" alt="detail" className="cursor-pointer" />
      </button>
    </Space>
  )}
/>

</Table>

    </section>
  );
};

export default QuoteHistory;

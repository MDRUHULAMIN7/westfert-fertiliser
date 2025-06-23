import { Table, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MaterialData from '../../../../database/material.json';
import { useNavigate } from 'react-router-dom';

const { Column } = Table;

const MaterialTable = () => {
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
    <>


<Table
  dataSource={MaterialData}
  rowSelection={rowSelection}
  pagination={{ pageSize: 10 }}
  rowKey="materialCode"
>
  {/* Material Code */}
  <Column  title="Material Code" dataIndex="materialCode" key="materialCode" />

  {/* Name with Photo */}
  <Column
    title="Name"
    key="nameWithPhoto"
    render={(_, record) => (
      <div className="flex items-center gap-2">
        <img src={ '/recipe.png'} alt={record.name} className="w-12 h-12 rounded-full " />
        <span className='ml-4'>{record.name}</span>
      </div>
    )}
  />

  {/* Components */}
  <Column title="Components" dataIndex="components" key="components" />

  {/* Weight */}
  <Column title="Weight" dataIndex="weight" key="weight" />

  {/* Price */}
  <Column title="Price" dataIndex="price" key="price" />

  {/* Actions */}
  <Column
    title="Action"
    key="action"
    render={(_, record) => (
      <Space size="middle">

        <img onClick={() => {

                  navigate(
                    `/raw-material/${record?.materialCode}/details`,
                    { state: { from: `/raw-material` } }
                  );
                  ;
                }} src="/stafflist/detail.png" alt="Detail" className="cursor-pointer" />
        <img src="/edit.png" alt="Detail" className="cursor-pointer h-5" />
        <img src="/delete.png" alt="Detail" className="cursor-pointer h-6" />
        
      </Space>
    )}
  />
</Table>



    </>
  );
};

export default MaterialTable;

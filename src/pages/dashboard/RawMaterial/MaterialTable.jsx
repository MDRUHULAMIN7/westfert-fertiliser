import { Table, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialData from '../../../../database/material.json';
import DeleteModal from '../../../modal/DeleteModal';


const { Column } = Table;

const MaterialTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null); 
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
        pagination={{ pageSize: 7 }}
        rowKey="materialCode"
      >
        {/* Material Code */}
        <Column title="Material Code" dataIndex="materialCode" key="materialCode" />

        {/* Name with Photo */}
        <Column
          title="Name"
          key="nameWithPhoto"
          render={(_, record) => (
            <div className="flex items-center gap-2">
              <img
                src="/recipe.png"
                alt={record.name}
                className="w-12 h-12 rounded-full"
              />
              <span className="ml-4">{record.name}</span>
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
              {/* Detail button */}
              <img
                onClick={() => {
                  navigate(`/raw-material/${record?.materialCode}/details`, {
                    state: { from: `/raw-material` },
                  });
                }}
                src="/stafflist/detail.png"
                alt="Detail"
                className="cursor-pointer"
              />

              {/* Edit button */}
              <img
                onClick={() => {
                  navigate(`/raw-material/${record?.materialCode}/edit`, {
                    state: { from: `/raw-material` },
                  });
                }}
                src="/edit.png"
                alt="Edit"
                className="cursor-pointer h-5"
              />

              {/* Delete button */}
              <button>
                <img
                  onClick={() => setDeleteTarget(record?.materialCode)}
                  src="/delete.png"
                  alt="Delete"
                  className="cursor-pointer h-6"
                />
              </button>

              {/* Conditional Modal per row */}
              {deleteTarget === record?.materialCode && (
                <DeleteModal
                  materialCode={record?.materialCode}
                  onClose={() => setDeleteTarget(null)}
                />
              )}
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default MaterialTable;

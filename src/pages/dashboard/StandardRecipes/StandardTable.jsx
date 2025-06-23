import { Table, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StandardData from '../../../../database/standard.json';
import DeleteModal from '../../../modal/DeleteModal';


const { Column } = Table;

const StandardTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null); // <- Track modal target
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
        dataSource={StandardData}
        rowSelection={rowSelection}
        pagination={{ pageSize: 10 }}
        rowKey="recipeCode"
      >
        {/* Material Code */}
        <Column title="Recipe Code" dataIndex="recipeCode" key="recipeCode" />

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
                  navigate(`/standard-recipes/${record?.materialCode}/details`, {
                    state: { from: `/standard-recipes` },
                  });
                }}
                src="/stafflist/detail.png"
                alt="Detail"
                className="cursor-pointer"
              />

              {/* Edit button */}
              <img
                onClick={() => {
                  navigate(`/standard-recipes/${record?.materialCode}/edit`, {
                    state: { from:`/standard-recipes` },
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

export default StandardTable;

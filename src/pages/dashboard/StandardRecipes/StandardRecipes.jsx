import  { useState } from 'react';
import { Table } from 'antd';
import TableHeader from '../../../components/shared/TableHeader';
import StaffAddModal from '../../../modal/StaffAddModal';
import MaterialTable from '../RawMaterial/MaterialTable';
import StandardTable from './StandardTable';



const { Column } = Table;

const StandardRecipes = () => {
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
        title="Standard Recipes"
        actionIcons={[<img src="/file.png" className="h-6" alt="file" />]}
        showSearch={true}
        menuIcon={<img className="h-5 w-5" src="/stafflist/three-dot.png" alt="menu" />}
        actionButton={{
          label: 'Add Fertilizer',
          icon: <img src="/stafflist/plus.png" alt="plus" />
        }}
        bgColor="bg-[#f0f0f0]"
        setModal={setModal}
      />

       <StandardTable></StandardTable>


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

export default StandardRecipes;

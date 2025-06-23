
import { Table, Space } from 'antd';
import TableHeader from '../../../components/shared/TableHeader';;
import MaterialTable from './MaterialTable';


const { Column } = Table;

const RawMaterial = () => {

  

  return (
    <section className="bg-[#F9F9F9] rounded-3xl">
      {/* Top Header */}
      <TableHeader
        title="Raw Material"
        actionIcons={[<img src="/file.png" className="h-6" alt="file" />]}
        showSearch={true}
        menuIcon={<img className="h-5 w-5" src="/stafflist/three-dot.png" alt="menu" />}
        actionButton={{
          label: 'Add Member',
          icon: <img src="/stafflist/plus.png" alt="plus" />,
          pathname:"/rawadd-modal",
          back:"/raw-material"
        }}
        bgColor="bg-[#f0f0f0]"
       
      />

       <MaterialTable></MaterialTable>


    </section>
  );
};

export default RawMaterial;

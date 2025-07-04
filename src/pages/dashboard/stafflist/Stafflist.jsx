
import { LockOutlined } from '@ant-design/icons';
import TableHeader from '../../../components/shared/TableHeader';
import StaffTable from './StaffTable';


const Stafflist = () => {

  

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
          icon: <img src="/stafflist/plus.png" alt="plus" />,
          pathname:"/staffadd-modal",
          back:"/stafflist"
        }}
        bgColor="bg-[#f0f0f0]"
       
      />

      {/* Staff Table */}
  <StaffTable  />


    
    </section>
  );
};

export default Stafflist;

import { Table } from 'antd';
import TableHeader from '../../../components/shared/TableHeader';
import StandardTable from './StandardTable';

const { Column } = Table;

const StandardRecipes = () => {






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
          icon: <img src="/stafflist/plus.png" alt="plus" />,
          pathname:"/standardadd-modal",
          back:"/standard-recipes"
        }}
        bgColor="bg-[#f0f0f0]"

      />

       <StandardTable></StandardTable>
    </section>
  );
};

export default StandardRecipes;

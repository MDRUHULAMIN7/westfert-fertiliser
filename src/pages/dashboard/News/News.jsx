import TableHeader from "../../../components/shared/TableHeader";
import NewsTable from "./NewsTable";


const News = () => {


  return (
    <section>
       <TableHeader
        title="Staff List"
       
        showSearch={true}
      
        actionButton={{
          label: 'Add News',
          icon: <img src="/stafflist/plus.png" alt="plus" />,
          pathname:"/staffadd-modal",
          back:"/news"
        }}
        bgColor="bg-[#f0f0f0]"
       
      />
        <NewsTable></NewsTable>
    </section>
  );
};

export default News;

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
          pathname:`/news/newsadd-modal`,
          back:"/news"
        }}
        bgColor="bg-[#F9F9F9]"
       
      />
        <NewsTable></NewsTable>
    </section>
  );
};

export default News;

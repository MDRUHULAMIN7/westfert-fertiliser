import { useState } from "react";
import TableHeader from "../../../components/shared/TableHeader";
import { useGetNewsQuery } from "../../../redux/api/newsApi2";
import NewsTable from "./NewsTable";


const News = () => {
  const [search, setSearch] = useState('');
  const { data: newsList, isLoading } = useGetNewsQuery(search);


  return (
    <section>
      <TableHeader
        title="Staff List"

        showSearch={true}

        actionButton={{
          label: 'Add News',
          icon: <img src="/stafflist/plus.png" alt="plus" />,
          pathname: `/news/newsadd-modal`,
          back: "/news"
        }}
        bgColor="bg-[#F9F9F9]"
        search={search}
        setSearch={setSearch}

      />
      <NewsTable newsList={newsList} isLoading={isLoading}></NewsTable>
    </section>
  );
};

export default News;

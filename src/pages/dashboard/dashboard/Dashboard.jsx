import Card from "./Card"
import Chart from "./Chart"
import QuotesChart from "./QuotesChart"
import SalesChart from "./SalesChart"


const Dashboard = () => {
  return (
      <div className="">
            <div className="col-span-4">
                <Card />
            </div>
            <div className="col-span-8 ">
                <Chart />
            </div>

            <div className="grid grid-cols-2 items-center gap-5 ">
              <div className=" rounded-lg col-span-1">
                <QuotesChart />
            </div>
            <div className=" rounded-lg col-span-1">
                <SalesChart />
            </div>
            </div>
        </div>
  )
}

export default Dashboard

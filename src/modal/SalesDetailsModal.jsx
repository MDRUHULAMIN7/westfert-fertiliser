import { Select } from "antd";
import Modal from "./Modal";
import { FaLock } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import SalesTable from "../pages/dashboard/stafflist/SalesTable";
import TableHeader from "../components/shared/TableHeader";
 import { useNavigate, useParams } from 'react-router-dom';

const chartData = [
  { name: 'Jan', sale: 12000 },
  { name: 'Feb', sale: 19000 },
  { name: 'Mar', sale: 8000 },
  { name: 'Apr', sale: 14000 },
  { name: 'May', sale: 17000 },
  { name: 'Jun', sale: 15000 },
  { name: 'Jul', sale: 20000 },
  { name: 'Aug', sale: 21000 },
  { name: 'Sep', sale: 18000 },
  { name: 'Oct', sale: 23000 },
  { name: 'Nov', sale: 22000 },
  { name: 'Dec', sale: 25000 },
];

export default function SalesDetailsModal({ isOpen, onClose }) {
  const [selectedYear, setSelectedYear] = useState('Year');
   const navigate = useNavigate();
    const handleYearChange = (value) => {
        setSelectedYear(value);
    };
   
     const { id } = useParams();
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[1200px]  
         p-3  text-gray-800 font-sans" >
        <h1 className="text-2xl font-bold mb-6">Employee Details</h1>

   <div className="flex justify-between items-center mb-4">
         {/* Profile and Chart Section */}
        <div className="bg-bgColor rounded-xl w-full lg:w-2/3  p-4 flex flex-col lg:flex-row justify-between gap-6">
          {/* Profile Info */}
          <div className="flex flex-col gap-4">
            <img
              src="/modal/person-sales.png"
              alt="Profile"
              className="w-60 h-60 rounded-xl object-cover border"
            />
            <div className="flex  ml-10">
             <div> <h2 className=" text-base font-medium text-center mb-1">{ "Asad ujjaman"}</h2>
              <p className="text-sm text-blue-500 font-medium text-center">Sales executive</p></div>
              <FaLock className="text-gray-300 text-lg mt-2 ml-12" />
            </div>
          </div>
{/* info */}
<div className="flex gap-0">
  
  <div className="grid grid-cols-1 text-sm gap-y-2 gap-x-16 flex-1 text-[#5C5C5C]">
  <div className="grid grid-cols-[120px_1fr]">
    <span>Name</span>
    <span>: Asadujjaman Mahfuz</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span>Position</span>
    <span>: Sales executive</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span>Id no.</span>
    <span>: FF4578EDD4</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span>Email</span>
    <span>: Asadujjaman101@bd.com</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span>Contact Number</span>
    <span>: 073 155 4568</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span>Death of birth</span>
    <span>: 12 Nov, 2024</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span>Gender</span>
    <span>: Male</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span>Address</span>
    <span>: 284 Daffodil Dr, Mount Frere, Eastern Cape - 5088 South Africa</span>
  </div>
</div>

<div className="flex items-start  gap-x-5">

  <button
   onClick={
    () => navigate(`/stafflist/${id}/password`
      ,{state: { from: `/stafflist/sales/${id}/details` }}
    ) 
}
  ><img className="h-6" src="/setting.png" alt="" /></button>

  <button onClick={
    () => navigate(`/stafflist/${id}/edit`
      ,{state: { from: `/stafflist/sales/${id}/details` }}
    ) 
}
  
    >
  <img className="h-6" src="/edit.png" alt="" />
</button>

  
  
</div>

</div>



       
        </div>

        {/* chart */}
           <div className="min-w-[250px] w-full lg:w-1/3 px-2 lg:px-6">
         <div className="flex justify-between items-center mb-6">
             <h4 className=" font-medium ">Performance Statistics</h4> 
             
              <div>
                        <Select value={selectedYear} onChange={handleYearChange} className="w-20 h-[30px] ">
                            <Option value="2025">2025</Option>
                            <Option value="2026">2026</Option>
                            <Option value="2027">2027</Option>
                            <Option value="2028">2028</Option>
                            <Option value="2029">2029</Option>
                            <Option value="2030">2030</Option>
                        </Select>
                    </div>
         </div>

            <div className="flex flex-col text-sm mb-4 ">

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <p>Total Sale: <span>R20,204.0</span></p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <p>Monthly Sale: <span>R19,200</span></p>
              </div>

            </div>

            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tickFormatter={(val) => `R${val / 1000}k`} />
                <Tooltip formatter={(val) => `R${val}`} />
                <Bar dataKey="sale" fill="#6DBD44" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
   </div>
            
            <div className="bg-bgColor rounded-3xl px-4">
              {/* table */}
            <TableHeader title="Work list of employees" menuIcon={<img className="h-5 w-5" src="/stafflist/three-dot.png" alt="menu" />}></TableHeader>
             <SalesTable></SalesTable>
            </div>
    
      </div>

    </Modal>
  );
}

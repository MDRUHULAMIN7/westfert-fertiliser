
import Modal from "./Modal";
import { useState } from "react";
import TableHeader from "../components/shared/TableHeader";
 import { useNavigate, useParams } from 'react-router-dom';
import CustomerTable from "../pages/dashboard/ClientsDetails/CustomerTable";


export default function CustomerDetailsModal({ isOpen, onClose, }) {
  if (!isOpen ) return null;
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
        <h1 className="text-2xl font-bold mb-6">Customer Details</h1>

   <div className="flex justify-between items-center mb-4">
         {/* Profile and Chart Section */}
        <div className="bg-bgColor rounded-xl w-full  p-4 flex flex-col md:flex-row  gap-6">
          {/* Profile Info */}
          <div className="flex flex-col gap-4">
            <img
              src="/customer1.png"
              alt="Profile"
              className="w-60 h-60 rounded-xl object-cover border"
            />
            
          </div>
{/* info */}

  
  <div className="grid grid-cols-1 gap-y-0  gap-x-16  text-[#5C5C5C]">
<div className="grid grid-cols-[120px_1fr]  ">
  <span className=" leading-none">Customer Name</span>
  <span className="leading-none">: Asadujjaman Mahfuz</span>
</div>
  <div className="grid grid-cols-[120px_1fr]">
    <span className=" leading-none ">Address</span>
    <span className=" leading-none">: 284 Daffodil Dr, Mount Frere, Eastern Cape - 5088 South Africa</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span className=" leading-none">Serial no.</span>
    <span className=" leading-none">: FF4578EDD4</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span className=" leading-none">Email</span>
    <span className=" leading-none">: Asadujjaman101@bd.com</span>
  </div>
  <div className="grid grid-cols-[120px_1fr]">
    <span className=" leading-none">Contact Number</span>
    <span className=" leading-none">: 073 155 4568</span>
  </div>
 
 


</div>



       
        </div>

       
   </div>
            
            <div className="bg-bgColor rounded-3xl px-4">
              {/* table */}
            <TableHeader title="Quotes list" menuIcon={<img className="h-5 w-5" src="/stafflist/three-dot.png" alt="menu" />}></TableHeader>
             <CustomerTable></CustomerTable>
            </div>
    
      </div>

    </Modal>
  );
}

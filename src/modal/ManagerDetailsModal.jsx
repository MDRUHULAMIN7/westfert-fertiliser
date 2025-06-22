import Modal from "./Modal";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function ManagerDetailsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedYear, setSelectedYear] = useState('Year');
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[1200px] p-3 text-gray-800 font-sans">
        <h1 className="text-2xl font-bold mb-6">Employee Details</h1>

        <div className="flex justify-between items-start gap-6 rounded-xl bg-bgColor p-4 pb-8 flex-col lg:flex-row">
          {/* Profile Info */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/modal/person-sales.png"
              alt="Profile"
              className="w-70 h-70 rounded-xl object-cover border"
            />
               <div className="flex  ml-10">
             <div> <h2 className=" text-base font-medium text-center mb-1">{ "Mr.Nadir"}</h2>
              <p className="text-sm text-[#FF8000] font-medium text-center">Manager</p></div>
              <FaLock className="text-gray-300 text-lg mt-2 ml-12" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-7 text-[#5C5C5C]  w-full">
            {[
              { label: 'Name', value: 'Asadujjaman Mahfuz' },
              { label: 'Position', value: 'Sales executive' },
              { label: 'Id no.', value: 'FF4578EDD4' },
              { label: 'Email', value: 'Asadujjaman101@bd.com' },
              { label: 'Contact Number', value: '073 155 4568' },
              { label: 'Date of Birth', value: '12 Nov, 2024' },
              { label: 'Gender', value: 'Male' },
              { label: 'Address', value: '284 Daffodil Dr, Mount Frere, Eastern Cape - 5088 South Africa' },
            ].map(({ label, value }, idx) => (
              <div key={idx}>
                <span className="font-semibold text-[#A1A1A1]">{label}</span>
                <div className="text-[#5C5C5C] mt-1">: {value}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex  gap-x-6 ">
            <button
              onClick={() =>
                navigate(`/stafflist/${id}/password`, {
                  state: { from: `/stafflist/manager/${id}/details` },
                })
              }
            >
              <img className="h-6 w-8" src="/setting.png" alt="Settings" />
            </button>
            <button
              onClick={() =>
                navigate(`/stafflist/${id}/edit`, {
                  state: { from: `/stafflist/manager/${id}/details` },
                })
              }
            >
              <img className="h-6 w-8" src="/edit.png" alt="Edit" />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

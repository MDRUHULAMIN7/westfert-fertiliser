import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../modal/DeleteModal";

const faqs = [
  {
    id: 1,
    title: "Our Story",
    description: `convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at`,
  },
  {
    id: 2,
    title: "When to use Doctor For You",
    description: `convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at`,
  },
  {
    id: 3,
    title: "Our Mission",
    description: `convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at`,
  },
];

export default function Faq() {
    const navigate = useNavigate()
      const [deleteTarget, setDeleteTarget] = useState(null); 
  return (
    <div className="relative bg-white rounded-3xl p-6 pb-20">
      {/* Top header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">FAQ</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow">
          Add Content
        </button>
      </div>

      {/* FAQ items */}
      <div className="space-y-1">
        {faqs.map((faq) => (
          <div key={faq.id} className="flex items-start  p-4 relative">
            {/* Checkbox */}
            <div className="pt-1 ">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#6B6B6B] border-2 border-gray-300 "
              />
            </div>

            {/* Title + Description */}
            <div className="flex flex-col ml-4 flex-grow pr-14">
              <h2 className="text-[#636363] font-medium text-[16px]  rounded-lg shadow p-3  mb-2">
                {faq.title}
              </h2>
              <p className="text-[#818181] text-sm  rounded-lg shadow p-3">{faq.description}</p>
            </div>

            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-y-6 text-gray-400 text-lg">
              
  <button
   onClick={
    () => navigate(`/faq/${faq.id}/edit`
      ,{state: { from: `/faq` }}
    ) 
}
  ><img className="h-5" src="/edit.png" alt="" /></button>
              <button>
                <img
                  onClick={() => setDeleteTarget(faq.id)}
                  src="/delete.png"
                  alt="Delete"
                  className="cursor-pointer h-6"
                />
              </button>
                 {/* Conditional Modal per row */}
                            {deleteTarget === faq.id && (
                              <DeleteModal
                                materialCode={faq.id}
                                onClose={() => setDeleteTarget(null)}
                              />
                            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

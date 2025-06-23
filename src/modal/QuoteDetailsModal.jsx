import Modal from "./Modal";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function QuoteDetailsModal({ isOpen, onClose }) {
  const { id } = useParams();

  if (!isOpen) return null;

  const quoteDetailsData = {
    quoteNo: "2472",
    executive: "Asad ujjaman",
    customer: {
      name: "X Mans Farm",
      address: "1 Emerald Blvd, Modderfontein, Lethabong, Gauteng 1609",
    },
    warehouse: {
      name: "Warehouse 1",
      address: "2492 Sandown Rd, Brakpan, Gauteng-1542 South Africa",
    },
    distance: "20 km",
    acceptanceDate: "12/1/2024, 12:30 am",
    quoteTime: "12/1/2024, 12:30 am",
    status: "Pending",
    recipe: {
      name: "NPKC Recipe",
      image: "/recipe.png",
      item: "20 Pcs",
      weight: "20 Tonnes",
      price: "R400",
    },
    summary: {
      subtotal: "R400",
      freight: "R350",
      points: "10%",
      total: "R1180",
    },
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[1200px] p-6 text-gray-800 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Quote Details</h1>
        </div>

        {/* Quote Status */}
        <div className="mb-4 h-full md:h-[99px] bg-bgColor rounded-2xl flex items-center justify-between p-4">
          <h1>
            <span className="font-medium text-[#797761]">Quotes status:</span>
            <span
              className={`ml-2 ${quoteDetailsData.status === "Accepted" ? "text-primary" : "text-red-500"
                } font-medium`}
            >
              {quoteDetailsData.status}
            </span>
          </h1>

          <button className="flex items-center gap-2 text-black bg-[#F4F4F4] p-3 rounded-md">
            <img src="/pdf.png" className="text-lg" />
            <span className="text-sm font-medium">Print</span>
          </button>
        </div>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 bg-bgColor rounded-xl p-6">
          <div>
            <p className="text-black font-medium">Quote. no.</p>
            <p className="text-[#5C5C5C] font-semibold mt-3">{quoteDetailsData.quoteNo}</p>
          </div>
          <div>
            <p className="text-black font-medium">Executive</p>
            <p className="text-[#5C5C5C] font-semibold mt-3">{quoteDetailsData.executive}</p>
          </div>
          <div>
            <p className="text-black font-medium">Customer Address</p>
            <p className="text-[#5C5C5C] font-semibold mt-3 flex gap-2 items-center">
              {quoteDetailsData.customer.name}
              <img src="/stafflist/detail.png" alt="Detail" className="h-5" />
            </p>
            <p className="flex items-center gap-1 text-xs text-gray-600 mt-3 ml-4 leading-normal">
              <FaMapMarkerAlt size={32} className="text-red-500 h-5 mr-2" />
              {quoteDetailsData.customer.address}
            </p>
          </div>
          <div>
            <p className="text-black font-medium">Warehouse Address</p>
            <p className="text-[#5C5C5C] font-semibold mt-3">{quoteDetailsData.warehouse.name}</p>
            <p className="flex items-start gap-1 text-xs text-gray-600 mt-3 ml-5 leading-normal">
              <FaMapMarkerAlt size={24} className="text-red-500" />
              {quoteDetailsData.warehouse.address}
            </p>
          </div>
          <div>
            <p className="text-black font-medium">Distance</p>
            <p className="flex items-center gap-3 text-blue-500 font-semibold mt-3">
              <img src="/location.png" /> {quoteDetailsData.distance}
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <p className="text-black font-medium">Acceptance Date</p>
              <p className="text-[#006EEE] font-semibold mt-3">{quoteDetailsData.acceptanceDate}</p>
            </div>
            <div className="mt-6">
              <p className="font-medium text-black">Quote time:</p>
              <p className="mt-3 text-[#A1A1A1]">{quoteDetailsData.quoteTime}</p>
            </div>
          </div>
        </div>

        {/* Recipe & Summary */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Recipe Details */}
          <div className="col-span-2 bg-bgColor rounded-xl p-4">
            <div className="grid grid-cols-4 font-medium text-[#5C5C5C] mb-4">
              <span>Recipe Name</span>
              <span className="text-center">Item</span>
              <span className="text-center">Weight</span>
              <span className="text-right">Price</span>
            </div>

            <div className="grid grid-cols-4 items-center text-[#5C5C5C]">
              <div className="flex items-center gap-2">
                <img
                  src={quoteDetailsData.recipe.image}
                  alt="recipe"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span>{quoteDetailsData.recipe.name}</span>
              </div>
              <span className="text-center">{quoteDetailsData.recipe.item}</span>
              <span className="text-center">{quoteDetailsData.recipe.weight}</span>
              <span className="text-right text-primary">
                {quoteDetailsData.recipe.price}
              </span>
            </div>

            <div className="mt-32 border-t p-4 text-sm text-[#6CA0DC] grid grid-cols-4">
              <span>1 Product</span>
              <span className="text-center">{quoteDetailsData.recipe.item}</span>
              <span className="text-center">{quoteDetailsData.recipe.weight}</span>
              <span className="text-right font-semibold">{quoteDetailsData.recipe.price}</span>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-bgColor rounded-xl p-4 text-[#5C5C5C]">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{quoteDetailsData.summary.subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Freight & Logistics</span>
              <span>{quoteDetailsData.summary.freight}</span>
            </div>
            <p className="text-xs text-primary mb-2">Freight based on rate, weight and distance</p>
            <div className="flex justify-between mb-2 text-xs text-blue-600">
              <span className="cursor-pointer">Adjust Points</span>
              <span>{quoteDetailsData.summary.points}</span>
            </div>
            <div className="border-t mt-3 pt-5 flex justify-between">
              <span>Total</span>
              <span className="text-[#4D8630]">{quoteDetailsData.summary.total}</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

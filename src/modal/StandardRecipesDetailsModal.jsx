import Modal from "./Modal";

export default function StandardRecipesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[500px] p-6 font-sans text-gray-800">
        <h1 className="text-xl font-semibold mb-4">Fertilizer Details</h1>

        <div className="bg-bgColor rounded-2xl p-4 ">
          {/* Fertilizer Name & Image */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/material.png"
              alt="Fertilizer"
              className="w-32 h-24 rounded-xl object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">NPKC Fertiliser</h2>
              <p className="text-green-600 text-sm mt-3">28N + P + K + Zn + s</p>
            </div>
          </div>

          {/* Weight & Price */}
          <div className="flex flex-col items-start justify-start gap-4 mb-4 p-2">
            <div>
              <p className=" text-[#767676] mb-1">Weight</p>
              <p className="font-semibold text-[#5C5C5C]">1 tn</p>
            </div>
            <div>
              <p className=" text-[#767676] mb-1">Price</p>
              <p className="text-[#4D8630] font-semibold ">R200</p>
            </div>
          </div>

          {/* Components */}
          <div className="mb-4 p-2 text-[#767676]">
            <p className="font-medium mb-2">Components</p>
            <div className="mb-2">
              <div className="flex justify-between ">
                <span>Potassium (K)</span>
                <span className="text-[#767676] bg-[#F4F4F4] px-4 py-2 rounded-md">40%</span>
              </div>
             
            </div>
            <div className="mb-2">
              <div className="flex justify-between">
                <span>Phosphorus (P)</span>
                <span className="text-[#767676] bg-[#F4F4F4] px-4 py-2 rounded-md">20%</span>
              </div>
              
            </div>
            <div>
              <div className="flex justify-between ">
                <span>Nitrogen (N)</span>
                <span className="text-[#767676] bg-[#F4F4F4] px-4 py-2 rounded-md">40%</span>
              </div>
              
            </div>
          </div>


          <div className="mb-3 ">
            <p className=" font-medium mb-1 text-[#767676]">Ingredients</p>
            <p className="text-sm text-[#5C5C5C]">
              chloride (KCl), sulfate ( K 2SO 4), or nitrate ( KNO 3 )
            </p>
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-[#767676] font-medium mb-1">Details</p>
            <p className="text-sm text-[#5C5C5C] leading-relaxed">
              nibh consectetur volutpat at, nibh viverra massa Nam placerat elit. non
              efficitur. vitae luctus at ultrices urna nisi felis, In Morbi nec Nunc
              non orci elit leo, sit at, gravida et, est. Nullam Cras Nullam Ut elit.
              malesuada at, tincidunt quam fringilla convallis. nisi Lorem ultrices
              Nullam ullamcorper elementum
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

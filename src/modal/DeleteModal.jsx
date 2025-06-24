import { FiX } from 'react-icons/fi';

export default function DeleteModal({ materialCode, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-md shadow-lg p-10 text-center">
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute text-xl top-3 right-3 text-gray-700 hover:text-black"
        >
          <FiX size={20} />
        </button>

        {/* Warning text */}
        <h2 className="text-lg font-semibold text-red-600 mb-4">Are you sure !</h2>

        {/* Subtext */}
        <p className="text-gray-500 mb-10  text-base">
          Do you want to Delete : {materialCode} ?
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-x-6">
          <button
            onClick={onClose}
            className="border border-primary text-primary px-6 py-2 text-lg rounded-md hover:bg-green-50 transition"
          >
            Cancel
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 text-lg rounded-md hover:bg-red-700 transition"
            onClick={() => {
              console.log(`Deleting ${materialCode}`);
              onClose();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}


import Modal from './Modal';


export default function ManagerDetailsModal({ isOpen, onClose }) {


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[1000px] p-3 pt-4">
        <h1 className="text-2xl text-gray-800">Manager Details</h1>

        <div className='bg-bgColor mt-6 p-4 rounded-2xl'>

        </div>
      </div>
    </Modal>
  );
}

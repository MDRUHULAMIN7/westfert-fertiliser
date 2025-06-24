import { useEffect, useRef, useState } from 'react';
import { Form, Input, Spin } from 'antd';
import { IoMdClose } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

export default function FaqEditModal({ isOpen, onClose }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const modalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const backPath = location.state?.from || "/stafflist";

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      console.log('FAQ Updated:', values);
      setLoading(false);
      onClose();
    }, 1500);
  };



  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-bgColor min-w-[592px] max-w-[600px] max-h-[500px]  p-6 relative"
      >
        {/* Close Button (X) */}
        <button
          onClick={() => navigate(backPath)}
          className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl"
        >
          <IoMdClose />
        </button>

        {/* Modal Header */}
        <div className="border-b pb-3 mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Add/Edit FAQ</h1>
        </div>

        {/* Form */}
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="text-[#636363]"
        >
          <Form.Item
            label="Question"
            className='text-[#636363]'
            name="question"
            rules={[{ message: 'Please enter the question' }]}
          >
            <Input required placeholder="Our Story" className="h-10 text-[#636363]" />
          </Form.Item>

          <Form.Item
            label="Answer"
            name="answer"
            rules={[{ message: 'Please enter the answer' }]}
          >
            <Input.TextArea
              placeholder="Enter answer"
              required
              rows={6}
              className="rounded-md text-[#333]"
            />
          </Form.Item>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-primary hover:bg-green-600 text-white px-6 py-2 rounded-lg min-w-[160px] text-center"
            >
              {loading ? <Spin /> : 'Save & Change'}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

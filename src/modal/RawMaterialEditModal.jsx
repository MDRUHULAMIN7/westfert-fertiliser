import { Form, Input, Select, Spin } from 'antd';
import Modal from './Modal';
import { useState } from 'react';

export default function RawMaterialEditModal({ isOpen, onClose }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      console.log('Profile Updated:', values);
      setLoading(false);
    }, 1500); // Simulate delay for loading icon
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:min-w-[1200px] p-3 pt-5">
        <h1 className="text-2xl font-medium text-gray-800 mb-4">Add/Edit Recipes or Raw Material</h1>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="bg-bgColor mt-6 p-6 rounded-2xl text-[#636363]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#636363]">
            <div className='text-[#636363]'>
              <Form.Item label="Name" name="name">
                <Input placeholder="Enter name" required className="h-10 rounded-md text-[#636363]" />
              </Form.Item>

              <div className="grid grid-cols-3 gap-2">
                <Form.Item label="1 Tonne Sling" name="price1">
                  <Input required placeholder="R0.00" className="h-10 rounded-md text-[#636363]" />
                </Form.Item>
                <Form.Item label="2 Tonne Sling" name="price2">
                  <Input required placeholder="R0.00" className="h-10 rounded-md text-[#636363]" />
                </Form.Item>
                <Form.Item label="1 Pallet" name="price3">
                  <Input required placeholder="R0.00" className="h-10 rounded-md text-[#636363]" />
                </Form.Item>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Form.Item label="Skoon Price" name="skoonPrice">
                  <Input required placeholder="R0.00" className="h-10 rounded-md text-[#636363]" />
                </Form.Item>
                <Form.Item label="Mengsel Price" name="mengselPrice">
                  <Input required placeholder="R0.00" className="h-10 rounded-md text-[#636363]" />
                </Form.Item>
              </div>

              <Form.Item label="Weight" name="weight">
                <Select required placeholder="Select weight" className="h-10 rounded-md text-[#636363]">
                  <Select.Option value="1 tn">1 tn</Select.Option>
                  <Select.Option value="2 tn">2 tn</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Ingredients" name="ingredients">
                <Input required placeholder="Enter ingredients" className="h-10 rounded-md text-[#636363]" />
              </Form.Item>

              <Form.Item label="Details" name="details">
                <Input.TextArea placeholder="Enter details" rows={4} className="rounded-md text-[#636363]" />
              </Form.Item>
            </div>

            <div>
              <Form.Item  label="Profile Picture" required name="profilePic">
                <label className="border border-gray-300 pt-10 pb-16 rounded-lg bg-white flex flex-col items-center justify-center cursor-pointer">
                  <img src="/upload.png" alt="Upload" className="w-10 h-10 mb-2" />
                  <span className="text-sm text-[#636363]">Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        console.log('Selected File:', file);
                      }
                    }}
                  />
                </label>
              </Form.Item>

              <h1 className='text-lg ml-2 mb-2'>Raw Material</h1>
              <div className="border p-4 pb-16 rounded-lg ">
                <div className="flex justify-between mb-2">
                  <span>Potassium (K)</span >
                  <span className="bg-[#F4F4F4] px-4 py-2 rounded-md text-[#636363]">40%</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Phosphorus(P)</span>
                  <span className="bg-[#F4F4F4] px-4 py-2 rounded-md text-[#636363]">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Nitrogen (N)</span>
                  <span className="bg-[#F4F4F4] px-4 py-2 rounded-md text-[#636363]">40%</span>
                </div>
              </div>

              <Form.Item className="text-right mt-20">
                <button
                  type="submit"
                  className="bg-primary w-[140px] hover:bg-green-600 text-white font-medium  py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? <Spin className="w-full " /> : 'Save & Change'}
                </button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

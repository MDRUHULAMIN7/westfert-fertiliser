import { Form, Input, Select, DatePicker, Spin } from 'antd';
import Modal from './Modal';
import { useState } from 'react';

export default function EditProfileModal({ isOpen, onClose }) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {

        setLoading(true)

        setTimeout(() => {
            console.log('Profile Updated:', values);
            setLoading(false);
        }, 1500);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-full lg:min-w-[1200px]  p-3 pt-5">
                <h1 className="text-2xl font-medium text-gray-800">Edit Profile</h1>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    className="bg-bgColor h-[700px] mt-6 p-6 rounded-2xl text-[#636363]"
                >
                    {/* Profile Picture */}
                    <Form.Item
                        label={<span className="text-[#636363]">Profile Picture</span>}
                        name="profilePic"
                        valuePropName="file"
                        rules={[{ required: true, message: 'Please select an image' }]}
                        className="w-full lg:w-[47.5%]"
                    >
                        <label className="border border-gray-300 p-4 rounded-lg bg-white flex flex-col items-center justify-center cursor-pointer">
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

                    {/* Input Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                        <Form.Item
                            label={<span className="text-[#636363]">Name</span>}
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input placeholder="Enter your name" className="h-10 rounded-md text-[#636363]" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-[#636363]">Date of Birth</span>}
                            name="dob"
                            rules={[{ required: true, message: 'Please pick a date' }]}
                        >
                            <DatePicker
                                placeholder="Select date of birth"
                                className="w-full h-10 rounded-md text-[#636363]"
                                format="DD MMM, YYYY"
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-[#636363]">Contact Number</span>}
                            name="contact1"
                            rules={[{ required: true, message: 'Please enter contact number' }]}
                        >
                            <Input placeholder="Primary contact number" className="h-10 rounded-md text-[#636363]" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-[#636363]">Gender</span>}
                            name="gender"
                            rules={[{ required: true, message: 'Please select gender' }]}
                        >
                            <Select placeholder="Select gender" className="h-10 rounded-md text-[#636363]">
                                <Select.Option value="Male">Male</Select.Option>
                                <Select.Option value="Female">Female</Select.Option>
                                <Select.Option value="Other">Other</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-[#636363]">Alternative Contact</span>}
                            name="contact2"
                            rules={[{ required: true, message: 'Please enter contact number' }]}
                        >
                            <Input placeholder="Alternative contact number" className="h-10 rounded-md text-[#636363]" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-[#636363]">Address</span>}
                            name="address"
                            rules={[{ required: true, message: 'Please enter address' }]}
                        >
                            <Input placeholder="Enter your address" className="h-10 rounded-md text-[#636363]" />
                        </Form.Item>
                    </div>

                    <Form.Item className="text-center mt-6">
                        <button
                            type="submit"
                            className="bg-primary hover:bg-green-600 w-36 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300"
                        >
                            {loading ? <Spin className="w-full " /> : 'Save & Change'}
                        </button>
                    </Form.Item>
                </Form>

            </div>
        </Modal>
    );
}

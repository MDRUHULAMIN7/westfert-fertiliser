import { Form, Input, Select, Spin } from 'antd';
import { useState } from 'react';
import Modal from './Modal';
import Button from '../components/shared/Button';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import SuspenseWithLoader from '../components/shared/SuspenseWithLoader';

export default function StaffAddModal({ isOpen, onClose }) {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  // Form submit
  const onFinish = (values) => {
    setLoading(true)

    setTimeout(() => {
      console.log('Account Created with:', values);
      setLoading(false);
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[1200px] p-3 pt-4">
        <h1 className="text-2xl text-gray-800">Create Profile</h1>
        <SuspenseWithLoader>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="font-medium bg-bgColor mt-6 p-4 rounded-2xl"
          >
            <div className="flex flex-col w-full lg:w-[470px] mx-auto space-y-4">
              {/* User Name */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">User Name</span>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Ruhul Amin" className="rounded-md h-10 mt-2" />
                </Form.Item>
              </div>

              {/* Designation */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">Designation Type</span>
                <Form.Item
                  name="designation"
                  rules={[{ required: true, message: 'Please select a designation' }]}
                >
                  <Select
                    placeholder="Select designation"
                    allowClear
                    className="rounded-md h-10 mt-2"
                  >
                    <Select.Option value="Sales Executive">Sales Executive</Select.Option>
                    <Select.Option value="Manager">Manager</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              {/* Email */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">Email</span>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input type="email" placeholder="tk@mymza.co.za" className="rounded-md h-10 mt-2" />
                </Form.Item>
              </div>

              {/* Password */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">Password</span>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please enter password' }]}
                >
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="rounded-md h-10 mt-2 pr-10"
                    suffix={
                      showPassword ? (
                        <EyeInvisibleOutlined
                          onClick={() => setShowPassword(false)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <EyeOutlined
                          onClick={() => setShowPassword(true)}
                          className="cursor-pointer"
                        />
                      )
                    }
                  />
                </Form.Item>
              </div>

              {/* Confirm Password */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">Confirm Password</span>
                <Form.Item
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: 'Please confirm password' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    className="rounded-md h-10 mt-2 pr-10"
                    suffix={
                      showConfirmPassword ? (
                        <EyeInvisibleOutlined
                          onClick={() => setConfirmShowPassword(false)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <EyeOutlined
                          onClick={() => setConfirmShowPassword(true)}
                          className="cursor-pointer"
                        />
                      )
                    }
                  />
                </Form.Item>
              </div>
            </div>

            {/* Submit */}
            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full lg:w-[470px] mx-auto bg-primary text-white rounded-md h-10"
                style={{
                  borderColor: '#188754',
                }}
              >
                {loading ? <Spin className="w-full " /> : 'Create Account'}
              </Button>
            </Form.Item>
          </Form></SuspenseWithLoader>
      </div>
    </Modal>
  );
}

import { Form, Input, Spin } from 'antd';
import Modal from './Modal';
import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export default function ChangePasswordModal({ isOpen, onClose }) {
  const [form] = Form.useForm();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true)

    setTimeout(() => {
      console.log('Password Changed:', values);
      setLoading(false);
    }, 1500);

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[1200px] p-3 pt-4 mx-auto">
        <h1 className="text-2xl text-gray-800">Change Password</h1>

        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="font-medium bg-bgColor h-[690px]  mt-6  p-4 pt-20 rounded-2xl flex flex-col   items-center"
        >
          {/* Old Password */}
          <div className="w-full md:w-[480px]">
            <span className="text-[#636363] text-[16px] font-semibold">Old Password</span>
            <Form.Item
              name="oldPassword"
              rules={[{ required: true, message: 'Please enter old password' }]}
            >
              <Input
                type={showOldPassword ? 'text' : 'password'}
                placeholder="Old Password"
                className="rounded-md h-10 mt-1 pr-10 w-full text-[#636363]"
                suffix={
                  showOldPassword ? (
                    <EyeInvisibleOutlined
                      onClick={() => setShowOldPassword(false)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <EyeOutlined
                      onClick={() => setShowOldPassword(true)}
                      className="cursor-pointer"
                    />
                  )
                }
              />
            </Form.Item>
          </div>

          {/* New Password */}
          <div className="w-full md:w-[480px]">
            <span className="text-[#636363] text-[16px] font-semibold">New Password</span>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter new password' }]}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                className="rounded-md h-10 mt-1 pr-10 w-full text-[#636363]"
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
          <div className="w-full md:w-[480px]">
            <span className="text-[#636363] text-[16px] font-semibold">Confirm Password</span>
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
                className="rounded-md h-10 mt-1 pr-10 w-full text-[#636363]"
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

          {/* Submit Button */}
          <Form.Item className="mt-6">
            <button
              type="submit"
              className="bg-primary mx-auto hover:bg-green-600  text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 w-[180px]"
            >
              {loading ? <Spin className="w-full " /> : 'Save & Change'}
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

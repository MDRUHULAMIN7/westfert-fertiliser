
import { Form, Input, Spin } from 'antd';
import { useState } from 'react';
 import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
const SignIn = () => {
     const [form] = Form.useForm();
      const [showPassword, setShowPassword] = useState(false);
        const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true)

    setTimeout(() => {
      console.log('Password Changed:', values);
      setLoading(false);
    }, 1500);

   
  };
  return (
    <div className="bg-[#FDFDFD] p-6 shadow-md ">

        <h1 className="text-[#222222] text-xl">
            Sign In
        </h1>

          <Form
          form={form}
          onFinish={onFinish}>


 <div className="w-full md:w-[480px]">
            <span className="text-[#636363] text-[16px] font-semibold"> Password</span>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter a password' }]}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder=" Password"
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

                {/* Submit Button */}
          <Form.Item className="mt-6">
            <button
              type="submit"
              className="bg-primary mx-auto text-lg hover:bg-green-600  text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 w-full"
            >
              {loading ? <Spin className="w-full " /> : 'Sign in'}
            </button>
          </Form.Item>
          </div>
          </Form>

    </div>
  )
}

export default SignIn
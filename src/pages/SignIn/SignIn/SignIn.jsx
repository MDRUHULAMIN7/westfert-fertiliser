
import { Form, Input, Select, Spin } from 'antd';
import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const SignIn = () => {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true)

    setTimeout(() => {
      console.log('sign in', values);
      setLoading(false);
    }, 1500);


  };
  return (
    <div className="bg-[#FDFDFD] p-8 shadow-lg ">

      <h1 className="text-[#222222] text-xl font-semibold">
        Sign In
      </h1>

      <Form
        form={form}
        onFinish={onFinish}
        className='mt-2  md:w-[480px] w-full '>

        <div className='mt-6 '>
          <span className="text-[#636363] text-[16px]  font-medium">Email</span>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input type="email" placeholder="tk@mymza.co.za" className="rounded-xl h-11 mt-2" />
          </Form.Item>
        </div>


        <div>
          <span className="text-[#636363] text-[16px] font-medium">Designation Type</span>
          <Form.Item
            name="designation"
            rules={[{ required: true, message: 'Please select a designation' }]}
          >
            <Select
              placeholder="Admin/Manager"
              allowClear
              className="mt-2 custom-select h-11"
              dropdownClassName="custom-dropdown"
            >
              <Select.Option value="Admin">Admin</Select.Option>
              <Select.Option value="Manager">Manager</Select.Option>
            </Select>
          </Form.Item>

        </div>



        <div>
          <span className="text-[#636363] text-[16px] font-semibold"> Password</span>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter a password' }]}
          >
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder=" Password"
              className="rounded-xl  h-11 mt-2 pr-6 w-full text-[#636363]"
              suffix={
                showPassword ? (
                  <EyeInvisibleOutlined

                    onClick={() => setShowPassword(false)}
                    className="cursor-pointer text-lg"
                  />
                ) : (
                  <EyeOutlined
                    onClick={() => setShowPassword(true)}
                    className="cursor-pointer text-lg"
                  />
                )
              }
            />
          </Form.Item>
        </div>
   <div className="flex justify-between items-center mt-2 mb-4">
  <Form.Item
    name="remember"
    valuePropName="checked"
    noStyle
  >
    <label className="flex items-center gap-2 text-[#636363] text-base cursor-pointer">
      <input type="checkbox" value={false} className="accent-primary w-5 h-5 cursor-pointer" />
      Remember Password
    </label>
  </Form.Item>

  <Link to={'/'} className="text-base text-blue-400 hover:text-primary">
    Forgot Password?
  </Link>
</div>


        {/* Submit Button */}
        <Form.Item className="mt-6">
          <button
            type="submit"
            className="bg-primary mx-auto text-lg hover:bg-green-600  text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 w-full"
          >
            {loading ? <Spin className="w-full " /> : 'Sign in'}
          </button>
        </Form.Item>

      </Form>

    </div>
  )
}

export default SignIn
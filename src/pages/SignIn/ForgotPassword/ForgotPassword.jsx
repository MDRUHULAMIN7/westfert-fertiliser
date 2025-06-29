
import { Form, Input,Spin } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const onFinish = (values) => {
  setLoading(true);

  setTimeout(() => {

    console.log('Email:', values.email );

    setLoading(false);
    navigate(`/signin/code/${values.email}`);
  }, 1500);
};


  return (
    <div className="bg-[#FDFDFD]  p-8  pt-10 custom-shadow">
        
    
      <h1   className="text-[#222222] text-2xl font-semibold">
       Forgot Password ?
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


        



        


        {/* Submit Button */}
        <Form.Item className="mt-6">
          <button
            type="submit"
            className="bg-primary mx-auto text-lg hover:bg-green-600  text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 w-full"
          >
            {loading ? <Spin className="w-full " /> : 'Send Code in'}
          </button>
        </Form.Item>

      </Form>
  

    </div>
  )
}

export default ForgotPassword
import { Form, Spin } from 'antd';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Code = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [isMatch, setIsMatch] = useState(false);

  const correctCode = "654321"; // preset correct code
  const navigate = useNavigate()
  const {email} = useParams()
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // only digits
    const updated = [...digits];

    if (value.length <= 1) {
      updated[index] = value;
      setDigits(updated);

      // Auto-focus next input if exists
      if (value && e.target.nextElementSibling) {
        e.target.nextElementSibling.focus();
      }

      // Check match
      const enteredCode = updated.join('');
      setIsMatch(enteredCode.length === 6 && enteredCode === correctCode);
    }
  };

  const onFinish = () => {
    const enteredCode = digits.join('');
    if (enteredCode !== correctCode) return;

    setLoading(true);
    setTimeout(() => {
      console.log('✅ Code matched:', enteredCode);
        navigate(`/signin/${email}/newpassword`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-[#FDFDFD] p-8 pt-10 custom-shadow">
      <h1 className="text-[#222222] text-2xl font-semibold">Confirm Verification Code</h1>

      <Form form={form} onFinish={onFinish} className="mt-2 md:w-[480px] w-full">
        <div className="mt-6">
       
          <div className="flex gap-3 justify-between w-full mt-4">
            {digits.map((digit, index) => (
              <input
                key={index}
                value={digit}
                maxLength={1}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-16 mx-0.5 h-14 border border-gray-300 rounded-lg text-center text-lg outline-none focus:border-primary text-[#222]"
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
        </div>

        <Form.Item className="mt-6">
          <button
            type="submit"
            disabled={!isMatch}
            className={`${
              isMatch ? 'bg-primary hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'
            } text-white text-md font-medium px-6 py-3 rounded-lg w-full transition-all duration-300 `}
          >
            {loading ? <Spin className="w-full" /> : 'Confirm Code'}
          </button>
        </Form.Item>
      </Form>
      <div className='text-center text-black'><h1>You have not received the email?  <span className='text-blue-400 cursor-pointer font-medium'>Resend</span></h1></div>
    </div>
  );
};

export default Code;

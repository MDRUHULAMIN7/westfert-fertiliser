import { Form, Input, Spin, } from 'antd';
import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';

const SetNewPassword = () => {
    const [form] = Form.useForm();
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const oldPassword = "password1234"; // predefined old password

    const onFinish = ({ old, newPassword }) => {
        setLoading(true);

        setTimeout(() => {
            if (old === oldPassword) {
                console.log("New password:", newPassword);
                toast.success("Password updated successfully");
            } else {
                toast.error(" password does not match");
                console.log("Old password does not match")
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="bg-[#FDFDFD] p-8 pt-10 custom-shadow">
            <h1 className="text-[#222222] text-xl font-semibold">Set a new password</h1>
            <p className='text-[#6B6B6B] my-4'>Create a new password. Ensure it differs from <br /> previous ones for security</p>

            <Form form={form} onFinish={onFinish} className='mt-2 md:w-[480px] w-full'>
                {/* Old Password */}
                <div>

                    <Form.Item
                        name="old"
                        rules={[{ required: true, message: 'Please enter your old password' }]}
                    >
                        <Input
                            type={showOldPassword ? 'text' : 'password'}
                            placeholder="Old Password"
                            className="rounded-xl h-11 mt-2 pr-6 w-full text-[#636363]"
                            suffix={
                                showOldPassword ? (
                                    <EyeInvisibleOutlined onClick={() => setShowOldPassword(false)} className="cursor-pointer text-lg" />
                                ) : (
                                    <EyeOutlined onClick={() => setShowOldPassword(true)} className="cursor-pointer text-lg" />
                                )
                            }
                        />
                    </Form.Item>
                </div>

                {/* New Password */}
                <div>

                    <Form.Item
                        name="newPassword"
                        rules={[{ required: true, message: 'Please enter your new password' }]}
                    >
                        <Input
                            type={showNewPassword ? 'text' : 'password'}
                            placeholder="New Password"
                            className="rounded-xl h-11 mt-2 pr-6 w-full text-[#636363]"
                            suffix={
                                showNewPassword ? (
                                    <EyeInvisibleOutlined onClick={() => setShowNewPassword(false)} className="cursor-pointer text-lg" />
                                ) : (
                                    <EyeOutlined onClick={() => setShowNewPassword(true)} className="cursor-pointer text-lg" />
                                )
                            }
                        />
                    </Form.Item>
                </div>

                {/* Submit Button */}
                <Form.Item className="mt-6">
                    <button
                        type="submit"
                        className="bg-primary mx-auto text-lg hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 w-full"
                    >
                        {loading ? <Spin className="w-full" /> : 'Confirm'}
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SetNewPassword;
import { Form, Input, Spin } from 'antd';
import { useState } from 'react';
import Modal from './Modal';
import Button from '../components/shared/Button';
import SuspenseWithLoader from '../components/shared/SuspenseWithLoader';
import { useCreateNewsMutation, useGetNewsQuery } from '../redux/api/newsApi2';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function NewsAddModal({ isOpen, onClose }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { refetch, isLoading } = useGetNewsQuery();
  const [createNews] = useCreateNewsMutation();
  const navigate = useNavigate()


  if (isLoading) {
    return <SuspenseWithLoader></SuspenseWithLoader>
  }
  const onFinish = async (values) => {
    setLoading(true)
    try {
      console.log(values)
      const res = await createNews(values).unwrap();
      console.log('News Created with:', res);
      toast.success("News Created Successfully");
      navigate(`/news/${res?.news?._id}/details`, {
        state: { from: '/news' },
      })
      refetch()
      form.resetFields();
      setLoading(false)

    } catch (error) {
      console.error('Failed to create news:', error?.data?.message || error.message);
      setLoading(false)


    }
  };


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[800px] p-3 pt-4">
        <h1 className="text-2xl text-gray-800">Create News</h1>
        <SuspenseWithLoader>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="font-medium bg-bgColor mt-6 p-4 rounded-2xl"
          >
            <div className="flex flex-col w-full lg:w-[470px] mx-auto space-y-4">
              {/* userId */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">User ID</span>
                <Form.Item
                  name="userId"
                  rules={[{ required: true, message: 'Please enter User ID', type: Number }]}
                >
                  <Input placeholder="Enter User ID" type='number' className="rounded-md h-10 mt-2" />
                </Form.Item>
              </div>

              {/* title */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">Title</span>
                <Form.Item
                  name="title"
                  rules={[{ required: true, message: 'Please enter Title' }]}
                >
                  <Input placeholder="News Title" className="rounded-md h-10 mt-2" />
                </Form.Item>
              </div>

              {/* description */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">Description</span>
                <Form.Item
                  name="description"
                  rules={[{ required: true, message: 'Please enter Description' }]}
                >
                  <Input.TextArea rows={4} placeholder="Write news details..." className="mt-2" />
                </Form.Item>
              </div>

              {/* image */}
              <div>
                <span className="text-[#636363] text-[16px] font-medium">Image URL</span>
                <Form.Item
                  name="image"
                  rules={[{ required: true, message: 'Please provide an Image URL', type: URL }]}
                >
                  <Input type='url' placeholder="https://example.com/image.jpg" className="rounded-md h-10 mt-2" />
                </Form.Item>
              </div>
            </div>

            {/* Submit Button */}
            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full lg:w-[470px] mx-auto bg-primary text-white rounded-md h-10"
                style={{ borderColor: '#188754' }}
              >
                {loading ? <Spin className="w-full" /> : 'Create News'}
              </Button>
            </Form.Item>
          </Form>
        </SuspenseWithLoader>
      </div>
    </Modal>
  );
}

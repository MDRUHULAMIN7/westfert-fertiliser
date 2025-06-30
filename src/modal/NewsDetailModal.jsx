import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import SuspenseWithLoader from '../components/shared/SuspenseWithLoader';
import { useGetNewsByIdQuery } from '../redux/api/newsApi2';
import { useParams, useNavigate } from 'react-router-dom';
import { TbPencilDiscount } from 'react-icons/tb';


export default function NewsDetailModal({ isOpen, onClose }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState('');

  const { data, isLoading } = useGetNewsByIdQuery(id);

  useEffect(() => {
    if (data?.image) {
      setImagePreview(data.image);
    }
  }, [data]);

  if (isLoading) {
    return <SuspenseWithLoader />;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full lg:w-[800px] p-8 ">
      
          <h1 className="text-2xl font-semibold text-gray-800">News Details</h1>
          
      <div className='flex items-start justify-between bg-bgColor mt-6 p-4 rounded-xl'>


        <div className="space-y-4  text-gray-700">
          <div>
            <span className="font-semibold">User ID:</span> {data?.userId}
          </div>

          <div>
            <span className="font-semibold">Title:</span> {data?.title}
          </div>

          <div>
            <span className="font-semibold">Description:</span>
            <p className="mt-1">{data?.description}</p>
          </div>

          <div>
            <span className="font-semibold">Image:</span>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 max-w-full max-h-60 rounded-md border border-gray-300 object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            ) : (
              <p className="mt-1 text-sm text-red-500">No image available</p>
            )}
          </div>
        </div>

        <div>
              <button
            onClick={() => navigate(`/news/${id}/edit`, {
                                state: { from: `/news` },
                            })}
            className=" transition-colors "
            title="Edit News"
          >
             <img
    src="/edit.png"
    alt="Edit"
    className="w-6 h-6"
  />
          </button>
        </div>
      </div>
       

      </div>
    </Modal>
  );
}

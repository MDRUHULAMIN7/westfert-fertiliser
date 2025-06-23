import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

export default function Terms() {
  const editor = useRef(null);

  const [content, setContent] = useState('');


  return (
    <>
      <div className="bg-bgColor rounded-3xl p-4 pb-20">

        <div className='flex justify-between items-center mb-6'>
          <h1 className="text-2xl font-medium"> Terms & Conditions</h1>
          <button

            className='flex items-center gap-2 text-white text-[16px] bg-primary px-4 rounded-3xl py-2 cursor-pointer mb-4'
          >Add Member </button>
        </div>

        <div className="">
          <JoditEditor
            className="border-none "
            ref={editor}
            value={content}
            config={{ height: 550, theme: 'light', readonly: false }}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
      </div>


    </>
  );
}

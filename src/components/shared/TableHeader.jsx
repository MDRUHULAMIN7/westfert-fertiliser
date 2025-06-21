import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const { Search } = Input;

const CustomSearch = () => {
  return (
    <div className="flex items-center bg-[#FBFBFB] shadow-md rounded-full px-2 py-1 w-full lg:w-[364px] h-11">
      <div className="bg-[#D2EBC5] rounded-full px-2 py-1">
        <SearchOutlined className="text-[#4a4a32] text-md" />
      </div>
      <Input
        placeholder="Search here"
        bordered={false}
        className="ml-2 focus:outline-none w-full"
      />
    </div>
  );
};

const TableHeader = ({
  title = 'Employee List',
  actionIcons = [],
  showSearch = true,
  menuIcon = null,
  actionButton = null,
  bgColor = 'bg-bgColor',
  setModal = null
}) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-between items-center ${bgColor} p-4 rounded-tl-[24px] rounded-tr-[24px]`}>
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className='flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0'>
        <div className='flex items-center gap-4 '>
          {actionIcons?.map((icon, index) => (
            <div className='pt-2' key={index}>{icon}</div>
          ))}
          {showSearch && <CustomSearch />}
        </div>

        {menuIcon && (
          <div className='bg-[#FBFBFB] shadow-md p-2.5 rounded-full'>
            {menuIcon}
          </div>
        )}

        {actionButton && (
          <div
            onClick={() => {
              setModal && setModal(true);
            }}
            className='flex items-center gap-2 text-white text-[16px] bg-[#6DBD44] px-4 rounded-3xl py-2 cursor-pointer'
          >
            {actionButton.icon}
            {actionButton.label}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableHeader;

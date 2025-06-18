import sales from '../../../../public/card/sales.svg';

const data = [
    {
        icon: <img src={sales} alt="total" />,
        title: 'Total Sales',
        date: '18 JUN, 2025',
        total: '20550',
        daliy: '29',
    },
    {
        icon: <img src={sales} alt="total" />,
        title: 'Total Earning',
        date: '18 JUN, 2025',
        total: '2055056',
        daliy: '257',
    },
    {
        icon: <img src={sales} alt="total" />,
        title: 'Total Quotes Fertiliser',
        date: '18 JUN, 2025',
        total: '5622050',
        daliy: '459tn',
    },
    {
        icon: <img src={sales} alt="total" />,
        title: 'Total Profit',
        date: '18 JUN, 2025',
        total: '5665045',
        daliy: '59',
    },

];

const Card = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {data.map((item, index) => (
                <div key={index} className="rounded-2xl w-full gap-4 bg-bgColor py-5 px-5">
                    <div className="flex items-center gap-3 ">
                        <div
                            className="bg-[#D2EBC5]
                                w-11 h-11 rounded-full flex items-center justify-center "
                        >
                            {item?.icon}
                        </div>
                        <div className="">
                            <div className="font-medium text-[18px] text-[#2B2F29]">{item?.title}</div>
                            
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="text-[12px]  font-medium text-gray-400">{item.date}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p>Total : {item?.total}</p>
                        <p>
                            Daily : <span className="text-[#006EEE]">{item?.daliy}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;

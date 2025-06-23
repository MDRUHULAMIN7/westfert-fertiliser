import { useState } from 'react';
import { Select } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Option } = Select;
const data = [
    { name: 'Jan', profit: 2000, earning: 4000, amt: 2400 },
    { name: 'Feb', profit: 1500, earning: 3000, amt: 2210 },
    { name: 'Mar', profit: 1000, earning: 5000, amt: 2290 },
    { name: 'Apr', profit: 1500, earning: 3500, amt: 2000 },
    { name: 'May', profit: 1200, earning: 4800, amt: 2181 },
    { name: 'Jun', profit: 1500, earning: 4000, amt: 2500 },
    { name: 'Jul', profit: 1700, earning: 4500, amt: 2100 },
    { name: 'Aug', profit: 1800, earning: 4600, amt: 2100 },
    { name: 'Sep', profit: 1900, earning: 4800, amt: 2100 },
    { name: 'Oct', profit: 2000, earning: 5000, amt: 2100 },
    { name: 'Nov', profit: 2100, earning: 5200, amt: 2100 },
    { name: 'Dec', profit: 2200, earning: 5300, amt: 2100 },
];



export default function Chart() {
    const [selectedYear, setSelectedYear] = useState('Year');

    const handleYearChange = (value) => {
        setSelectedYear(value);
    };

    return (
        <div className="my-4 bg-bgColor shadow-md rounded-lg px-3 pt-1 text-textGray ">
            <div className="flex items-center justify-between my-4 ">
                <h1 className="font-bold text-[20px]">Earning <span className='font-normal'>Statistics</span></h1>
                <div className="flex justify-center items-center gap-7">
                    <div className="text-primary flex justify-center items-center gap-2">
                        <p className="h-3 w-3 bg-primary rounded-full"></p>
                        <h1>Earning</h1>
                    </div>
                    <div className="text-[#6CA0DC] flex justify-center items-center gap-2">
                        <p className="h-3 w-3 bg-[#6CA0DC] rounded-full"></p>
                        <h1>Profit</h1>
                    </div>
                    <div>
                        <Select value={selectedYear} onChange={handleYearChange} className="w-32 h-[30px] ">
                            <Option value="2025">2025</Option>
                            <Option value="2026">2026</Option>
                            <Option value="2027">2027</Option>
                            <Option value="2028">2028</Option>
                            <Option value="2029">2029</Option>
                            <Option value="2030">2030</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    width={20}
                    height={300}
                    data={data}
                  
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Bar dataKey="earning" fill="#6DBD44" barSize={10} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="profit" fill="#6CA0DC" barSize={10} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

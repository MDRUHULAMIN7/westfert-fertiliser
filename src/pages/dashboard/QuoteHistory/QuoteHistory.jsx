import { useState } from 'react';
import { Table, Space, Select, } from 'antd';


const { Option } = Select;
const { Column } = Table;

import { LockOutlined } from '@ant-design/icons';
import data from '../../../../database/quote.json';
import TableHeader from '../../../components/shared/TableHeader';




const QuoteHistory = () => {
    const [dataSource, setDataSource] = useState(data);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleStatusChange = (value, recordKey) => {
        const updatedData = dataSource.map((item) =>
            item.key === recordKey ? { ...item, status: value } : item
        );
        setDataSource(updatedData);
    };
    const statusColors = {
        Draft: '#ED1E24',
        Pending: 'orange',
        Sent: 'blue',
        Approved: '#5DCA54',
        Accepted: '#5DCA54',
    };

    const statusOptions = ['Draft', 'Pending', 'Sent', 'Approved', 'Accepted'];



    return (
        <section className="bg-[#F9F9F9] rounded-3xl">
            <TableHeader
                title="Quote History"
                actionIcons={[
                    <LockOutlined key="lock1" style={{ color: '#A1A1A1', fontSize: '22px', cursor: 'pointer' }} />,
                    <LockOutlined key="lock2" style={{ color: '#A1A1A1', fontSize: '22px', cursor: 'pointer' }} />
                ]}
                showSearch={true}
                menuIcon={<img className="h-5 w-5" src="/stafflist/three-dot.png" alt="menu" />}
                bgColor="bg-[#f0f0f0]"
            />


            <Table dataSource={dataSource} rowSelection={rowSelection} pagination={{ pageSize: 8 }} scroll={{ x: 1000 }}>
                <Column title="Quote no." dataIndex="quoteNo" key="quoteNo" />
                <Column title="Farmers Name" dataIndex="farmerName" key="farmerName" />
                <Column title="Executive" dataIndex="executive" key="executive" />
                <Column title="Quote Recipe" dataIndex="recipe" key="recipe" />
                <Column title="Weight" dataIndex="weight" key="weight" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Delivery Time" dataIndex="deliveryTime" key="deliveryTime" />
                <Column
                    title="Status"
                    dataIndex="status"
                    key="status"
                    render={(text, record) => (
                        <Select
                            value={text}
                            onChange={(value) => handleStatusChange(value, record.key)}
                            optionLabelProp="label"
                            style={{ width: 120, fontWeight: '600' }}
                            bordered={false}
                        >
                            {statusOptions.map((option) => (
                                <Option
                                    key={option}
                                    value={option}
                                    label={
                                        <span style={{ color: statusColors[option] || '#000', fontWeight: '600' }}>
                                            {option}
                                        </span>
                                    }
                                >
                                    <span style={{ color: statusColors[option] || '#000', fontWeight: '600' }}>
                                        {option}
                                    </span>
                                </Option>
                            ))}
                        </Select>
                    )}
                />

                <Column
                    title="Action"
                    key="action"
                    render={() => (
                        <Space size="middle">
                            <img src="/pdf.png" alt="pdf" className="cursor-pointer" />
                            <img src="/stafflist/detail.png" alt="detail" className="cursor-pointer" />
                        </Space>
                    )}
                />
            </Table>
        </section>
    );
};

export default QuoteHistory;

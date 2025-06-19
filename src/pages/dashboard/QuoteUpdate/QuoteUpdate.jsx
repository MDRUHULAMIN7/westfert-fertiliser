import React, { useState } from 'react';
import { Table, Space, Select, } from 'antd';

import StaffListHeader from '../../../components/shared/TableHeader';
const { Option } = Select;
const { Column } = Table;


import data from '../../../../database/quote.json';




const QuoteUpdate = () => {
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
            <StaffListHeader
                title="Quote Update"
                actionIcons={[<img src="/file.png" className="h-6" alt="file" />]}
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

export default QuoteUpdate;

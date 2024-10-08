import { Table } from "antd"
import UserImageName from "../Shared/UserImageName"
import { Link } from "react-router-dom"

const PendingWashTable = ({ data, pagination }) => {
    const columns = [

        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
            render: (_, record) => <UserImageName name={record?.Name} image={record?.Image} />
        },

        {
            title: 'Location',
            dataIndex: 'Location',
            key: 'Location',

        },
        {
            title: 'Contact Info',
            dataIndex: 'ContactInfo',
            key: 'ContactInfo',

        },
        {
            title: 'Number Of Spa',
            dataIndex: 'NumberOfSpa',
            key: 'NumberOfSpa',

        },
        {
            title: 'Time',
            dataIndex: 'Time',
            key: 'Time',
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_, record) => <div className="start-center gap-2">
                <Link to={`/track?id=${record?.id || 1}`} className='button-orange'>Track</Link>
                <button className='button-green'>done</button>
            </div>
        },
    ]
    return <Table columns={columns} dataSource={data} pagination={pagination || false} />
}

export default PendingWashTable

import { Table } from "antd"
import UserImageName from "../Shared/UserImageName"
import { Link } from "react-router-dom"

const PendingWashTable = ({ data, pagination }) => {
    const columns = [

        {
            title: 'Name',
            dataIndex: 'clientName',
            key: 'clientName',
            // render: (_, record) => <UserImageName name={record?.clientName} image={record?.Image} />
        },

        {
            title: 'Location',
            dataIndex: 'address',
            key: 'address',

        },
        {
            title: 'Contact Info',
            dataIndex: 'clientPhoneNumber',
            key: 'clientPhoneNumber',

        },
        {
            title: 'Number Of Spa',
            dataIndex: 'currentServiceNumber',
            key: 'currentServiceNumber',

        },
        // {
        //     title: 'Time',
        //     dataIndex: 'Time',
        //     key: 'Time',
        // },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_, record) => <div className="start-center gap-2">
                <Link to={`/track?id=${record?._id || 1}`} className='button-orange'>Track</Link>
                {/* <button className='button-green'>done</button> */}
            </div>
        },
    ]
    return <Table columns={columns} dataSource={data} pagination={pagination || false} />
}

export default PendingWashTable

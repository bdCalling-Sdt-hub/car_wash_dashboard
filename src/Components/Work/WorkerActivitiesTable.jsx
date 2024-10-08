import { Modal, Table } from "antd"
import UserImageName from "../Shared/UserImageName"
import AssignForm from "../Driver/AssignForm"
import { useState } from "react"
import moment from "moment"


const WorkerActivitiesTable = ({ data, pagination }) => {
    const [openModal, setOpenModal] = useState(false)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'clientName',
            key: 'clientName',
            // render: (_, record) => <UserImageName name={record?.clientName} image={record?.img} />
        },
        {
            title: 'Phone',
            dataIndex: 'clientPhoneNumber',
            key: 'clientPhoneNumber',
        },
        {
            title: 'Location',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Time',
            dataIndex: 'Time',
            key: 'Time',
            render: (_, record) => <p>{moment(record?.bookedDateTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_, record) => <button disabled onClick={() => setOpenModal(true)} style={{ padding: '5px 10px', borderRadius: '3px', width: '100%', maxWidth: '100px', }} className={`w-[100px] bg-[var(--color-orange)] text-white`}>{record?.status}</button>
        },
    ]//{record?.Action === 'Complete' ? 'button-orange' : 'button-black'}
    return (
        <>
            <Table
                dataSource={data}
                columns={columns}
                pagination={pagination || false}
            />
            <Modal
                centered
                footer={false}
                open={openModal}
                onCancel={() => setOpenModal(false)}
                width={800}
            >
                <AssignForm closeModal={() => setOpenModal(false)} />
            </Modal>
        </>
    )
}
// {
//     pageSize: 10,
//     showSizeChanger: false,
//     onChange: (page) => {
//         console.log(page)
//     }
// }
export default WorkerActivitiesTable

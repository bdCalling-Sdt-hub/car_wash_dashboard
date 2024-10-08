import { Modal, Table } from "antd"
import UserImageName from "../Shared/UserImageName"
import AssignForm from "./AssignForm"
import { useState } from "react"


const DriverTable = ({ data, pagination, modal }) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'clientName',
            key: 'clientName',
            // render: (_, record) => <UserImageName name={record?.Name} image={record?.Image} />
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
            key: 'currentServiceNumber'
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_, record) => <button onClick={() => { setOpenModal(true), setSelectedId(record?._id) }} className='button-green'>Assign</button>
        },
    ]
    return <>
        <Table columns={columns} dataSource={data} pagination={pagination || false} />
        <Modal
            centered
            footer={false}
            open={openModal}
            onCancel={() => setOpenModal(false)}
            width={800}
        // title='Assign Driver'
        >
            <AssignForm selectedId={selectedId} closeModal={() => setOpenModal(false)} />
        </Modal>
    </>
}

export default DriverTable

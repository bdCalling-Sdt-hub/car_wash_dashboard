import { Modal, Table } from 'antd'
import { useState } from 'react'
import UserImageName from '../Shared/UserImageName'
import { FaEye } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import ClientDetails from './ClientDetails'
import { FaInfoCircle } from 'react-icons/fa'
import { useAssignWorkMutation } from '../../Redux/Apis/workerApis'
import toast from 'react-hot-toast'
import { useDeleteClientMutation } from '../../Redux/Apis/clientApis'
import moment from 'moment'

const TotalClientTable = ({ data, pagination, modal, jobId, closeModal }) => {
    const [openModal, setOpenModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [selectedClient, setSelectedClient] = useState({})
    const [assign, { isLoading }] = useAssignWorkMutation()
    const [deleteClient, { isLoading: isDeleting }] = useDeleteClientMutation()
    const handleAssignWork = (id) => {
        const FormatData = {
            workerId: id,
            jobId: jobId,
            status: "ASSIGNED"
        }
        assign(FormatData).unwrap().then((res) => {
            closeModal()
            toast.dismiss()
            toast.success(res?.message)
        }).catch((err) => {
            toast.dismiss()
            toast.error(err?.data?.message)
        })
    }
    const handleDelete = () => {
        deleteClient(selectedClient?._id).unwrap().then(res => {
            setOpenDeleteModal(false)
            toast.dismiss()
            toast.success(res.message)
        }).catch(err => {
            setOpenDeleteModal(false)
            toast.dismiss()
            toast.error(err?.data?.message)
        })
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => <UserImageName name={record?.name} image={record?.profile_image} />,
        },
        {
            title: 'Location',
            dataIndex: 'address',
            key: 'address',
        },
        modal ?
            {
                title: 'Distance',
                dataIndex: 'distance',
                key: 'distance',
                render: (_, record) => <p>{(Number(record?.distance) / 1000)?.toFixed(2)}KM</p>,
            } : {},
        !modal ?
            {
                title: 'Date OF Birth',
                dataIndex: 'date_of_birth',
                key: 'date_of_birth',
                render: (_, record) => <p>{record?.date_of_birth ? moment(record?.date_of_birth).format("MMM Do YY") : 'N/A'}</p>
            } : {},
        {
            title: 'Contact Info',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Current Service Number',
            dataIndex: 'currentServiceNumber',
            key: 'currentServiceNumber',
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_, record) => <>
                {
                    modal ? <button onClick={() => handleAssignWork(record?._id)} className='button-green'> Assign</button> : <div className='start-center'>
                        <button onClick={() => { setOpenModal(true); setSelectedClient(record) }} className='text-2xl hover:scale-105 active:scale-95 transition-all'>
                            <FaEye />
                        </button>
                        <button onClick={() => { setOpenDeleteModal(true); setSelectedClient(record) }} className='text-2xl hover:scale-105 active:scale-95 transition-all'>
                            <MdDelete />
                        </button>
                        {/* <button className='button-green'>
                    Assign
                </button> */}
                    </div>
                }

            </>,
        },
    ]
    return <>
        <Table columns={columns} dataSource={data} pagination={pagination || false} />
        <Modal
            centered
            footer={false}
            open={openModal}
            onCancel={() => setOpenModal(false)}
        >
            <ClientDetails selectedClient={selectedClient} />
        </Modal>
        <Modal
            centered
            footer={false}
            open={openDeleteModal}
            onCancel={() => setOpenDeleteModal(false)}
            width={400}
        >
            <div className='center-center gap-3 flex-col p-6'>
                <FaInfoCircle className='text-red-600 text-4xl' />
                <p className='text-3xl text-center'>Are you sure you want to delete this user?</p>
                <div className='center-center col-span-2 gap-2'>
                    <button disabled={isDeleting} onClick={() => setOpenDeleteModal(false)}
                        style={{
                            padding: '10px 20px'
                        }}
                        type='button'
                        className='button-red w-full'
                    >
                        Cancel
                    </button>
                    <button disabled={isDeleting} onClick={() => handleDelete()}
                        style={{
                            padding: '10px 20px'
                        }}
                        type='submit'
                        className='button-orange w-full'
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Modal>
    </>
}

export default TotalClientTable

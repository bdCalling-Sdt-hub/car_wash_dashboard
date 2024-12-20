import { Modal, Table } from "antd"
import UserImageName from "../Shared/UserImageName"
import AssignForm from "../Driver/AssignForm"
import { useState } from "react"
import moment from "moment"
import { useCompleatWorkMutation } from "../../Redux/Apis/workerApis"
import { FaInfoCircle } from "react-icons/fa"
import toast from "react-hot-toast"
import { imageUrl } from "../../Redux/BaseUrl"


const WorkerActivitiesTable = ({ data, pagination }) => {
    const [openModal, setOpenModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [id, setId] = useState()
    const [selectedData, setSelectedData] = useState({})
    const [completeWork, { isLoading }] = useCompleatWorkMutation()
    const handleCompleatWork = () => {

        const data = {
            jobId: id,
            "status": "COMPLETED"
        }
        completeWork(data).unwrap().then((res) => {
            setOpenModal(false)
            toast.dismiss()
            toast.success(res?.message)
        }).catch((err) => {
            toast.dismiss()
            toast.error(err?.data?.message)
        })
    }
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
            render: (_, record) => <p>{record?.duration || 'N/A'}</p>
        },
        // moment(record?.bookedDateTime).format('MMMM Do YYYY, h:mm:ss a')
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (_, record) => <button disabled={record?.status !== 'ENDED'} onClick={() => { setId(record?._id); setSelectedData(record); setOpenDeleteModal(true) }} style={{ padding: '5px 10px', borderRadius: '3px', width: '100%', maxWidth: '100px', }} className={`w-[100px] bg-[var(--color-orange)] text-white`}>{record?.status}</button>
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
            <Modal
                centered
                footer={false}
                open={openDeleteModal}
                onCancel={() => setOpenDeleteModal(false)}
                width={700}
            >
                <div className='center-center gap-3 flex-col p-6'>
                    <FaInfoCircle className='text-red-600 text-4xl' />
                    <p className='text-xl text-center'>Are you sure you want to Compleat this work</p>
                    <div className="grid-2 w-full h-[350px] overflow-hidden">
                        <div className="h-[350px] ">
                            <p className="font-bold">Before image</p>
                            <img className="object-contain w-full h-full border" src={imageUrl(selectedData?.carImageBefore)} alt="" />
                        </div>
                        <div className="h-[350px] ">
                            <p className="font-bold">After image</p>
                            <img className="object-contain w-full h-full border" src={imageUrl(selectedData?.carImageAfter)} alt="" />
                        </div>
                    </div>
                    <div className='center-center col-span-2 gap-2'>
                        <button disabled={isLoading} onClick={() => setOpenDeleteModal(false)}
                            style={{
                                padding: '10px 20px'
                            }}
                            type='button'
                            className='button-red w-full'
                        >
                            Cancel
                        </button>
                        <button disabled={isLoading} onClick={() => handleCompleatWork()}
                            style={{
                                padding: '10px 20px'
                            }}
                            type='submit'
                            className='button-orange w-full'
                        >
                            Complete
                        </button>
                    </div>
                </div>
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

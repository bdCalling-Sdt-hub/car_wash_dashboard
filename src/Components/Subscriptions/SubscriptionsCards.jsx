import { Modal } from 'antd'
import React, { useState } from 'react'
import SubscriptionForm from './SubscriptionForm'
import { FaCheck } from 'react-icons/fa6'

const SubscriptionsCards = ({ data, i, selectedService, setSelectedService }) => {
    const [openModal, setOpenModal] = useState(false)
    const colors = ['#DDDBAE', '#84B5A4', '#EC9D6C']
    const [color, setColor] = useState(colors[i % 3])
    return (
        <div style={{
            backgroundColor: colors[i % 3],
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }} className={`center-center gap-2 p-2 py-6 rounded-md flex-col`}>
            <p className='text-3xl'>{data?.Price}</p>
            <p className='font-semibold'>{data?.Title}</p>
            <p className=''>({data?.Description})</p>
            <div>
                {
                    data?.Details?.map((item, i) => <div className='start-center gap-3 cursor-pointer mt-2' onClick={() => { setSelectedService({ subscription: data?._id, service: item?._id }) }} key={i}>
                        <span className='h-4 w-4 rounded-sm border-2 border-black center-center'>
                            <FaCheck className={` ${selectedService?.subscription === data?._id && selectedService?.service === item?._id ? 'block' : 'hidden'}`} />
                        </span>
                        <p className='font-light text-sm mt-1'>{item?.name} (${item?.price}) {item?.percentage ? `coupon applied ${item?.percentage}%` : ""}</p>
                    </div>)
                }
            </div>
            <button onClick={() => { setOpenModal(true) }} style={{
                width: '80%'
            }} className='button-white mt-4'>
                Edit
            </button>
            <Modal
                open={openModal}
                onCancel={() => setOpenModal(false)}
                onOk={() => setOpenModal(false)}
                footer={null}
                centered
            >
                <SubscriptionForm setOpenModal={setOpenModal} data={data} color={color} />
            </Modal>
        </div>
    )
}

export default SubscriptionsCards
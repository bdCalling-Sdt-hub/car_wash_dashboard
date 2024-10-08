import { Modal } from 'antd'
import React, { useEffect } from 'react'
import check from '../../assets/icons/check.png'
const SuccessMessage = ({ message, open, seOpen, time ,width}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      seOpen(false)
    }, time || 300)
    return () => clearTimeout(timer)
  }, [open ,time])
  return (
    <Modal
      centered
      footer={null}
      open={open}
      onOk={() => seOpen(false)}
      onCancel={() => seOpen(false)}
      width={width || 1000}
    >
      <div className='p-4 rounded-md center-center flex-col gap-2'>
        <img src={check} alt="" />
        <p> {message || 'Request successful'} </p>
      </div>
    </Modal>
  )
}

export default SuccessMessage

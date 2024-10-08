import { Form, Input } from "antd"
import { CouponFields } from "../../Utils/FormFields/CouponFields"
import SuccessMessage from "../Shared/SuccessMessage"
import { useState } from "react"
import { useCreateCouponMutation } from "../../Redux/Apis/subscriptionApis"
import toast from "react-hot-toast"


const CouponGenerateForm = ({ selectedService }) => {//onClick={() => setShowMessage(true)}
    const [creteCoupon] = useCreateCouponMutation()
    const [showMessage, setShowMessage] = useState(false)
    const onFinish = (value) => {
        if (!selectedService?.service) {
            return toast.error('please select a service to add coupon')
        }
        const data = {
            ...value,
            serviceId: selectedService?.service,
            packageId: selectedService?.subscription,
        }
        creteCoupon(data).unwrap().then((res) => {
            console.log(res)
            toast.dismiss()
            toast.success(res?.message)
        }).catch((err) => {
            console.log(err)
            toast.dismiss()
            toast.error(err?.data?.message)
        })
    }
    return (
        <Form
            className="between-center gap-[1%] mt-10"
            onFinish={onFinish}
            layout="vertical"
        >
            {
                CouponFields?.map(item => {
                    return <Form.Item
                        name={item?.name}
                        key={item?.name}
                        rules={[{
                            required: item?.required,
                            message: item?.message
                        }]}
                        label={item?.label}
                        className='w-full'
                    >
                        <Input
                            type={item?.type}
                            name={item?.name}
                            placeholder={item?.placeholder}
                            className='w-full h-[42px]'
                        />
                    </Form.Item>
                })
            }
            <button className="button-orange font-bold uppercase" style={{
                padding: '10px 20px',
                width: '9%'
            }}>
                save
            </button>
            <>
                <SuccessMessage width={300} open={showMessage} seOpen={setShowMessage} message='Coupon generated successfully' time={1500} />
            </>
        </Form>
    )
}

export default CouponGenerateForm

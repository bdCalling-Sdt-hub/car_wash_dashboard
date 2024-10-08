import { Form, Input } from "antd"
import { SubscriptionsFields } from "../../Utils/FormFields/SubscriptionsFields"
import { FaPlus } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"
import { useEffect } from "react"
import { useUpdateSubscriptionMutation } from "../../Redux/Apis/subscriptionApis"
import toast from "react-hot-toast"


const SubscriptionForm = ({ color, data, setOpenModal }) => {
    const [updateSubscription] = useUpdateSubscriptionMutation()
    const [form] = Form.useForm()
    const onFinish = (values) => {
        const UpdateData = {
            packageTitle: values?.name,
            packageDescription: values?.packageDescription,
            services: values?.Services?.map(item => ({ serviceName: item?.service, price: item?.price })),
            numberOfService: values?.numberOfWash,
            id: data?._id
        }

        updateSubscription(UpdateData).unwrap().then((res) => {
            setOpenModal(false)
            console.log(res)
            toast.dismiss()
            toast.success(res?.message)
        }).catch((err) => {
            console.log(err)
            toast.dismiss()
            toast.error(err?.data?.message)
        })
    }
    useEffect(() => {
        const FormateFormFieldData = {
            name: data?.Title,
            numberOfWash: data?.numberOfService,
            packageDescription: data?.Description,
            Services: data?.Details?.map(item => ({ service: item?.name, price: Number(item?.price) }))
        }
        form.setFieldsValue(FormateFormFieldData)
    }, [data])
    return (
        <Form
            layout='vertical'
            form={form}
            onFinish={onFinish}
            className="grid-2 gap-3 p-4 rounded-md"
            initialValues={{
                Services: ['']
            }}
            style={{
                backgroundColor: color
            }}
        >
            {
                SubscriptionsFields?.map(item => {
                    return <Form.Item
                        name={item?.name}
                        key={item?.name}
                        rules={[
                            {
                                required: item?.required,
                                message: item?.message
                            }
                        ]}
                        label={item?.label}
                        className={`w-full ${item?.name === 'packageDescription' ? 'col-span-2' : ""}`}
                    >
                        <Input style={{
                            height: '42px'
                        }}
                            type={item?.type}
                            placeholder={item?.placeholder}

                        />
                    </Form.Item>
                })
            }
            <Form.List name="Services">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div key={key} className=" col-span-2 between-center">
                                <Form.Item className="w-[50%]"
                                    label={key === 1 && "Service Name"}
                                    {...restField}
                                    name={[name, 'service']}
                                    rules={[{ required: true, message: 'Missing service name' }]}
                                >
                                    <Input style={{
                                        height: '42px'
                                    }} placeholder="service Name" />
                                </Form.Item>
                                <Form.Item
                                    label={key === 1 && "Service Price"}
                                    {...restField}
                                    name={[name, 'price']}
                                    rules={[{ required: true, message: 'Missing price' }]}
                                >
                                    <Input style={{
                                        height: '42px'
                                    }} placeholder="price"
                                        type="number"
                                    />
                                </Form.Item>
                                {
                                    // fields.length > 1
                                }
                                <button className="text-xl -mt-5 disabled:text-gray-500 disabled:cursor-not-allowed" disabled={fields.length === 1}>
                                    <RxCross2 onClick={() => remove(name)} />
                                </button>
                            </div>
                        ))}
                        <Form.Item className="end-center col-span-2">
                            <button disabled={fields.length > 7} className="bg-white p-2 rounded-md disabled:bg-gray-400" type="button" onClick={() => add()} >
                                <FaPlus />
                            </button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <div className="center-center col-span-2">
                <button className="button-white">
                    Save
                </button>
            </div>
        </Form >
    )
}

export default SubscriptionForm

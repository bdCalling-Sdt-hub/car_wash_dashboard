import React, { useEffect } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { Form, Input, TimePicker } from 'antd'
import dayjs from 'dayjs';
import { useGetWorkHourQuery, useUpdateWorkHourMutation } from '../../Redux/Apis/settingApi';
import toast from 'react-hot-toast';
const WorkHour = () => {
    const [form] = Form.useForm()
    const { data, isLoading } = useGetWorkHourQuery()
    const [update, { isLoading: Updating }] = useUpdateWorkHourMutation()
    const onFinish = (value) => {
        const data = {
            workHoursStart: dayjs(value?.start_time, 'HH:mm:ss').format('hh:mm A'),
            workHoursEnd: dayjs(value?.end_time, 'HH:mm:ss').format('hh:mm A')
        }
        update(data).then(res => {
            toast.success(res?.data?.message)
            console.log(res)
        }).catch(err => {
            toast.error(err?.data?.message)
            console.log(err)
        })
        // console.log()
    }
    const onChange = (time, timeString) => {
        console.log(time, timeString);
    };
    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                start_time: dayjs(data?.data?.workHoursStart, 'hh:mm A'),
                end_time: dayjs(data?.data?.workHoursEnd, 'hh:mm A')
            });
        }
    }, [data, form]);
    return (
        <div className='bg-[var(--bg-gray-20)] p-4 rounded-md'>
            <PageHeading text={`Work Hour`} />
            <Form
                onFinish={onFinish}
                layout='vertical'
                form={form}
            >
                <div className='flex flex-wrap justify-center flex-col items-center gap-4 bg-[var(--color-white)] w-fit mx-auto p-4 rounded-md mt-8'>
                    <Form.Item
                        name={`start_time`}
                        label={`Start Time`}
                    >
                        <TimePicker className='h-[42px] min-w-[400px]'
                            onChange={onChange}
                            defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                            format="hh:mm A"
                            use12Hours
                        />
                    </Form.Item>
                    <Form.Item
                        name={`end_time`}
                        label={`Emd Time`}
                    >
                        <TimePicker className='h-[42px] min-w-[400px]'
                            onChange={onChange}
                            defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                            format="hh:mm A"
                            use12Hours
                        />
                    </Form.Item>
                    <button className='button-black'>
                        {Updating ? 'saving...' : 'Save'}
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default WorkHour

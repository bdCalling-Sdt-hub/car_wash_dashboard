export const CouponFields = [
    {
        name: 'percentage',
        label: 'Add Percentage',
        placeholder: '20%',
        required: true,
        message: 'Please Enter Percentage',
        type: 'number',
    },
    {
        name: 'coupon',
        label: 'Coupon Code',
        placeholder: '2064894185',
        required: true,
        message: 'Please Enter Coupon Code',
        type: 'text',
    },
    {
        name: 'startDateTime',
        label: 'Start Date',
        placeholder: 'dd/mm/yy',
        required: true,
        message: 'Please Enter Coupon Start Date',
        type: 'date',
    },
    {
        name: 'endDateTime',
        label: 'End Date',
        placeholder: 'dd/mm/yy',
        required: true,
        message: 'Please Enter Coupon End Date',
        type: 'date',
    },
]
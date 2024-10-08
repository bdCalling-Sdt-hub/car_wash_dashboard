import PendingWashTable from "../../Components/PendingWash/PendingWashTable"
import PageHeading from "../../Components/Shared/PageHeading"

const data = [
    {
        "SerialNo": 1,
        "Name": "Md Nazmul Hoque",
        "Location": "2118 Thornridge Cir, Syracuse",
        "ContactInfo": "+7-445-557-6943",
        "NumberOfSpa": "1st",
        "Time": "00:00",
        "Action": ["Track", "Done"],
        "Image": ""
    },
    {
        "SerialNo": 2,
        "Name": "Fanthaur Rahman",
        "Location": "2972 Westheimer Rd, Santa Ana",
        "ContactInfo": "+1 470 9181 8588",
        "NumberOfSpa": "2nd",
        "Time": "00:00",
        "Action": ["Track", "Done"],
        "Image": ""
    },
    {
        "SerialNo": 3,
        "Name": "Jowwad Hossain",
        "Location": "6381 Elgin St, Celina",
        "ContactInfo": "+1 (684) 555-0102",
        "NumberOfSpa": "3rd",
        "Time": "00:00",
        "Action": ["Track", "Done"],
        "Image": ""
    },
    {
        "SerialNo": 4,
        "Name": "Al-Amin",
        "Location": "2716 Ash Dr, San Jose",
        "ContactInfo": "+1 (225) 555-0118",
        "NumberOfSpa": "4th",
        "Time": "00:00",
        "Action": ["Track", "Done"],
        "Image": ""
    }
]

const PendingWash = () => {
    return (
        <>
            <div className="mb-3">
                <PageHeading text="Pending Wash" />
            </div>
            <PendingWashTable data={data} pagination={{
                total: 10,
                pageSize: 5,
                showSizeChanger: false,
                onChange: (page) => {
                    console.log(page)
                }
            }} />
        </>
    )
}
export default PendingWash

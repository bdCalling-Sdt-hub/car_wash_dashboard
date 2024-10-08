
import DriverTable from "../../Components/Driver/DriverTable"
import PageHeading from "../../Components/Shared/PageHeading"
import Search from "../../Components/Shared/Search"
import { useFetchClientsRequestQuery } from "../../Redux/Apis/clientApis"
const data = [
    {
        "Name": "Ashiqur Rahman",
        "img": "",
        "Phone": "+1 470 9181 8588",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Submit"
    },
    {
        "Name": "Hasibur Rashid Mah",
        "img": "",
        "Phone": "+1 (239) 555-0108",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Submit"
    },
    {
        "Name": "Ashiqur Rahman",
        "img": "",
        "Phone": "+1 470 9181 8588",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Submit"
    },
    {
        "Name": "Hasibur Rashid Mah",
        "img": "",
        "Phone": "+1 (239) 555-0108",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Submit"
    },
    {
        "Name": "Ashiqur Rahman",
        "img": "",
        "Phone": "+1 470 9181 8588",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Submit"
    },
    {
        "Name": "Hasibur Rashid Mah",
        "img": "",
        "Phone": "+1 (239) 555-0108",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Submit"
    },
    {
        "Name": "Ashiqur Rahman",
        "img": "",
        "Phone": "+1 470 9181 8588",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Submit"
    },
    {
        "Name": "Hasibur Rashid Mah",
        "img": "",
        "Phone": "+1 (239) 555-0108",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Submit"
    },
]

const TotalRequest = () => {
    const { data: ClientRequest } = useFetchClientsRequestQuery()
    console.log(ClientRequest)
    return (
        <>
            <div className="between-center gap-2 mb-2">
                <PageHeading text=" Total Request" />
                <Search placeholder="Search Worker" handler={(value) => console.log(value)} />
            </div>
            <DriverTable data={ClientRequest?.data?.result?.slice(0, 5) || []} pagination={false} />
            {/* <DriverTable data={data} type='request' pagination={{
                total: 10,
                pageSize: 5,
                showSizeChanger: false,
                onChange: (page) => {
                    console.log(page)
                }
            }} /> */}
        </>
    )
}

export default TotalRequest

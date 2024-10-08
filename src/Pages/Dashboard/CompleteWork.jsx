import PageHeading from "../../Components/Shared/PageHeading"
import WorkerActivitiesTable from "../../Components/Work/WorkerActivitiesTable"

const data = [
    {
        "Name": "Foysal Rahman",
        "img": "",
        "Phone": "+1 (470) 555-1919",
        "Location": "Great Falls, Maryland",
        "Time": "2 hr",
        "Action": "Complete"
    },
    {
        "Name": "Fahim Ahmed",
        "img": "",
        "Phone": "+1 (229) 555-0109",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Complete"
    },
    {
        "Name": "Al-Amin",
        "img": "",
        "Phone": "+1 (201) 555-0124",
        "Location": "Great Falls, Maryland",
        "Time": "00:00",
        "Action": "Complete"
    },
    // {
    //     "Name": "Ashiqur Rahman",
    //     "img": "",
    //     "Phone": "+1 470 9181 8588",
    //     "Location": "Great Falls, Maryland",
    //     "Time": "00:00",
    //     "Action": "Submit"
    // },
    // {
    //     "Name": "Hasibur Rashid Mah",
    //     "img": "",
    //     "Phone": "+1 (239) 555-0108",
    //     "Location": "Great Falls, Maryland",
    //     "Time": "00:00",
    //     "Action": "Submit"
    // }
]
const CompleteWork = () => {
    return (
        <>
            <div className="mb-2">
                <PageHeading text="Complete Work" />
            </div>
            <WorkerActivitiesTable data={data}  pagination={{
                total: 10,
                pageSize: 5,
                showSizeChanger: false,
                onChange: (page) => {
                    console.log(page)
                }
            }}  />
        </>
    )
}

export default CompleteWork

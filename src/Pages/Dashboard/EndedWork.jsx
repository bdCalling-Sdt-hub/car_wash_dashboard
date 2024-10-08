import { useState } from "react"
import PageHeading from "../../Components/Shared/PageHeading"
import WorkerActivitiesTable from "../../Components/Work/WorkerActivitiesTable"
import { useFetchWorkersQuery } from "../../Redux/Apis/workerApis"
const EndedWork = () => {
    const [page, setPage] = useState()
    const { data: workers } = useFetchWorkersQuery({ status: 'ENDED', page })
    return (
        <>
            <div className="mb-2">
                <PageHeading text="Complete Work" />
            </div>
            <WorkerActivitiesTable data={workers?.data?.result} pagination={{
                total: workers?.data?.total,
                pageSize: workers?.data?.limit,
                showSizeChanger: false,
                onChange: (page) => setPage(page)
            }} />
        </>
    )
}


export default EndedWork

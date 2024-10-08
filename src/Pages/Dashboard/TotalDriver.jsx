import { useState } from "react"
import DriverTable from "../../Components/Driver/DriverTable"
import PageHeading from "../../Components/Shared/PageHeading"
import Search from "../../Components/Shared/Search"
import WorkerTable from "../../Components/Worker/WorkerTable"
import { useFetchAllWorkersQuery } from "../../Redux/Apis/workerApis"

const TotalDriver = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState()
    const { data: workers } = useFetchAllWorkersQuery({ search, page })

    return <>
        <div className="between-center gap-2">
            <PageHeading text=" Total Worker" />
            <Search placeholder="Search Worker" handler={(value) => { setSearch(value); setPage(1) }} />
        </div>
        <div className="mt-3">
            <WorkerTable data={workers?.data} pagination={{
                total: workers?.total,
                pageSize: workers?.limit,
                showSizeChanger: false,
                current: page,
                onChange: (page) => {
                    setPage(page)
                }
            }} />
        </div>
    </>
}

export default TotalDriver

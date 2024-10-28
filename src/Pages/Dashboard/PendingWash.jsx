import { useState } from "react"
import PendingWashTable from "../../Components/PendingWash/PendingWashTable"
import PageHeading from "../../Components/Shared/PageHeading"
import { useFetchWorkersQuery } from "../../Redux/Apis/workerApis"

const PendingWash = () => {
    const [page, setPage] = useState()
    const { data: workers } = useFetchWorkersQuery({ status: 'PENDING', page })
    return (
        <>
            <div className="mb-3">
                <PageHeading text="Pending Wash" />
            </div>
            <PendingWashTable data={workers?.data?.result} pagination={{
                total: workers?.data?.total,
                pageSize: workers?.data?.limit,
                showSizeChanger: false,
                onChange: (page) => setPage(page)
            }} />
        </>
    )
}
export default PendingWash

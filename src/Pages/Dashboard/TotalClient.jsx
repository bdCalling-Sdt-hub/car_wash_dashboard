import { Select } from "antd"
import TotalClientTable from "../../Components/Client/TotalClientTable"
import PageHeading from "../../Components/Shared/PageHeading"
import Search from "../../Components/Shared/Search"
import { useFetchClientsQuery } from "../../Redux/Apis/clientApis"
import Loading from "../../Components/Shared/Loading"
import { useState } from "react"

const TotalClient = () => {
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState()
    const { data: Clients, isLoading, isFetching } = useFetchClientsQuery({ searchTerm, page })

    return (
        <>
            {
                (isLoading || isFetching) && <Loading />
            }
            <div className="mb-3 between-center">
                <PageHeading text="Total Client" />
                <div className="end-center gap-2">
                    <div className="-mb-6">
                        <Search handler={(value) => setSearchTerm(value)} placeholder="Search Client" />
                    </div>
                    {/* <Select placeholder="Sort By" className="min-w-44" options={[{ label: 'Name', value: 'Name' }]} /> */}
                </div>
            </div>
            <TotalClientTable pagination={{
                pageSize: Clients?.meta?.limit,
                total: Clients?.meta?.total,
                current: page,
                onChange: (page) => setPage(page),
                showSizeChanger: false
            }} data={Clients?.data} />
        </>
    )
}

export default TotalClient

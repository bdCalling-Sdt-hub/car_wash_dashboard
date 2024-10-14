import { useState } from "react";
import DriverTable from "../../Components/Driver/DriverTable";
import PageHeading from "../../Components/Shared/PageHeading";
import Search from "../../Components/Shared/Search";
import { useFetchClientsRequestQuery } from "../../Redux/Apis/clientApis";

const TotalRequest = () => {
    const [page, setPage] = useState(1);  // Initialize page with default value of 1
    const [searchTerm, setSearchTerm] = useState('');
    const { data: ClientRequest } = useFetchClientsRequestQuery({ searchTerm, page });

    return (
        <>
            <div className="between-center gap-2 mb-2">
                <PageHeading text="Total Request" />
                <Search placeholder="Search Worker" handler={(value) => setSearchTerm(value)} />
            </div>
            <DriverTable
                data={ClientRequest?.data?.result?.slice(0, 5) || []}
                pagination={{
                    total: ClientRequest?.data?.total,
                    pageSize: ClientRequest?.data?.limit,
                    showSizeChanger: false,
                    current: page,
                    onChange: (page) => setPage(page),
                }}
            />
        </>
    );
};

export default TotalRequest;

{/* <DriverTable data={data} type='request' pagination={{
                total: ClientRequest?.data?.total,
                pageSize: ClientRequest?.data?.limit,
                showSizeChanger: false,
                current:page,
                onChange: (page) => {
                  setPage(page)
                }
            }} /> */}


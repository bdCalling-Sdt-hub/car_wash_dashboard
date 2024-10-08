import { Select } from "antd"
import TotalClientTable from "../../Components/Client/TotalClientTable"
import PageHeading from "../../Components/Shared/PageHeading"
import Search from "../../Components/Shared/Search"
import { useFetchClientsQuery } from "../../Redux/Apis/clientApis"
import Loading from "../../Components/Shared/Loading"

const TotalClient = () => {
    const { data: Clients, isLoading, isFetching } = useFetchClientsQuery()
    const data = Clients?.data?.map((item, index) => {
        return {
            SerialNo: index + 1,
            Name: item?.name || "N/A",
            Location: item?.address || "Unknown Address",
            Date: new Date(item?.createdAt).toLocaleString(),
            ContactInfo: item?.phone_number || "N/A",
            MemberOfPackage: item?.currentSubscription ? item.currentSubscription.packageTitle : "No Package",
            image: item?.profile_image || "",
            currentServiceNumber: item?.currentServiceNumber,
            availableService: item?.availableService,
            totalService: item?.totalService,
            _id: item?._id
        };
    });
    return (
        <>
            {
                (isLoading || isFetching) && <Loading />
            }
            <div className="mb-3 between-center">
                <PageHeading text="Total Client" />
                <div className="end-center gap-2">
                    <div className="-mb-6">
                        <Search placeholder="Search Client" />
                    </div>
                    <Select placeholder="Sort By" className="min-w-44" options={[{ label: 'Name', value: 'Name' }]} />
                </div>
            </div>
            <TotalClientTable data={data} />
        </>
    )
}

export default TotalClient

import { useFetchClientsRequestQuery } from "../../Redux/Apis/clientApis"
import DriverTable from "../Driver/DriverTable"



const ClientRequest = () => {
    const { data: ClientRequest } = useFetchClientsRequestQuery({})
    return <DriverTable data={ClientRequest?.data?.result?.slice(0, 5) || []} pagination={false} />
}

export default ClientRequest

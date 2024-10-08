
import { Link } from "react-router-dom"
import { useFetchWorkersQuery } from "../../Redux/Apis/workerApis"
import WorkerActivitiesTable from "../Work/WorkerActivitiesTable"

const WorkerActivities = () => {
    const { data: workers } = useFetchWorkersQuery({ status: 'activity' })
    return <div className="h-full bg-[var(--color-white)] p-1 rounded-md">
        <div className="between-center">
            <h2 className="heading">work activities</h2>
            <Link to={`/pending-wash`}>view all</Link>
        </div>
        <WorkerActivitiesTable data={workers?.data?.result?.slice(0, 4)} pagination={false} />
    </div>
}
export default WorkerActivities

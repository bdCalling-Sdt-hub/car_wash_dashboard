import { Suspense } from 'react'
import IncomeCard from '../../Components/Dashboard/IncomeCard'

import { Link } from 'react-router-dom'
import Loading from '../../Components/Shared/Loading'
import SpaRevenue from '../../Components/Dashboard/SpaRevenue'
import WorkerActivities from '../../Components/Dashboard/WorkerActivities'
import ClientRequest from '../../Components/Dashboard/ClientRequest'
import { useFetchOverviewCardDataQuery } from '../../Redux/Apis/overviewApis'

const DashboardHome = () => {
    const { data, isLoading } = useFetchOverviewCardDataQuery()
    const formatData = [
        {
            name: 'Total User',
            // icon: <GrMoney size={36} />,
            total: data?.data?.totalUsers || 0
        },
        {
            name: 'Total Worker',
            total: data?.data?.totalWorker || 0
        },
        {
            name: 'Total Client',
            total: data?.data?.totalClient || 0
        },
        {
            name: 'New subscriber',
            total: data?.data?.newSubscriptions || 0
        },
    ]
    return (
        <div className='bg-[var(--bg-gray-20)] p-4 rounded-md'>
            {
                isLoading && <Loading />
            }
            <div className='grid-4 gap-3'>
                {
                    formatData?.map((item, i) => <div key={i} className='w-full h-full rounded-md p-4 py-6 bg-[var(--bg-white)]'>
                        <IncomeCard item={item} />
                    </div>)
                }
            </div>
            <div className='grid-2 gap-3 mt-5'>
                <Suspense fallback={''}>
                    <SpaRevenue />
                </Suspense>
                <div className='h-full'>
                    <Suspense fallback={''}>
                        <WorkerActivities />
                    </Suspense>
                </div>
            </div>
            <div className='bg-[var(--bg-white)] p-4 rounded-md mt-5'>
                <div className='between-center mb-3'>
                    <p className='heading'>Client Request</p>
                    <Link className='text-[var(--color-blue)]' to={`/total-request`}>
                        View all
                    </Link>
                </div>
                <Suspense fallback={''}>
                    <ClientRequest />
                </Suspense>
            </div>
        </div>
    )
}

export default DashboardHome

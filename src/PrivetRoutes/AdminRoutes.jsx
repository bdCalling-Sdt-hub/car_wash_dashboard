
import { useGetProfileQuery } from '../Redux/Apis/authApi'
import Loading from '../Components/Shared/Loading'
import toast from 'react-hot-toast'
import { Navigate, useLocation } from 'react-router-dom'

const AdminRoutes = ({ children }) => {
    const { data, isLoading, isError, error, isFetching } = useGetProfileQuery()
    const location = useLocation()
    if (isLoading || isFetching) return <Loading />
    if (isError) {
        toast.dismiss()
        toast.error(error?.data?.message || 'something went wrong please login Again')
        return <Navigate to={`/login`} state={location.pathname} ></Navigate>
    }
    if (data?.data?.role !== 'ADMIN') {
        toast.error('you are not authorized to access this page')
        // localStorage.removeItem('token')
        return <Navigate to={`/login`} state={location.pathname} ></Navigate>
    }
    return children
}

export default AdminRoutes

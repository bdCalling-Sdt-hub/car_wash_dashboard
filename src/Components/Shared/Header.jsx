import { Badge } from 'antd'
import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import profile from '../../assets/icons/itachi.jpg'
import { useNavigate } from 'react-router-dom'
import { useGetProfileQuery } from '../../Redux/Apis/authApi'
import { url } from '../../Utils/BaseUrl'
import { useSocketContext } from '../../Context/SocketContext'
import { imageUrl } from '../../Redux/BaseUrl'
const Header = () => {
    //states
    const navigate = useNavigate()
    //  rtk query
    const { data } = useGetProfileQuery()
    const { notifications } = useSocketContext();
    const unreadNotifications = notifications?.filter((notification) => notification?.isRead === false);
    return (
        <div className='bg-[var(--primary-bg)] end-center h-[110px] px-4 gap-6'>
            <Badge onClick={() => navigate('/notification')} className='bg-[var(--bg-white)] rounded-full cursor-pointer' count={unreadNotifications.length || 0}>
                <IoIosNotifications size={40} />
            </Badge>
            <div onClick={() => navigate('/profile')} className='center-center gap-2 px-3 w-fit py-1 border border-[var(--bg-white)] rounded-md cursor-pointer'>
                <img className='w-10 h-10 rounded-full object-cover' src={imageUrl(data?.data?.profile_image) ? imageUrl(data?.data?.profile_image) : profile} alt="" />
                <p className='text-base text-[var(--color-white)]'>{data?.data?.name}</p>
            </div>
        </div>
    )
}

export default Header

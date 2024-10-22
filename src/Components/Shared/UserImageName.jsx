import React from 'react'
import profile from '../../assets/icons/itachi.jpg'
import { url } from '../../Utils/BaseUrl'
import { imageUrl } from '../../Redux/BaseUrl'
const UserImageName = ({ name, image }) => {
    return (
        <div className='start-center gap-2'>
            <img src={image ? imageUrl(image) : profile} alt={name} className='h-10 w-10 rounded-md object-cover' />
            <p className='text-base capitalize font-medium'>{name}</p>
        </div>
    )
}

export default UserImageName

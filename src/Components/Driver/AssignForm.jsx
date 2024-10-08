import { Form, Input } from 'antd'
import { AssignWorkFields } from '../../Utils/FormFields/AssignWorkFields'
import TextArea from 'antd/es/input/TextArea'

import L, { icon } from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Map from '../Shared/Map';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TotalClientTable from '../Client/TotalClientTable';
import DriverTable from './DriverTable';
import Loading from '../Shared/Loading';
import Search from '../Shared/Search';
import { useFetchNerByWorkerQuery } from '../../Redux/Apis/workerApis';

const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41]
});
const data2 = [
    {
        "SerialNo": 1,
        "Name": "Md Nazmul Hoque",
        "Location": "2118 Thornridge Cir, Syracuse",
        "ContactInfo": "+7-445-557-6943",
        "NumberOfSpa": "1st",
        "Action": "Assign",
        "Image": ""
    },
    {
        "SerialNo": 2,
        "Name": "Fanthaur Rahman",
        "Location": "2972 Westheimer Rd, Santa Ana",
        "ContactInfo": "+1 470 9181 8588",
        "NumberOfSpa": "2nd",
        "Action": "Assign",
        "Image": ""
    },
    {
        "SerialNo": 3,
        "Name": "Jowwad Hossain",
        "Location": "6381 Elgin St, Celina",
        "ContactInfo": "+1 (684) 555-0102",
        "NumberOfSpa": "3rd",
        "Action": "Assign",
        "Image": ""
    },
    {
        "SerialNo": 4,
        "Name": "Al-Amin",
        "Location": "2716 Ash Dr, San Jose",
        "ContactInfo": "+1 (225) 555-0118",
        "NumberOfSpa": "4th",
        "Action": "Assign",
        "Image": ""
    }
]

const AssignForm = ({ closeModal, selectedId }) => {
    const [showMap, setShowMap] = useState(false)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [search, setSearch] = useState(null)
    const { data: availableWorker, isLoading, isFetching } = useFetchNerByWorkerQuery({ jobId: selectedId, limit, page, search })

    const [locationData, setLocation] = useState([]);
    // {
    //     latitude: 23.7619,
    //     longitude: 90.4331,
    //     popup: 'You are here',
    //     icon: customIcon
    // }

    const map = useMemo(() => {
        return <div className='w-full h-full'>
            {showMap ? <Map height={300} key={location.pathname} locationData={locationData} /> : <div className='h-[300px] w-full relative'>
                <Loading />
            </div>}
        </div>
    }, [locationData, location.pathname, showMap])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMap(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [locationData, location.pathname])
    useEffect(() => {
        const coordinates = availableWorker?.data?.workers?.map(item => ({
            longitude: item?.location?.coordinates?.[0],
            latitude: item?.location?.coordinates?.[1],
            popup: 'You are here',
            icon: customIcon
        }))
        setLocation(coordinates)
    }, [availableWorker?.data?.workers])
    return (
        <div className='p-4 pt-10'>
            {
                (isLoading || isFetching) && <Loading />
            }
            <div className='between-center'>
                <p className='text-xl'>All Order</p>
                {/* <Search handler={(value) => setSearch(value)} /> */}
            </div>
            {map}
            <div>
                {
                    (location?.pathname === '/total-request' || location?.pathname === '/') ? <TotalClientTable modal={true} pagination={{
                        pageSize: availableWorker?.data?.meta?.limit,
                        current: page,
                        total: availableWorker?.data?.meta?.total,
                        showSizeChanger: false,
                        onChange: (page) => {
                            setPage(page)
                        }
                    }} data={availableWorker?.data?.workers} jobId={selectedId} closeModal={closeModal} /> : <DriverTable data={data2} modal={true} pagination={false} />
                }
            </div>
        </div>
    )
}

export default AssignForm

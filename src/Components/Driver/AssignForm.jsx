import { Form, Input } from 'antd'
import { AssignWorkFields } from '../../Utils/FormFields/AssignWorkFields'
import TextArea from 'antd/es/input/TextArea'

import L, { icon } from 'leaflet';
import mark from '../../assets/icons/mark.png'
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
const clientIcon = new L.Icon({
    iconUrl: mark,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41]
});

const AssignForm = ({ closeModal, selectedId }) => {
    const [showMap, setShowMap] = useState(false)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [search, setSearch] = useState(null)
    const { data: availableWorker, isLoading, isFetching } = useFetchNerByWorkerQuery({ jobId: selectedId, limit, page, search })
    const [locationData, setLocation] = useState([{
        latitude: 0,
        longitude: 0,
        popup: 'Default Location',
        icon: customIcon
    }]);
    const map = useMemo(() => {
        return <div className='w-full h-full'>
            {showMap ? <Map height={300} key={location.pathname} center={[locationData?.[0]?.longitude, locationData?.[0]?.latitude]} locationData={locationData} /> : <div className='h-[300px] w-full relative'>
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
        if (!availableWorker?.data?.workers || !availableWorker?.data?.jobLocation?.coordinates) return;

        const coordinates = availableWorker?.data?.workers?.map(item => ({
            longitude: item?.location?.coordinates?.[0],
            latitude: item?.location?.coordinates?.[1],
            popup: `${item?.name} are here`,
            icon: customIcon
        }));

        coordinates.unshift({
            longitude: availableWorker?.data?.jobLocation?.coordinates?.[0],
            latitude: availableWorker?.data?.jobLocation?.coordinates?.[1],
            popup: 'Client Is Here',
            icon: clientIcon
        });

        setLocation(coordinates);
    }, [availableWorker?.data?.workers, availableWorker?.data?.jobLocation?.coordinates]);
    console.log(availableWorker?.data?.workers)
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
                    (location?.pathname === '/total-request' || location?.pathname === '/') && <TotalClientTable modal={true} pagination={{
                        pageSize: availableWorker?.data?.meta?.limit,
                        current: page,
                        total: availableWorker?.data?.meta?.total,
                        showSizeChanger: false,
                        onChange: (page) => {
                            setPage(page)
                        }
                    }} data={availableWorker?.data?.workers} jobId={selectedId} closeModal={closeModal} />
                }
            </div>
        </div>
    )
}
//: <DriverTable data={data2} modal={true} pagination={false} />
export default AssignForm

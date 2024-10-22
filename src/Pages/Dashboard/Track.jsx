import { useEffect, useMemo, useState } from "react";
import Map from "../../Components/Shared/Map";
import L, { icon } from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import PageHeading from "../../Components/Shared/PageHeading";
import { useFetchSingleJobQuery } from "../../Redux/Apis/workerApis";
import Loading from "../../Components/Shared/Loading";
import moment from "moment";
import { TbLocationOff } from "react-icons/tb";
import { imageUrl } from "../../Redux/BaseUrl";
const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41]
});
const Track = () => {
    const [id, setId] = useState(new URLSearchParams(location.search).get('id') || 1)
    const { data, isLoading, isFetching } = useFetchSingleJobQuery(id)
    // console.log(data?.data)
    const [locationData, setLocation] = useState([
        {
            latitude: data?.data?.job?.assignedWorker?.location?.coordinates?.[1] || 0,
            longitude: data?.data?.job?.assignedWorker?.location?.coordinates?.[0] || 0,
            popup: 'Worker is here',
            icon: customIcon
        },
        {
            latitude: data?.data?.job?.jobLocation?.coordinates?.[1] || 0,
            longitude: data?.data?.job?.jobLocation?.coordinates?.[0] || 0,
            popup: 'Client is here',
            icon: customIcon
        },
    ]);

    useEffect(() => {
        setLocation([
            {
                // latitude: data?.data?.job?.assignedWorker?.location?.coordinates?.[1] || 0,
                // longitude: data?.data?.job?.assignedWorker?.location?.coordinates?.[0] || 0,
                latitude: data?.data?.job?.assignedWorker?.location?.coordinates?.[1] || 0,
                longitude: data?.data?.job?.assignedWorker?.location?.coordinates?.[0] || 0,
                popup: 'Worker is here',
                icon: customIcon
            },
            {
                latitude: data?.data?.job?.jobLocation?.coordinates?.[1] || 0,
                longitude: data?.data?.job?.jobLocation?.coordinates?.[0] || 0,
                popup: 'Client is here',
                icon: customIcon
            },
        ])
    }, [data?.data])
    const showMap = useMemo(() => {
        // latitude,longitude
        if (!locationData?.[0]?.latitude || !locationData?.[0]?.longitude) {
            return <p className="mt-8 uppercase font-semibold text-red-500 center-center gap-5"><TbLocationOff size={30} /> location not found</p>
        }
        const center = [locationData[0].latitude, locationData[0].longitude]
        console.log(center)
        return <Map height={400} key={location.pathname} locationData={locationData} center={center} />
    }, [locationData])
    return (
        <>
            {
                (isFetching || isLoading) && <Loading />
            }
            <PageHeading text="Track" />
            <div className='my-4 center-center  gap-6'>
                <div>
                    <p>Client</p>
                    <div className="p-3 border border-gray-300">
                        <div className="start-center gap-2">
                            <img src={imageUrl(data?.data?.client?.profile_image) || "https://i.ibb.co.com/MPtkVmj/istockphoto-1327592506-612x612-2.jpg"} className='h-10 w-10 object-cover rounded-full' alt="" />
                            <div>
                                <p className="font-semibold">{data?.data?.client?.name}</p>
                                <p className="text-sm">{data?.data?.client?.email}</p>
                            </div>
                        </div>
                        {/* <div className="start-center gap-2 mt-2">
                            <p className="text-sm">date : 04-12-2024</p>
                            <p className="text-sm">Time : 10 : 00 AM</p>
                        </div>
                        <p className="text-sm">Location : Stockton, New Hampshire</p>
                        <p className="text-sm">Contact Number:011 2562 1569 66</p> */}
                    </div>
                </div>
                <div>
                    <p>Driver</p>
                    <div className="p-3 border border-gray-300">
                        <div className="start-center gap-2">
                            <img src={imageUrl(data?.data?.job?.assignedWorker?.profile_image) || "https://i.ibb.co.com/MPtkVmj/istockphoto-1327592506-612x612-2.jpg"} className='h-10 w-10 object-cover rounded-full' alt="" />
                            <div>
                                <p className="font-semibold">{data?.data?.job?.assignedWorker?.name}</p>
                                <p className="text-sm">{data?.data?.job?.assignedWorker?.email}</p>
                            </div>
                        </div>
                        {/* <div className="start-center gap-2 mt-2">
                            <p className="text-sm">date : 04-12-2024</p>
                            <p className="text-sm">Time : 10 : 00 AM</p>
                        </div>
                        <p className="text-sm">Location : Stockton, New Hampshire</p>
                        <p className="text-sm">Contact Number:011 2562 1569 66</p> */}
                    </div>
                </div>
            </div>
            <div className="p-3 border border-gray-300 w-fit mx-auto px-7 mb-2">
                <p className="text-center font-semibold">Work Details</p>
                <p className="text-center">Location : {data?.data?.job?.address}</p>
                <p className="text-sm">Time : {moment(data?.data?.job?.bookedDateTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            {/* <Map height={400} key={location.pathname} locationData={locationData} /> */}
            {
                showMap
            }
        </>
    );
};

export default Track;

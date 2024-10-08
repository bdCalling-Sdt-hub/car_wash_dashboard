import { useState } from "react";
import Map from "../../Components/Shared/Map";
import L, { icon } from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import PageHeading from "../../Components/Shared/PageHeading";
const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41]
});
const Track = () => {
    const [id, setId] = useState(useState(new URLSearchParams(location.search).get('id') || 1))
    const [locationData, setLocation] = useState([
        {
            latitude: 23.7619,
            longitude: 90.4331,
            popup: 'Client is here',
            icon: customIcon
        },
        {
            latitude: 23.7619,
            longitude: 90.45,
            popup: 'Driver is here',
            icon: customIcon
        },
    ]);
    return (
        <>
            <PageHeading text="Track" />
            <div className='my-4 center-center  gap-6'>
                <div>
                    <p>Client</p>
                    <div className="p-3 border border-gray-300">
                        <div className="start-center gap-2">
                            <img src="https://i.ibb.co.com/MPtkVmj/istockphoto-1327592506-612x612-2.jpg" className='h-10 w-10 rounded-full' alt="" />
                            <div>
                                <p className="font-semibold">Fatma Jannat</p>
                                <p className="text-sm">fatmajannat@gmail.com</p>
                            </div>
                        </div>
                        <div className="start-center gap-2 mt-2">
                            <p className="text-sm">date : 04-12-2024</p>
                            <p className="text-sm">Time : 10 : 00 AM</p>
                        </div>
                        <p className="text-sm">Location : Stockton, New Hampshire</p>
                        <p className="text-sm">Contact Number:011 2562 1569 66</p>
                    </div>
                </div>
                <div>
                    <p>Driver</p>
                    <div className="p-3 border border-gray-300">
                        <div className="start-center gap-2">
                            <img src="https://i.ibb.co.com/MPtkVmj/istockphoto-1327592506-612x612-2.jpg" className='h-10 w-10 rounded-full' alt="" />
                            <div>
                                <p className="font-semibold">Fatma Jannat</p>
                                <p className="text-sm">fatmajannat@gmail.com</p>
                            </div>
                        </div>
                        <div className="start-center gap-2 mt-2">
                            <p className="text-sm">date : 04-12-2024</p>
                            <p className="text-sm">Time : 10 : 00 AM</p>
                        </div>
                        <p className="text-sm">Location : Stockton, New Hampshire</p>
                        <p className="text-sm">Contact Number:011 2562 1569 66</p>
                    </div>
                </div>

            </div>
            <Map height={400} key={location.pathname} locationData={locationData} />
        </>
    );
};

export default Track;

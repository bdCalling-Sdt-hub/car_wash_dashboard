import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Map = ({ locationData, height, center }) => {
    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 setLocation({
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude,
    //                 });
    //             },
    //             (error) => {
    //                 console.error('Error fetching location:', error);
    //             }
    //         );
    //     }
    // }, []);

    return (
        <div style={{ height: `${height}px` || "300px", width: '100%' }}>
            <MapContainer
                // center={[locationData?.[0]?.longitude , locationData?.[0]?.longitude]}
                center={center}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    locationData?.map((item, i) => (
                        <Marker key={i}
                            position={[item.latitude, item.longitude]}
                            icon={item?.icon}
                        >
                            <Popup>{item?.popup}</Popup>
                        </Marker>
                    ))
                }

            </MapContainer>
        </div>
    );
};//                        position={[23.7829, 90.3954]}


export default Map

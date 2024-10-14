import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ locationData, height = 300, center = [23.7815, 90.4002] }) => { // Fallback center to a known location
    return (
        <div style={{ height: `${height}px`, width: '100%' }}>
            <MapContainer
                center={center}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    locationData?.length ? locationData.map((item, i) => (
                        <Marker key={i}
                            position={[item.latitude || 23.7815, item.longitude || 90.4002]} // Fallback to known coordinates
                            icon={item?.icon || null}
                        >
                            <Popup>{item?.popup || 'No information available'}</Popup>
                        </Marker>
                    )) : (
                        <Marker position={[23.7815, 90.4002]}> {/* Fallback marker */}
                            <Popup>Fallback marker</Popup>
                        </Marker>
                    )
                }
            </MapContainer>
        </div>
    );
};

export default Map;

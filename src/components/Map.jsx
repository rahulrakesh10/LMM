import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { eventService } from '../services/eventService';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const allEvents = eventService.getEvents();
        // Filter events with mock coordinates for demo
        // In real app, we would geocode the location string
        const eventsWithCoords = allEvents.map(e => ({
            ...e,
            lat: 51.505 + (Math.random() - 0.5) * 10, // Mock coords
            lng: -0.09 + (Math.random() - 0.5) * 10
        }));
        setEvents(eventsWithCoords);
    }, []);

    return (
        <div className="h-[calc(100vh-64px)] w-full">
            <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} className="h-full w-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {events.map(event => (
                    <Marker key={event.id} position={[event.lat, event.lng]}>
                        <Popup>
                            <div className="text-center">
                                <h3 className="font-bold">{event.title}</h3>
                                <p>{event.location}</p>
                                <p className="text-xs text-gray-500">{new Date(event.startDate).toLocaleDateString()}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

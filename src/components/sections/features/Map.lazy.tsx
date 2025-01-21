import { MapContainer, Popup, TileLayer } from 'react-leaflet'
import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface Markers {
    desc: string;
    lat: number;
    long: number;
}

const Markers: Markers[] = [
    { desc: "Edson, Line Replacement / Integrity Digs", lat: 53.58345, long: -116.43559 },
    { desc: "Whitecourt, Integrity Digs", lat: 54.14111, long: -115.68416 },
    { desc: "Youngstown, Valve Replacement", lat: 51.5288, long: -111.21027 },
    { desc: "Calgary, Skid Package", lat: 51.05011, long: -114.08529 },
    { desc: "Burton Creek, Structural Steel", lat: 49.96361, long: -114.14944 },
    { desc: "Bottrel, Valve Replacement", lat: 51.40121, long: -114.468 },
    { desc: "Princess, Environmental", lat: 50.698424, long: -111.531989 },
    { desc: "Burstall, Launcher / Integrity Digs / Line Replacement", lat: 50.67887, long: -109.969735 },
    { desc: "Golden Prairie, Integrity Digs", lat: 50.226773, long: -109.410135 },
    { desc: "Maple Creek, Integrity Digs", lat: 49.916663, long: -109.4666648 },
    { desc: "Piapot, Integrity Digs", lat: 50.124054, long: -109.5364 },
    { desc: "Liebenthal, Integrity Digs", lat: 50.6596, long: -109.32 },
    { desc: "Abbey, Integrity Digs", lat: 50.73497, long: -108.75848 },
    { desc: "Cabri, Integrity Digs / Line Replacements / Environmental", lat: 50.6166642, long: -108.449998 },
    { desc: "Shaunavon, Integrity Digs", lat: 49.628751, long: -108.456765 },
    { desc: "Monchy, Valve Replacement / Civil", lat: 49.00318, long: -107.54405 },
    { desc: "Herbert, Integrity Digs", lat: 50.427, long: -107.227 },
    { desc: "Chaplin, Integrity Digs", lat: 50.4562, long: -106.6528 },
    { desc: "Moose Jaw, Integrity Digs", lat: 50.40005, long: -105.53445 },
    { desc: "Regina, Integrity Digs / Meter station construction", lat: 50.45008, long: -104.6178 },
    { desc: "Grenfell, Line replacement / valve replacement", lat: 50.416665, long: -102.916663 },
    { desc: "Broadview, Integrity Digs", lat: 50.376, long: -102.579 },
    { desc: "Moosomin, Integrity Digs / valve replacement", lat: 50.41066, long: -102.9322 },
    { desc: "Vibank, Integrity Digs", lat: 50.334023, long: -103.945735 },
    { desc: "Pense, Environmental", lat: 50.415817, long: -104.981505 },
    { desc: "Hamiota, Integrity Digs", lat: 50.180555, long: -100.596111 },
    { desc: "Rapid City, Integrity Digs", lat: 50.1211667, long: -100.04167 },
    { desc: "Rivers, Integrity Digs / Environmental", lat: 50.0251, long: -100.2369 },
    { desc: "Emerson, Integrity Digs", lat: 49.00551, long: -97.207821 },
    { desc: "Isle Des Chenee, Integrity Digs", lat: 49.79181, long: -96.98771 },
    { desc: "West Falcon Lake, Integrity Digs", lat: 49.7018, long: -95.2423 },
    { desc: "Portage la Prairie, Integrity Digs", lat: 49.9728, long: -98.2926 },
    { desc: "Oak Bluff, Integrity Digs", lat: 49.7736, long: -97.3221 },
    { desc: "Kenora, Integrity Digs", lat: 49.76666, long: -94.48333 },
    { desc: "Dryden, Integrity Digs", lat: 49.780094, long: -92.836960 },
    { desc: "English River, Integrity Digs", lat: 50.6360052, long: -93.189040 },
    { desc: "Ingnace, Integrity Digs / Line Replacment", lat: 49.415946, long: -91.658744 },
    { desc: "Upsala, Integrity Digs / Valve Replacement", lat: 49.0500, long: -90.4667 },
    { desc: "Nipigon, Integrity Digs", lat: 49.0157, long: -88.2683 }
];

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).toString(),
    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).toString(),
    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).toString(),
});

const Map = () => {


    return (
        <MapContainer
            center={[51.529, -98.492]}
            zoom={4}
            maxZoom={18}
            className='w-full block'
            scrollWheelZoom={true}
            style={{ height: "400px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {Markers.map((marker, idx) => (
                <Marker key={`marker-${idx}`} position={[marker.lat, marker.long]}>
                    <Popup>
                        {marker.desc}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );

};

export default Map;



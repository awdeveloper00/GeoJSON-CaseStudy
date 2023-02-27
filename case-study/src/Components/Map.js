import React from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Map({ data }) {
  return (
    <div className="d-flex justify-content-center">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={15}
        style={{
          height: "500px",
          width: "500px",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON
          data={data}
          style={{ weight: 2, opacity: 1, fillOpacity: 0.5 }}
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

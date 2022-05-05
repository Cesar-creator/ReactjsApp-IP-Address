import React from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { LocationMarker } from "./LocationMarker";


export const Map = (props) => {

        return (
            <div className="fluid-container map">
                <MapContainer
                    className="map"
                    center={props.position}
                    zoom={20}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker position={props.position} />
                </MapContainer>
            </div>
        );
}

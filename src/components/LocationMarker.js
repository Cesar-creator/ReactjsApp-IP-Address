import React from 'react';
import { icon } from "leaflet";
import loactionI from "../images/icon-location.svg";
import { Marker, useMapEvents } from "react-leaflet";

export const LocationMarker = (props) => {
    let marker = icon({
        iconUrl: loactionI,
        iconSize: [46, 56],
    });
    const map = useMapEvents({});
    map.flyTo(props.position, map.getZoom());
    return props.position === null ? null : (
        <Marker position={props.position} icon={marker}></Marker>
    );
}

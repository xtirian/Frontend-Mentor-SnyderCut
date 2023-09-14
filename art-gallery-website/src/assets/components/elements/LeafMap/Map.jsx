import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";

import mapIcon from "./icon.png"; //the require didn't worked

import "./map.scss";

import React from "react";
import { Icon } from "leaflet";

const Map = () => {
  const position = [-22.9975, -43.3577];
  const markers = [
    { geocode: [-22.9975, -43.3577], popUp: "Barra Shopping" },
    { geocode: [-22.9983000, -43.3659000], popUp: "Cidade das Artes" },
    { geocode: [-22.9957,-43.3727], popUp: "Parque Natural Minucipal Bosque da Barra" },
    { geocode: [-23.0059,-43.3632], popUp: "Lagoa Marapendi" },
  ];

  const customIcon = new Icon({
    iconUrl: mapIcon, //icon url
    iconSize: [50, 70], //size of the icon
  });

  return (
    <MapContainer center={position} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer      
      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' />



      <MarkerClusterGroup>
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;

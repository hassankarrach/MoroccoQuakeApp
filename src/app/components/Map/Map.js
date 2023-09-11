import React, { useMemo } from "react";
import { StyledMap } from "./Styled.Map";
//MarkersUIs
import CenterMarker from "./markers/CenterMarker";
//GoogleMap_api
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";

function Map() {
  const center = useMemo(() => ({ lat: 31.054, lng: -8.394 }));
  const mapOptions = {
    styles: [
      [
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.arterial",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.local",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
      ],
    ],
  };

  //Markers
  const Epicenter = {
    url: "path/to/your/custom-icon.png", // Replace with the path to your custom icon
    scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
    origin: new window.google.maps.Point(0, 0), // Change the origin point if necessary
    anchor: new window.google.maps.Point(20, 40), // Adjust the anchor point
  };
  return (
    <StyledMap>
      <GoogleMap
        zoom={8}
        center={center}
        mapContainerClassName="map-container"
        options={mapOptions}
      >
        <Marker position={center}>
          <CenterMarker />
        </Marker>
      </GoogleMap>
    </StyledMap>
  );
}

export default Map;

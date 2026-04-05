"use client";

import { useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import { ExternalLink } from "lucide-react";
import { schoolLocation } from "@/lib/data";

const GOOGLE_TILE_URL = "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";
const GOOGLE_SUBDOMAINS = ["mt0", "mt1", "mt2", "mt3"];

export function SchoolMap() {
  const markerIcon = useMemo(
    () =>
      L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      }),
    []
  );

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#2b4b72]/45 shadow-[0_20px_42px_rgba(0,0,0,0.45)]">
      <a
        href={schoolLocation.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-3 top-3 z-[600] inline-flex items-center gap-1 rounded-lg bg-white px-2.5 py-1.5 text-xs font-semibold text-[#1d4f9d] shadow-md hover:bg-[#f5f9ff]"
      >
        Buka di Maps
        <ExternalLink className="size-3.5" />
      </a>

      <MapContainer
        center={schoolLocation.coordinates}
        zoom={17}
        scrollWheelZoom={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
        className="h-[230px] w-full"
      >
        <TileLayer
          attribution="&copy; Google Maps"
          url={GOOGLE_TILE_URL}
          subdomains={GOOGLE_SUBDOMAINS}
          maxZoom={20}
        />

        <ZoomControl position="topright" />

        <Marker position={schoolLocation.coordinates} icon={markerIcon}>
          <Popup>
            <p className="font-semibold">{schoolLocation.name}</p>
            <p>{schoolLocation.address}</p>
            <a
              href={schoolLocation.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1f67d8]"
            >
              Buka di Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

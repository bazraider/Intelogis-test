import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine";
import { useEffect } from "react";

export default function Routing({ coord }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const waypoints = [
      L.latLng(
        coord?.[0]?.[0],
        coord?.[0]?.[1]
      ),
      L.latLng(
        coord?.[1]?.[0],
        coord?.[1]?.[1]
      ),
    ];

    const routingControl = L.Routing.control({
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 5 }],
      },
      waypoints,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [coord, map])

  return null;
}
import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

export default function Routing({ id, coord }) {
  const allPoints = useSelector((store) => store.points.features);
  const pointsArray = id.map(el => {
    for (let point of allPoints) {
      if (point.properties.POINT_ID === el) return point;
    }
  });

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
      createMarker: function (i, wp, nWps) {
        let info = `<h2>${pointsArray[i]?.properties?.NAME}</h2>
        <span>${pointsArray[i]?.properties?.DESCRIPTIO}</span>
        `
        return L.marker(wp.latLng)
          .bindPopup(info);
      },
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [coord, map])

  return null;
}
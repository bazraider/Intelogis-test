import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ coord }) => {

  console.log("~ coord", coord);

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(coord?.[0]?.[0], coord?.[0]?.[1]),
      L.latLng(coord?.[1]?.[0], coord?.[1]?.[1]),
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false
  });
  console.log("~ instance", instance);

  return instance;
};

const Routing = createControlComponent(createRoutineMachineLayer);
export default Routing;

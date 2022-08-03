import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import pointsData from '../../data/points.json'

export default function LeafletMap() {
  return (
    <MapContainer
      center={[55.752185526060266, 37.617590770030965]}
      zoom={10}
      style={{ width: '100%', height: '790px', borderRadius: '0 15px 15px 0' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pointsData.features.map(point => (
        <Marker
          key={point.properties.POINT_ID}
          position={[
            point.geometry.coordinates[0],
            point.geometry.coordinates[1]
          ]}
        >
          <Popup>
            <h2>{point.properties.NAME}</h2>
            <p>{point.properties.DESCRIPTIO}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Routing from './Routing/Routing'

export default function LeafletMap({ id, coord }) {
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
      {coord?.length &&
        coord?.map((point, index) => (
          <>
            {/* <Marker
              key={index}
              position={[
                point?.[0] ?? '',
                point?.[1] ?? '',
              ]}
            >
            </Marker> */}
            <Routing coord={coord} />
          </>
        ))
      }
    </MapContainer>
  )
}

// Example of Popup
// <Popup>
//   <h2>{point.properties.NAME}</h2>
//   <p>{point.properties.DESCRIPTIO}</p>
// </Popup>

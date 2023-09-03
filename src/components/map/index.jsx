import GoogleMapReact from 'google-map-react'
import LocationPin from '../locationPin';

const Map = ({ location, zoomLevel }) => (
    <div className="w-100 h-[383px]">
      <GoogleMapReact
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
        />
      </GoogleMapReact>
    </div>
)

export default Map

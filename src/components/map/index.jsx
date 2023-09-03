import GoogleMapReact from "google-map-react";
import LocationPin from "../locationPin";

const Map = ({ location, zoomLevel }) => (
  <div className="w-100 h-[383px] rounded-2xl overflow-hidden">
    <div className="h-full border border-gray-300">
      <GoogleMapReact defaultCenter={location} defaultZoom={zoomLevel}>
        <LocationPin lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;

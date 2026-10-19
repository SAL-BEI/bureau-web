import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import { ADDRESS, mapsDirectionsUrl } from "@/lib/contact";

export default function LocationCard() {
  return (
    <a className="location-card" href={mapsDirectionsUrl} target="_blank" rel="noreferrer" aria-label="Get directions to Bureau Graphics on Google Maps">
      <div className="map-art" aria-hidden="true">
        <span className="road road-one" />
        <span className="road road-two" />
        <span className="road road-three" />
        <span className="map-runway">WILSON AIRPORT</span>
        <span className="map-pin"><MapPin size={26} fill="currentColor" /></span>
      </div>
      <div className="location-content">
        <div className="location-icon"><Navigation size={19} /></div>
        <div>
          <p>Come say hello</p>
          <h2>Find us at Wilson Airport</h2>
          <address>{ADDRESS}</address>
        </div>
        <span className="location-link">Get directions <ArrowUpRight size={17} /></span>
      </div>
    </a>
  );
}

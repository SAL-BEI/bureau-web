import { CarFront, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { buildWhatsAppUrl, mapsDirectionsUrl, siteFacts, wazeDirectionsUrl } from "@/lib/site-facts";

export default function LocationCard() {
  return (
    <article className="location-card">
      <div className="map-art" aria-hidden="true">
        <span className="runway runway-one">14 / 32</span>
        <span className="runway runway-two">07 / 25</span>
        <span className="map-route" />
        <span className="map-pin"><MapPin size={25} fill="currentColor" /></span>
        <span className="map-label">Exit Lane</span>
        <span className="airport-label">Wilson Airport</span>
      </div>
      <div className="location-content">
        <div>
          <p className="context-label">Visit the studio</p>
          <h2>Wilson Airport, Nairobi</h2>
          <address>{siteFacts.address}</address>
        </div>
        <div className="location-actions">
          <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer" className="location-primary"><Navigation size={17} /> Google Maps</a>
          <a href={wazeDirectionsUrl} target="_blank" rel="noreferrer"><CarFront size={17} /> Waze</a>
          <a href={`tel:${siteFacts.phoneE164}`}><Phone size={17} /> Call</a>
          <a href={buildWhatsAppUrl({ topic: "Directions to your Wilson Airport studio" })} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
        </div>
      </div>
    </article>
  );
}

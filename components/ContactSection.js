import React from "react";
import { mapEmbedUrl, fullAddress } from "../lib/site";

function ContactSection() {
  return (
    <section className="relative h-[60vh] bg-cream-alt md:h-[70vh]">
      <iframe
        className="absolute inset-0 w-full h-full border-0"
        title={`Hartă: Scentio Milano, ${fullAddress}`}
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ filter: "grayscale(1) sepia(0.15) contrast(0.95)" }}
      ></iframe>
    </section>
  );
}

export default ContactSection;

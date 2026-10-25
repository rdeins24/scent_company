import Marquee from "../ui/Marquee";

// Banda rulantă cu domeniile în care lucrăm (numele segmentelor din content/<limbă>/segments.js).
export default function SegmentsMarquee({ segments }) {
  return (
    <div className="overflow-hidden border-b border-border bg-cream-alt py-5">
      <Marquee
        items={segments.map((segment) => segment.navLabel)}
        durationSeconds={28}
        itemClassName="whitespace-nowrap font-serif text-base italic text-muted-strong sm:text-xl"
      />
    </div>
  );
}

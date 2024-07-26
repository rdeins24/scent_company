import Image from "next/image";
import bottle from "../public/assets/img/bottle.jpg";
import dif from "../public/assets/img/dif.jpg";
import scent from "../public/assets/img/scent.jpg";
import expert from "../public/expert.jpg";

const callouts = [
  {
    description: "Creează-ți propria fraganță",
    imageSrc: bottle,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    description: "Difuzeaz-o în încăperi",
    imageSrc: dif,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    description: "Dezvolta colectie olfactiva",
    imageSrc: expert,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          {/* <h2 className="text-2xl font-bold text-gray-900">Collections</h2> */}

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-full  overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full object-cover object-center"
                  />
                </div>

                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                  </a>
                </h3>
                <p className="font-bold text-gray-900 text-2xl text-center align-middle">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

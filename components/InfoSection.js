import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import img from "../public/assets/img/pink.jpg";
import { FaAirFreshener } from "react-icons/fa";
import { FaRegLaughWink } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaEllo } from "react-icons/fa";
const features = [
  {
    name: "Transformarea Spațiilor",
    description:
      "Misiunea noastră este să transformăm spațiile cotidiene în experiențe olfactive memorabile, oferind soluții inovatoare și personalizate de marketing olfactiv. Prin difuzarea parfumurilor italiene de calitate superioară, ne propunem să îmbogățim mediul înconjurător și să aducem o notă de eleganță și rafinament în viața de zi cu zi.",
    icon: FaAirFreshener,
  },
  {
    name: "Conexiuni Emoționale",
    description:
      "Ne dedicăm să creăm conexiuni emoționale profunde prin intermediul miresmelor, stimulând simțurile și evocând amintiri plăcute. Fiecare proiect este unic și realizat cu atenție la detalii, pentru a reflecta identitatea și valorile fiecărui client, oferindu-le o experiență senzorială unică și personalizată.",
    icon: FaEllo,
  },
  {
    name: "Partener de Încredere",
    description:
      "Prin angajamentul nostru de a aduce cele mai fine arome și tehnologii de difuzie de ultimă generație, ne dorim să redefinim modul în care percepem și interacționăm cu mediul înconjurător. Misiunea noastră este să devenim partenerul de încredere pentru afaceri și instituții din întreaga lume, ajutându-le să creeze atmosfere de neuitat și să îmbunătățească experiența clienților lor.",
    icon: FaUserTie,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Misiunea Noastră :
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Suntem Scentio Milano, lideri în brandul olfactiv, născuți în
                Italia și extinzându-ne în întreaga lume.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-gray-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={img}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

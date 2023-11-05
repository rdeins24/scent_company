import {
  FaCreativeCommonsShare,
  FaCode,
  FaInstagram,
  FaExpandArrowsAlt,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    name: "Web Development",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: FaCreativeCommonsShare,
  },
  {
    name: "Social Media",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: FaCreativeCommonsShare,
  },
  {
    name: "Design UI/UX",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: FaCreativeCommonsShare,
  },
  {
    name: "Marketing Digital",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FaCreativeCommonsShare,
  },
];

export default function Features() {
  return (
    <div className="  py-24 sm:py-10 bg-[#0d0e11]  ">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <h2 className="mt-2 text-3xl font-bold sm:text-5xl">
            <span className="  bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent mt-2 text-3xl font-bold sm:text-5xl">
              Suntem pasionati
            </span>{" "}
            <h3 className="leading-[1.3]  ">
              în furnizarea unui spectru complet de servicii de marketing
              digital, susținută de idei îndrăznețe și inovații.
            </h3>
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16 text-white ">
              <div className=" font-semibold leading-7 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent  text-3xl">
                Web Development{" "}
              </div>
              <div className="mt-2 text-base leading-7 ">
                Echipa de dezvoltare web transformă ideile în realitate
                digitală, creând site-uri interactive și funcționale care vor
                face ca afacerea dvs. să strălucească online
              </div>
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                <FaCode />
              </div>
            </div>
            <div className="relative pl-16 text-white ">
              <div className=" font-semibold leading-7 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent  text-3xl">
                Social Media{" "}
              </div>
              <div className="mt-2 text-base leading-7 ">
                Vă ajutăm să vă conectați cu audiența în mod autentic și să vă
                creșteți prezența online, construind comunități angajate și
                dezvoltând relații durabile cu clienții.
              </div>
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                <FaInstagram />
              </div>
            </div>
            <div className="relative pl-16 text-white ">
              <div className=" font-semibold leading-7 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent  text-3xl">
                UX/UI{" "}
              </div>
              <div className="mt-2 text-base leading-7 ">
                Experții noștri în UI/UX design creează experiențe captivante și
                intuitive pentru utilizator, transformând conceptele în
                interfețe ușor de navigat, care vor impresiona și fideliza
                publicul dvs."
              </div>
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                <FaExpandArrowsAlt />
              </div>
            </div>
            <div className="relative pl-16 text-white ">
              <div className=" font-semibold leading-7 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent  text-3xl">
                MARKETING{" "}
              </div>
              <div className="mt-2 text-base leading-7 ">
                Va ajutam cu creșterea vizibilității afacerii dvs. , folosind
                strategii personalizate, creativitate și analize detaliate
                pentru a atinge obiectivele de creștere și a obține rezultate
                durabile.
              </div>
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                <FaChartLine />
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
// {features.map((feature) => (
//   <div key={feature.name} className="relative pl-16 text-white ">
//     <dt className=" font-semibold leading-7 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-3xl">
//       <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-400 via-cyan-900 to-blue-500">
//         <feature.icon
//           className="h-6 w-6 text-white"
//           aria-hidden="true"
//         />
//       </div>
//       {feature.name}
//     </dt>
//     <dd className="mt-2 text-base leading-7 ">
//       {feature.description}
//     </dd>

//   </div>
// ))}

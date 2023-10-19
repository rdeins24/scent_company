import { FaCreativeCommonsShare, FaDharmachakra, FaEdit } from "react-icons/fa";
import Image from "next/image";
import insta from "../public/assets/works/insta.png";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 ">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <p className=" text-5xl">
                Website
              </p> */}
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl  shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={insta}
            width={1100}
            height={700}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 white lg:max-w-lg">
              <h3 className="text-4xl"> Social Media: </h3>
              <p className="pt-10">
                Administrarea și actualizarea regulată a conturilor de social
                media pe diverse platforme. Optimizarea profilurilor pentru a
                atrage și reține audiența. Programarea postărilor și
                răspunsurile la comentarii și mesaje.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FaCreativeCommonsShare
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                      Managementul și Optimizarea Conturilor de Social Media:
                    </strong>{" "}
                    Administrarea și actualizarea regulată a conturilor de
                    social media pe diverse platforme. Optimizarea profilurilor
                    pentru a atrage și reține audiența. Programarea postărilor
                    și răspunsurile la comentarii și mesaje.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaCreativeCommonsShare
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                      Crearea de Conținut pentru Social Media:
                    </strong>{" "}
                    Dezvoltarea de conținut original, cum ar fi postări, imagini
                    și videoclipuri. Crearea graficelor și a conținutului vizual
                    pentru a atrage atenția publicului. Utilizarea strategiilor
                    de conținut pentru a transmite mesaje clare și a stimula
                    angajamentul.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaCreativeCommonsShare
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                      Publicitate pe Rețelele de Socializare:
                    </strong>{" "}
                    Gestionarea campaniilor de publicitate plătită pe diverse
                    platforme, cum ar fi Facebook Ads sau Instagram Ads. Crearea
                    anunțurilor și setarea targetării pentru a atinge audiența
                    corectă.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaCreativeCommonsShare
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                      Engajarea și Monitorizarea Publicului
                    </strong>{" "}
                    Monitorizarea activității și interacțiunilor publicului pe
                    rețelele de socializare. Răspunsuri la comentarii, întrebări
                    și feedback-ul clienților. Crearea unor relații pozitive cu
                    urmăritorii și fani.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaCreativeCommonsShare
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                      Analiză și Raportare:
                    </strong>{" "}
                    Colectarea și analiza datelor legate de performanța
                    campaniilor de social media. Furnizarea de rapoarte cu
                    indicatori cheie pentru a evalua eficacitatea strategiilor
                    și pentru a sugera îmbunătățiri.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

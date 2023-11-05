import React from "react";
import {
  FaCreativeCommonsShare,
  FaDharmachakra,
  FaEdit,
  FaAngleDoubleUp,
  FaGripHorizontal,
  FaSign,
} from "react-icons/fa";
import ButtonGlowHover from "../components/ButtonGlowHover";

const Jobs = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Job 1 */}
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white text-black relative z-10 title-font font-medium text-sm">
            1
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-pink-500 via-red-500 to-orange-600 text-gray-900 rounded-full inline-flex items-center justify-center">
              <FaAngleDoubleUp size={34} />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-xl">
                Descoperirea
              </h2>
              <p className="leading-relaxed text-gray-400">
                Începem prin explorarea obiectivelor, provocărilor și cerințelor
                proiectului dvs., asigurându-ne că înțelegem în profunzime
                cerințele unice ale proiectului.
              </p>
            </div>
          </div>
        </div>

        {/* Job 2 */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white text-black relative z-10 title-font font-medium text-sm">
            2
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-pink-500 via-red-500 to-orange-600 text-gray-900 rounded-full inline-flex items-center justify-center">
              <FaGripHorizontal size={34} />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-xl">
                Colaborare Creativă
              </h2>
              <p className="leading-relaxed text-gray-400">
                Echipa noastră colaborează strâns cu dvs., combinându-vă
                viziunea cu expertiza noastră pentru a crea soluții inovatoare
                și personalizate.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600  pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white text-black relative z-10 title-font font-medium text-sm">
            2
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-pink-500 via-red-500 to-orange-600 text-gray-900 rounded-full inline-flex items-center justify-center">
              <FaSign size={34} />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-xl">
                Excelență în Dezvoltare
              </h2>
              <p className="leading-relaxed text-gray-400 ">
                Punem accent pe echilibrul perfect dintre precizie și
                creativitate în dezvoltarea artei online, ducând la viață
                soluții digitale remarcabile.
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600  pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-white text-black relative z-10 title-font font-medium text-sm">
            2
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-pink-500 via-red-500 to-orange-600 text-gray-900 rounded-full inline-flex items-center justify-center">
              <FaEdit size={34} />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-white mb-1 text-xl">
                Optimizare Continuă pentru Rezultate Exceptionale
              </h2>
              <p className="leading-relaxed text-gray-400 ">
                Ne angajăm să optimizăm constant și să îmbunătățim performanța
                digitală, garantând astfel că afacerea dvs. se află mereu în
                fruntea rezultatelor în mediul online.
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className="flex items-center justify-center mb-20">
    <ButtonGlowHover />
    </div>
    </section>
  );
};

export default Jobs;

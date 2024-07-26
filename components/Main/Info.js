import Image from "next/image";
import brand from "../../public/brand.jpg";

export default function ExampleComponent() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center bg-gray-50 py-10 px-4 sm:px-8 lg:px-16 gap-4 h-full">
      <div className="w-full  sm:w-1/2 lg:w-1/2">
        <Image
          src={brand}
          alt="Sample Image"
          className="w-90 h-90 object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6 w-full sm:w-1/2 ">
        <h2 className="text-4xl text-gray-900 font-bold my-6">FASCINAȚIA UNEI FRAGANȚE</h2>
        <h3 className="text-3xl text-gray-600">pentru a-ți crea identitatea</h3>
        <p className="my-10 text-gray-400 text-lg leading-">
          Forța persuasivă a unei esențe deschide porțile către universuri
          ascunse, pline de senzații inconștiente, dorințe și amintiri
          învăluitoare. Crearea unui logo olfactiv dezvăluie identitatea
          brandului tău prin simțuri și îl transformă într-o emoție puternică,
          capabilă să depășească raționalul. Aceasta este o călătorie de
          neuitat, care cucerește și convinge fără cuvinte.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-3 ">
          {" "}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">SURPRINDE
            </h3>
            <p className="text-gray-700 my-2 text-lg">cu experiențe multi-senzoriale</p>{" "}
          </div>{" "}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">EVOCĂ
           </h3>
            <p className="text-gray-700 my-2 text-lg"> stări și acțiuni</p>{" "}
          </div>{" "}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">CONSTRUIEȘTE
            </h3>
            <p className="text-gray-700 my-2 text-lg">conexiuni profunde</p>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
  //   return (

  //     <div className="flex flex-col ">

  //     <div className="w-90 h-90 ">
  //       <Image src={brand} />
  //     </div>

  // <div>

  //     <div>

  //     <div className="flex flex-col justify-center text-center lg:text-left">
  //           <h2 className="text-2xl font-bold text-gray-900 mb-4">to design your identity</h2>
  //           <p className="text-gray-700 mb-6">
  //             The persuasive force of an essence opens the doors to hidden universes, made up of unconscious sensations, desires, and enveloping memories: designing your olfactory logo means revealing the identity of your brand through the senses and turning it into an emotion able to overcome the rational. An unforgettable journey, which wins over and convinces with no need for words.
  //           </p>
  //           <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition">
  //             EXPLORE YOUR OLFACTORY LOGO
  //           </button>
  //         </div>
  //       </div>
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
  //         <div>
  //           <h3 className="text-lg font-bold text-gray-900">SURPRISE</h3>
  //           <p className="text-gray-700">WITH MULTI-SENSORY EXPERIENCES</p>
  //         </div>
  //         <div>
  //           <h3 className="text-lg font-bold text-gray-900">EVOKE</h3>
  //           <p className="text-gray-700">MOODS AND ACTIONS</p>
  //         </div>
  //         <div>
  //           <h3 className="text-lg font-bold text-gray-900">BUILD</h3>
  //           <p className="text-gray-700">DEEP CONNECTIONS</p>
  //         </div>

  //     </div>
  //     </div>
  //     </div>
  //   );
}

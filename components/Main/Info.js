import Image from "next/image";
import brand from "../../public/brand.jpg";

export default function ExampleComponent() {
  return (
    <div className="flex flex-col  sm:flex-row items-center justify-center  py-10 px-4 sm:px-8 lg:px-16 gap-4 h-full my-11">
      <div className="w-full sm:w-1/2 lg:w-1/2">
        <Image
          src={brand}
          alt="Sample Image"
          className="w-90 h-90 object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6 w-full sm:w-1/2">
        <h2 className="text-xl sm:text-4xl font-bold my-4">
          FASCINAȚIA UNEI FRAGANȚE
        </h2>
        <h3 className="text-lg sm:text-3xl ">
          pentru a-ți crea identitatea
        </h3>
        <p className="my-6 sm:my-10  text-sm sm:text-lg leading-6">
          Forța persuasivă a unei esențe deschide porțile către universuri
          ascunse, pline de senzații inconștiente, dorințe și amintiri
          învăluitoare. Crearea unui logo olfactiv dezvăluie identitatea
          brandului tău prin simțuri și îl transformă într-o emoție puternică,
          capabilă să depășească raționalul. Aceasta este o călătorie de
          neuitat, care cucerește și convinge fără cuvinte.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <h3 className="text-lg sm:text-2xl font-semibold ">
              SURPRINDE
            </h3>
            <p className=" my-2 text-sm sm:text-lg">
              cu experiențe multi-senzoriale
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-semibold ">
              EVOCĂ
            </h3>
            <p className=" my-2 text-sm sm:text-lg">stări și acțiuni</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-semibold ">
              CONSTRUIEȘTE
            </h3>
            <p className=" my-2 text-sm sm:text-lg">conexiuni profunde</p>
          </div>
        </div>
      </div>
    </div>
  );
}

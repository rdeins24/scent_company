import Image from "next/image";
import img from "../public/bawl.webp";

const InfoBlock = ({
  bgColor = "bg-black",
  textColor = "text-white",
  buttonBgColor = "bg-black",
  buttonTextColor = "text-white",
}) => {
  return (
    <div className={`flex flex-col md:flex-row p-6 mx-auto max-w-7xl ${bgColor} pt-10`}>
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <div>
          <Image
            src={img}
            alt="InfoBlock Image"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className={`w-full md:w-1/2 mt-4 md:mt-0 md:pl-8 mx-4 ${textColor}`}>
        <h2 className="text-l font-semibold mb-4">
          CREEAZĂ EXPERIENȚE EMOȚIONALE CU AROMA SCENTIO MILANO
        </h2>
        <p className="my-10 text-2xl md:text-5xl">
          Marketingul olfactiv te poate ajuta să creezi experiențe pozitive,
          captivante și unice. Solicită o demonstrație.
        </p>
        <button
          className={`px-6 py-3 rounded-lg border-white transition-colors ${buttonBgColor} ${buttonTextColor} hover:bg-gray-800`}
        >
          Contacteaza-ne
        </button>
        <p className="mt-10">
          Experiența noastră ne permite să creăm arome personalizate care să
          răspundă nevoilor fiecărui business. Solicită un test gratuit de
          parfumare.
        </p>
      </div>
    </div>
  );
};

export default InfoBlock;

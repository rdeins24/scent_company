import Image from "next/image";
import img from "../public/bawl.webp";
import Link from "next/link";
import { motion } from "framer-motion";

const InfoBlock = ({
  bgColor = "bg-black",
  textColor = "text-white",
  buttonBgColor = "bg-black",
  buttonTextColor = "text-white",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row p-6 mx-auto max-w-7xl ${bgColor} pt-10`}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 mb-6 md:mb-0"
      >
        <div>
          <Image
            src={img}
            alt="InfoBlock Image"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className={`w-full md:w-1/2 mt-4 md:mt-0 md:pl-8 mx-4 ${textColor}`}
      >
        <h2 className="text-l font-semibold mb-4">
          CREEAZĂ EXPERIENȚE EMOȚIONALE CU AROMA SCENTIO MILANO
        </h2>
        <p className="my-10 text-2xl md:text-5xl">
          Marketingul olfactiv te poate ajuta să creezi experiențe pozitive,
          captivante și unice. Solicită o demonstrație.
        </p>
        <Link href={'/Contact'}>
          <button
            className={`px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all`}
          >
            Contacteaza-ne
          </button>
        </Link>
        <p className="mt-10">
          Experiența noastră ne permite să creăm arome personalizate care să
          răspundă nevoilor fiecărui business. Solicită un test gratuit de
          parfumare.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default InfoBlock;

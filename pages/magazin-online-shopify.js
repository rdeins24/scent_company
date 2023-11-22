import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// import img from "../public/planet.jpg";
import img from "../public/assets/trustedby/shopify.webp";
import { FaShopify } from "react-icons/fa6";

export default function ShopifyArticle() {
  return (
    <div>
      <Head>
        <title>
          Shopify: Ghid Complet pentru Crearea unui Magazin Online de Succes in Moldova
        </title>
        <meta
          name="description"
          content="Află cum să creezi un magazin online de succes cu Shopify. Ghid detaliat pentru alegerea platformei potrivite și dezvoltarea unui magazin online de succes."
        />
      </Head>
      <div className="bg-gray-400 p-6 mt-[60px]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Shopify: Ghid Complet pentru Crearea unui Magazin Online de Succes
          </h1>
          <p className="text-gray-900 mb-4">
            Află cum să creezi un magazin online de succes cu Shopify. Ghid
            detaliat pentru alegerea platformei potrivite și dezvoltarea unui
            magazin online de succes.
          </p>
          {/* <Image
            src={img} // Înlocuiește cu URL-ul imaginii tale
            alt="Shopify"
            className="w-full rounded-lg"
            width={1050}
            height={1050}
          /> */}

      

          <div className="flex justify-center">
        <FaShopify className="text-green-600 md:text-[600px] text-9xl " />
          </div>
       
          <p className="text-gray-600 my-4">
            În lumea actuală a comerțului electronic, crearea unui magazin
            online de succes este esențială pentru afaceri. Platforma Shopify
            oferă o soluție completă pentru dezvoltarea, lansarea și gestionarea
            magazinului tău online.
          </p>
          <p className="text-gray-600 my-4">
            Cu Shopify, poți profita de numeroasele avantaje pe care această
            platformă le oferă. De la simpla configurare la personalizarea
            temelor și securitatea sporită, Shopify se ridică la înălțimea
            așteptărilor. Iată câteva motive pentru care Shopify este o alegere
            excelentă pentru afacerea ta.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 my-4">
            Simplu de Utilizat și Configurat
          </h2>
          <p className="text-gray-600 my-4">
            Shopify este recunoscut pentru ușurința sa de utilizare. Nu ai
            nevoie de experiență tehnică pentru a-ți configura magazinul online.
            Interfața sa prietenoasă îți permite să adaugi produse, să urmărești
            inventarul și să procesezi plățile fără dificultate. De la
            selectarea temei până la gestionarea comenzilor, totul este intuitiv
            și simplu.
          </p>
          
          {/* Sectiune: Controlul Asupra SEO */}
          <h2 className="text-xl font-semibold text-gray-800 my-4">
            Controlul Asupra SEO
          </h2>
          <p className="text-gray-600 my-4">
            Shopify oferă instrumente puternice pentru optimizarea motoarelor de
            căutare. Poți personaliza titlurile, descrierile și URL-urile
            produselor tale pentru o vizibilitate sporită în rezultatele motoarelor
            de căutare. Adăugarea etichetelor meta și gestionarea structurii de
            linkuri devin ușoare și eficiente.
          </p>

          {/* Sectiune: Simplitatea Mentenanței */}
          <h2 className="text-xl font-semibold text-gray-800 my-4">
            Simplitatea Mentenanței pe Shopify
          </h2>
          <p className="text-gray-600 my-4">
            Mentenanța pe Shopify este simplă și eficientă. Actualizările sunt
            automate, iar suportul tehnic este disponibil pentru a rezolva orice
            problemă tehnică care ar putea apărea. Astfel, poți concentra mai mult
            pe partea ta de afacere.
          </p>

          {/* Sectiune: Asistența cu Setarea Sistemului de Plăți */}
          <h2 className="text-xl font-semibold text-gray-800 my-4">
            Asistența cu Setarea Sistemului de Plăți
          </h2>
          <p className="text-gray-600 my-4">
            Shopify facilitează setarea sistemului de plăți, permițând integrarea cu
            diverse metode de plată. Experiența de cumpărare pentru clienți devine
            simplă și fără griji, oferind multiple opțiuni de plată și securitate în
            procesul de achiziție.
          </p>

          {/* Sectiune: Implementarea Șabloanelor la Comandă */}
          <h2 className="text-xl font-semibold text-gray-800 my-4">
            Implementarea Șabloanelor la Comandă
          </h2>
          <p className="text-gray-600 my-4">
            Desi Shopify oferă șabloane, implementarea și personalizarea acestora la
            comandă este posibilă. Astfel, poți adapta aspectul și funcționalitățile
            magazinului conform cerințelor specifice ale brandului tău.
          </p>

          {/* Sectiune: Suport pentru Internationalizare și Afisarea Valutei */}
          <h2 className="text-xl font-semibold text-gray-800 my-4">
            Suport pentru Internationalizare și Afișarea Valutei
          </h2>
          <p className="text-gray-600 my-4">
            Shopify facilitează internationalizarea, permitând afișarea valutei
            corespunzătoare țării de accesare a magazinului online. Acest aspect
            îmbunătățește experiența cumpărătorilor internaționali și consolidează
            încrederea în magazin.
          </p>
          <div className="bg-gray-400 p-4 rounded-md text-center my-8">
  <p className="text-gray-800 text-2xl">
    Ai întrebări sau nevoie de asistență suplimentară?
  </p>
  <p className="text-gray-700">
    Suntem aici să te ajutăm! Contactează-ne pentru suport personalizat.
  </p>
  <Link href="/Contact" className="text-black hover:underline block mt-2 text-xl">
    Contactează-ne acum 
  </Link>
</div>
        </div>
      </div>
    </div>
  );
}

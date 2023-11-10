import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import img from '../public/planet.jpg'

export default function ShopifyArticle() {
  return (
    <div>
      <Head>
        <title>Shopify: Ghid Complet pentru Crearea unui Magazin Online de Succes</title>
        <meta
          name="description"
          content="Află cum să creezi un magazin online de succes cu Shopify. Ghid detaliat pentru alegerea platformei potrivite și dezvoltarea unui magazin online de succes."
        />
      </Head>
      <div className="bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Shopify: Ghid Complet pentru Crearea unui Magazin Online de Succes
          </h1>
          <p className="text-gray-600 mb-4">
            Află cum să creezi un magazin online de succes cu Shopify. Ghid detaliat pentru alegerea
            platformei potrivite și dezvoltarea unui magazin online de succes.
          </p>
          <Image
            src={img} // Înlocuiește cu URL-ul imaginii tale
            alt="Shopify"
            className="w-full rounded-lg"
            width={1050}
            height={1050}
          />
          <p className="text-gray-600 my-4">
            În lumea actuală a comerțului electronic, crearea unui magazin online de succes este esențială
            pentru afaceri. Platforma Shopify oferă o soluție completă pentru dezvoltarea, lansarea și
            gestionarea magazinului tău online.
          </p>
          <p className="text-gray-600 my-4">
            Cu Shopify, poți profita de numeroasele avantaje pe care această platformă le oferă. De la
            simpla configurare la personalizarea temelor și securitatea sporită, Shopify se ridică la înălțimea
            așteptărilor. Iată câteva motive pentru care Shopify este o alegere excelentă pentru afacerea ta.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 my-4">Simplu de Utilizat și Configurat</h2>
          <p className="text-gray-600 my-4">
            Shopify este recunoscut pentru ușurința sa de utilizare. Nu ai nevoie de experiență tehnică
            pentru a-ți configura magazinul online. Interfața sa prietenoasă îți permite să adaugi produse,
            să urmărești inventarul și să procesezi plățile fără dificultate. De la selectarea temei până la
            gestionarea comenzilor, totul este intuitiv și simplu.
          </p>
          {/* Adaugă aici mai multe secțiuni despre avantajele Shopify */}
          <Link href="/blog" legacyBehavior>
            <a className="text-blue-600 hover:underline">Înapoi la Toate Articolele</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

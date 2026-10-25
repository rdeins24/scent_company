import commercialImg from "../../public/assets/img/commercial.jpg";
import hotelImg from "../../public/assets/Hotels/hotel.jpg";
import restaurantImg from "../../public/assets/restaurante/restaurant4.jpg";

// Articolele de blog. `legacyId` = vechiul URL /blog/<id>, redirecționat 301 în next.config.js.
const posts = [
  {
    slug: "ghid-marketing-olfactiv-pentru-afaceri",
    legacyId: "1",
    title: "Marketing olfactiv pentru afaceri: ghid complet pentru o experiență memorabilă",
    seoTitle: "Marketing Olfactiv pentru Afaceri: Ghid | Scentio Milano",
    description:
      "Cum alegi parfumul potrivit pentru spațiul tău comercial, unde amplasezi difuzoarele și ce înseamnă o semnătură olfactivă de brand.",
    datePublished: "2022-03-16",
    dateModified: "2026-10-19",
    author: "Dorina R.",
    category: "Marketing olfactiv",
    image: commercialImg,
    imageAlt: "Clădire comercială modernă din sticlă, iluminată la apus",
    ogImage: "/og/og-blog-ghid.jpg",
    intro:
      "Mirosul este simțul cel mai strâns legat de emoție și memorie. Un parfum bine ales poate face ca un spațiu să fie recunoscut, plăcut și ținut minte — iar marketingul olfactiv transformă acest instinct într-un instrument de brand.",
    sections: [
      {
        heading: "Ce este marketingul olfactiv",
        paragraphs: [
          "Marketingul olfactiv înseamnă folosirea intenționată a unui parfum într-un spațiu comercial pentru a construi o atmosferă și o identitate. Nu este un odorizant: este o compoziție aleasă pentru brandul tău și difuzată constant, cu intensitate controlată, prin echipamente profesionale.",
        ],
      },
      {
        heading: "Ce câștigă afacerea ta",
        items: [
          "O atmosferă primitoare, care îi face pe clienți să se simtă bine din primul moment.",
          "O identitate recognoscibilă — aroma devine parte din brand, ca logo-ul sau designul.",
          "Vizite mai plăcute, în care clienții explorează fără grabă.",
          "Coerență între locații, dacă ai mai multe spații.",
        ],
      },
      {
        heading: "Cum implementezi corect",
        items: [
          "Alege aroma în funcție de brand, public și arhitectura spațiului — nu doar după gust personal.",
          "Folosește difuzoare profesionale, care distribuie parfumul uniform și permit reglarea intensității.",
          "Testează în spațiul real înainte de decizie și ajustează după reacțiile clienților și ale echipei.",
          "Asigură întreținerea: reumplerea la timp și verificarea echipamentelor păstrează experiența constantă.",
        ],
      },
      {
        heading: "Concluzie",
        paragraphs: [
          "Un parfum ales cu intenție lucrează pentru brandul tău în fiecare zi, discret și constant. Cel mai simplu mod de a începe este un test de parfumare în propriul spațiu.",
        ],
      },
    ],
    related: [
      { href: "/aromatizare-retail", label: "Aromatizare pentru magazine și retail" },
      { href: "/servicii", label: "Serviciile Scentio Milano" },
    ],
  },
  {
    slug: "marketing-olfactiv-in-hoteluri",
    legacyId: "2",
    title: "De ce marketingul olfactiv a devenit un standard în hotelurile de top",
    seoTitle: "Marketing Olfactiv în Hoteluri | Scentio Milano",
    description:
      "Cum creează un parfum semnătură prima impresie în hotel, ce zone se aromatizează și cum alegi aroma potrivită pentru oaspeții tăi.",
    datePublished: "2020-04-26",
    dateModified: "2026-10-19",
    author: "Dorina R.",
    category: "Hoteluri",
    image: hotelImg,
    imageAlt: "Fațada unui hotel elegant, cu ferestre luminate la apus",
    ogImage: "/og/og-blog-hoteluri.jpg",
    intro:
      "În ospitalitate, experiența oaspetelui începe înainte de check-in. Un parfum semnătură în lobby transmite instantaneu nivelul serviciului și transformă un sejur obișnuit într-o amintire.",
    sections: [
      {
        heading: "Beneficiile pentru un hotel",
        items: [
          "O primă impresie caldă și elegantă, chiar din momentul intrării.",
          "O percepție mai bună a curățeniei și a confortului.",
          "O amintire olfactivă care îi face pe oaspeți să recunoască hotelul — și să revină.",
        ],
      },
      {
        heading: "Cum se implementează",
        items: [
          "Alege note calme și rafinate, potrivite conceptului hotelului.",
          "Aromatizează zonele-cheie: lobby, holuri, spa, sălile de conferință; camerele doar la cerere, cu intensitate redusă.",
          "Păstrează aceeași semnătură constantă în timp — ea devine parte din identitatea hotelului.",
        ],
      },
      {
        heading: "Concluzie",
        paragraphs: [
          "Un parfum bine ales și difuzat profesional este unul dintre cele mai elegante moduri de a face un hotel memorabil. Începe cu o consultație și un test în spațiul tău.",
        ],
      },
    ],
    related: [{ href: "/aromatizare-hoteluri", label: "Aromatizare pentru hoteluri" }],
  },
  {
    slug: "marketing-olfactiv-in-restaurante",
    legacyId: "3",
    title: "Marketing olfactiv în restaurante: atmosfera pe care oaspeții o țin minte",
    seoTitle: "Marketing Olfactiv în Restaurante | Scentio Milano",
    description:
      "Cum folosești parfumul într-un restaurant fără să concureze cu bucătăria: zonele potrivite, aromele recomandate și greșelile de evitat.",
    datePublished: "2023-10-16",
    dateModified: "2026-10-19",
    author: "Dorina R.",
    category: "Restaurante",
    image: restaurantImg,
    imageAlt: "Sală de restaurant cu mese așezate și pahare de cristal",
    ogImage: "/og/og-blog-restaurante.jpg",
    intro:
      "Într-un restaurant, experiența se construiește din detalii: lumină, muzică, servire — și aer. Folosit corect, parfumul completează bucătăria în loc să concureze cu ea.",
    sections: [
      {
        heading: "Ce aduce parfumul într-un restaurant",
        items: [
          "O ambianță primitoare încă de la intrare.",
          "Grupuri sanitare impecabile — un detaliu pe care oaspeții îl remarcă.",
          "O atmosferă coerentă cu conceptul și designul localului.",
        ],
      },
      {
        heading: "Cum îl folosești corect",
        items: [
          "Aromatizează zonele de tranzit și relaxare: intrarea, lounge-ul, barul, grupurile sanitare.",
          "În sala de servire, folosește intensități foarte reduse și note discrete.",
          "Alege aroma după concept: note calde și lemnoase pentru un restaurant elegant, citrice fine pentru o cafenea luminoasă.",
          "Cere feedback oaspeților și echipei și ajustează intensitatea.",
        ],
      },
      {
        heading: "Concluzie",
        paragraphs: [
          "Parfumul potrivit nu se observă ca atare — se simte ca o atmosferă. Iar atmosfera este ceea ce aduce oaspeții înapoi.",
        ],
      },
    ],
    related: [{ href: "/aromatizare-restaurante", label: "Aromatizare pentru restaurante" }],
  },
];

export default posts;

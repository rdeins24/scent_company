import hotelImg from "../../public/assets/Hotels/hotel2.jpg";
import clinicImg from "../../public/assets/Hotels/hotel4.jpg";
import fitnessImg from "../../public/assets/gym/fitness.jpg";
import autoImg from "../../public/assets/cars/car1.jpg";
import retailImg from "../../public/assets/retail/store1.jpg";
import restaurantImg from "../../public/assets/restaurante/restaurant2.jpg";

// Paginile dedicate pe segmente. Pentru versiunea în rusă se creează content/ru/segments.js
// cu aceleași `slug`-uri și se adaugă "ru" în i18n.locales din next.config.js.
const maintenance = {
  title: "Întreținere inclusă",
  text: "Ne ocupăm de reumplere, verificarea echipamentelor și ajustarea intensității. Tu te bucuri de rezultat, fără griji tehnice.",
};

const segments = [
  {
    slug: "aromatizare-hoteluri",
    navLabel: "Hoteluri",
    serviceType: "Aromatizare hoteluri",
    audience: "Hoteluri și pensiuni",
    seo: {
      title: "Difuzoare de Parfum pentru Hoteluri | Scentio Milano",
      description:
        "Aromatizare profesională pentru hoteluri în Moldova: parfum semnătură în lobby, holuri și spa, difuzoare discrete și întreținere inclusă.",
    },
    image: hotelImg,
    ogImage: "/og/og-hoteluri.jpg",
    imageAlt: "Lobby de hotel elegant cu podea de marmură și lumină caldă",
    hero: {
      eyebrow: "Hoteluri",
      title: "Aromatizare pentru hoteluri: parfumul care devine semnătura casei",
      lead: "Primul lucru pe care oaspeții îl simt nu este designul, ci aerul. Creăm pentru hotelul tău o semnătură olfactivă coerentă, de la lobby până la spa, difuzată uniform și discret prin echipamente profesionale Scent Company Milano.",
    },
    benefits: {
      title: "De ce aleg hotelurile marketingul olfactiv",
      items: [
        {
          title: "O primă impresie memorabilă",
          text: "Un parfum elegant la recepție transmite din prima secundă standardul experienței pe care o oferi.",
        },
        {
          title: "Identitate olfactivă recognoscibilă",
          text: "Oaspeții asociază aroma cu sejurul lor și o recunosc la fiecare revenire — o amintire care nu se uită.",
        },
        {
          title: "Confort în fiecare zonă",
          text: "Intensitatea se reglează separat pentru lobby, holuri, spa sau sălile de conferință, pentru o atmosferă echilibrată.",
        },
        maintenance,
      ],
    },
    spaces: {
      title: "Unde aromatizăm",
      items: ["Lobby și recepție", "Holuri și lifturi", "Spa și zone wellness", "Restaurant și lounge", "Săli de conferință"],
    },
    faq: [
      {
        q: "Parfumul se simte și în camere?",
        a: "Recomandăm aromatizarea zonelor comune, unde se formează prima impresie. Camerele pot fi incluse la cerere, cu o intensitate redusă și discretă.",
      },
      {
        q: "Echipamentele sunt vizibile?",
        a: "Alegem împreună soluția potrivită spațiului: difuzoare cu design minimalist, integrate în decor, sau amplasate discret, astfel încât să se simtă doar rezultatul.",
      },
      {
        q: "Cum alegem parfumul potrivit?",
        a: "Începem cu o consultație gratuită și un test de parfumare în hotelul tău. Alegem aroma după conceptul, publicul și arhitectura spațiului.",
      },
    ],
  },
  {
    slug: "aromatizare-clinici",
    navLabel: "Clinici",
    serviceType: "Aromatizare clinici dentare și medicale",
    audience: "Clinici dentare și medicale",
    seo: {
      title: "Aromatizare Clinici Dentare și Medicale | Scentio Milano",
      description:
        "Arome curate și liniștitoare pentru clinici dentare și medicale din Chișinău. Atmosferă calmă în sala de așteptare, cu întreținere inclusă.",
    },
    image: clinicImg,
    ogImage: "/og/og-clinici.jpg",
    imageAlt: "Recepție albă, luminoasă și minimalistă a unei clinici",
    hero: {
      eyebrow: "Clinici",
      title: "Aromatizare pentru clinici dentare și medicale",
      lead: "Mirosul specific de cabinet poate amplifica emoțiile pacienților înainte de tratament. O aromă curată și delicată transformă sala de așteptare într-un spațiu în care oamenii se simt îngrijiți încă de la intrare.",
    },
    benefits: {
      title: "Ce aduce aromatizarea într-o clinică",
      items: [
        {
          title: "O atmosferă care inspiră calm",
          text: "Note fine și curate creează o senzație de liniște în recepție și în sala de așteptare.",
        },
        {
          title: "Mirosuri clinice estompate",
          text: "Parfumul acoperă discret mirosurile specifice tratamentelor, fără să devină el însuși intens.",
        },
        {
          title: "Imaginea unei clinici premium",
          text: "Grija pentru detaliu se simte. Pacienții percep o clinică aromatizată ca fiind mai primitoare și mai atentă.",
        },
        maintenance,
      ],
    },
    spaces: {
      title: "Unde aromatizăm",
      items: ["Recepție", "Sala de așteptare", "Coridoare", "Cabinete, la cerere", "Grupuri sanitare"],
    },
    faq: [
      {
        q: "Aroma poate deranja pacienții sensibili?",
        a: "Alegem compoziții delicate și setăm intensitatea astfel încât parfumul să fie perceput ca o senzație de prospețime, nu ca un miros puternic. Intensitatea se poate ajusta oricând.",
      },
      {
        q: "Ce arome recomandați pentru clinici?",
        a: "Note curate și liniștitoare — ceai alb, bumbac, citrice fine. Alegerea finală o facem împreună, după un test de parfumare în clinica ta.",
      },
      {
        q: "Cine se ocupă de reumplere?",
        a: "Echipa noastră. Reumplerea, verificarea echipamentelor și ajustările sunt incluse în serviciu.",
      },
    ],
  },
  {
    slug: "aromatizare-fitness",
    navLabel: "Fitness",
    serviceType: "Aromatizare săli de fitness",
    audience: "Săli de fitness, studiouri și centre wellness",
    seo: {
      title: "Aromatizare Săli de Fitness și Studiouri | Scentio Milano",
      description:
        "Prospețime constantă pentru săli de fitness, studiouri și vestiare din Moldova. Difuzoare profesionale de parfum și întreținere inclusă.",
    },
    image: fitnessImg,
    ogImage: "/og/og-fitness.jpg",
    imageAlt: "Gantere și accesorii de fitness roșii, aranjate geometric",
    hero: {
      eyebrow: "Fitness",
      title: "Aromatizare pentru săli de fitness și studiouri",
      lead: "Energia unei săli de antrenament se simte și prin aer. Un parfum proaspăt și constant schimbă percepția întregului spațiu — de la recepție până la vestiare.",
    },
    benefits: {
      title: "De ce contează aerul într-o sală de fitness",
      items: [
        {
          title: "Prospețime pe tot parcursul zilei",
          text: "Aromatizarea profesională completează ventilația și curățenia, păstrând o senzație de aer curat chiar și la orele de vârf.",
        },
        {
          title: "O experiență premium pentru membri",
          text: "Detaliile senzoriale diferențiază un club de restul pieței și dau membrilor un motiv în plus să revină.",
        },
        {
          title: "Arome diferite pentru zone diferite",
          text: "Note energizante în sala de antrenament, note relaxante în vestiare și zona de spa.",
        },
        maintenance,
      ],
    },
    spaces: {
      title: "Unde aromatizăm",
      items: ["Recepție", "Sala de antrenament", "Studiouri de grup", "Vestiare și dușuri", "Spa și saună"],
    },
    faq: [
      {
        q: "Parfumul acoperă mirosurile din vestiare?",
        a: "Aromatizarea profesională lucrează împreună cu ventilația și curățenia, oferind o senzație de prospețime constantă, fără arome grele.",
      },
      {
        q: "Ce arome se potrivesc unei săli de fitness?",
        a: "Note proaspete și energizante — citrice, mentă, verbena — și accente mai calde pentru zonele de relaxare. Alegem împreună după test.",
      },
      {
        q: "Cât de des se face întreținerea?",
        a: "Stabilim un program regulat în funcție de suprafață și intensitate. Reumplerea și verificarea echipamentelor sunt incluse.",
      },
    ],
  },
  {
    slug: "aromatizare-showroom-auto",
    navLabel: "Showroom-uri auto",
    serviceType: "Aromatizare showroom-uri auto",
    audience: "Dealeri și showroom-uri auto",
    seo: {
      title: "Aromatizare Showroom-uri Auto | Scentio Milano",
      description:
        "Parfum semnătură pentru showroom-uri auto din Moldova: atmosferă de exclusivitate, echipamente pentru spații mari și întreținere inclusă.",
    },
    image: autoImg,
    ogImage: "/og/og-showroom-auto.jpg",
    imageAlt: "Showroom auto modern cu automobile expuse și pereți de sticlă",
    hero: {
      eyebrow: "Showroom-uri auto",
      title: "Aromatizare pentru showroom-uri auto",
      lead: "Un automobil premium se alege cu toate simțurile. Parfumul semnătură al showroom-ului prelungește senzația de exclusivitate din momentul în care clientul trece pragul până la semnarea contractului.",
    },
    benefits: {
      title: "Experiența de brand, completă",
      items: [
        {
          title: "Atmosferă de exclusivitate",
          text: "O aromă rafinată completează designul, lumina și materialele, pentru o experiență coerentă cu nivelul mărcii.",
        },
        {
          title: "Clienți care se simt bine",
          text: "Un spațiu plăcut încurajează discuțiile fără grabă, consultanța și test-drive-ul.",
        },
        {
          title: "Uniform în spații mari",
          text: "Dimensionăm echipamentele în funcție de volumul showroom-ului, pentru o aromă constantă, chiar și la înălțimi mari.",
        },
        maintenance,
      ],
    },
    spaces: {
      title: "Unde aromatizăm",
      items: ["Zona de expunere", "Lounge pentru clienți", "Zona de predare a mașinii", "Birouri de vânzări", "Recepția service-ului"],
    },
    faq: [
      {
        q: "Funcționează în showroom-uri foarte mari?",
        a: "Da. Evaluăm volumul și circulația aerului și alegem echipamentele potrivite, astfel încât parfumul să fie uniform în tot spațiul.",
      },
      {
        q: "Putem avea un parfum care să reprezinte marca?",
        a: "Da. Alegem împreună o semnătură olfactivă care reflectă personalitatea mărcii și o păstrăm constantă în toate zonele.",
      },
      {
        q: "Cum începem?",
        a: "Cu o consultație gratuită în showroom-ul tău și un test de parfumare, apoi îți propunem soluția completă.",
      },
    ],
  },
  {
    slug: "aromatizare-retail",
    navLabel: "Retail",
    serviceType: "Aromatizare spații comerciale și retail",
    audience: "Magazine, boutique-uri și rețele retail",
    seo: {
      title: "Aromatizare Magazine și Spații Retail | Scentio Milano",
      description:
        "Aromatizare spații comerciale în Chișinău: parfum semnătură pentru magazine, boutique-uri și rețele retail, cu întreținere inclusă.",
    },
    image: retailImg,
    ogImage: "/og/og-retail.jpg",
    imageAlt: "Magazin de modă luminos, cu rafturi albe și podea lucioasă",
    hero: {
      eyebrow: "Retail",
      title: "Aromatizare pentru magazine și spații retail",
      lead: "În retail, atmosfera vinde înainte ca produsul să fie atins. O semnătură olfactivă bine aleasă face magazinul tău recognoscibil și transformă vizita într-o experiență la care clienții revin.",
    },
    benefits: {
      title: "Parfumul ca parte a identității de brand",
      items: [
        {
          title: "Un brand recognoscibil",
          text: "Aroma devine parte din identitatea ta, la fel de recognoscibilă ca logo-ul sau vitrina.",
        },
        {
          title: "Vizite mai plăcute",
          text: "Un spațiu cu o atmosferă rafinată îi invită pe clienți să exploreze fără grabă.",
        },
        {
          title: "Aceeași experiență în toate locațiile",
          text: "Pentru rețele de magazine, păstrăm aceeași semnătură olfactivă, cu intensitatea adaptată fiecărui spațiu.",
        },
        maintenance,
      ],
    },
    spaces: {
      title: "Unde aromatizăm",
      items: ["Intrare și vitrine", "Zona de vânzare", "Cabine de probă", "Zona de casă", "Rețele de magazine"],
    },
    faq: [
      {
        q: "Parfumul rămâne pe produse?",
        a: "Difuzoarele profesionale dispersează parfumul fin în aer, iar intensitatea se reglează pentru fiecare zonă, astfel încât aroma să fie plăcută, nu intensă.",
      },
      {
        q: "Putem folosi același parfum în toate magazinele?",
        a: "Da, iar aceasta este una dintre cele mai puternice modalități de a construi o identitate de brand coerentă.",
      },
      {
        q: "Cum începem?",
        a: "Cu o consultație gratuită și un test de parfumare în magazinul tău. Îți propunem aroma și echipamentele potrivite.",
      },
    ],
  },
  {
    slug: "aromatizare-restaurante",
    navLabel: "Restaurante",
    serviceType: "Aromatizare restaurante și cafenele",
    audience: "Restaurante, cafenele și lounge-uri",
    seo: {
      title: "Aromatizare Restaurante și Cafenele | Scentio Milano",
      description:
        "Aromatizare discretă pentru restaurante, cafenele și lounge-uri din Moldova: intrare, lounge și grupuri sanitare, cu întreținere inclusă.",
    },
    image: restaurantImg,
    ogImage: "/og/og-restaurante.jpg",
    imageAlt: "Restaurant elegant cu mese de lemn, scaune albastre și plante verzi",
    hero: {
      eyebrow: "Restaurante",
      title: "Aromatizare pentru restaurante, cafenele și lounge-uri",
      lead: "Într-un restaurant, parfumul trebuie să însoțească experiența, nu să concureze cu ea. Aromatizăm intrarea, lounge-ul și grupurile sanitare cu note care completează bucătăria și designul tău.",
    },
    benefits: {
      title: "O atmosferă pe măsura bucătăriei tale",
      items: [
        {
          title: "Prima impresie, la intrare",
          text: "Oaspeții simt grija pentru detalii din primul pas, înainte de meniu și de primul fel.",
        },
        {
          title: "În echilibru cu aromele bucătăriei",
          text: "Alegem note discrete și intensități reduse, astfel încât parfumul să nu concureze niciodată cu preparatele.",
        },
        {
          title: "Grupuri sanitare impecabile",
          text: "Un detaliu adesea neglijat, dar pe care oaspeții îl remarcă și îl țin minte.",
        },
        maintenance,
      ],
    },
    spaces: {
      title: "Unde aromatizăm",
      items: ["Intrare și recepție", "Lounge și bar", "Grupuri sanitare", "Terase închise", "Săli de evenimente"],
    },
    faq: [
      {
        q: "Parfumul nu interferează cu mâncarea?",
        a: "Recomandăm aromatizarea zonelor de tranzit și de relaxare, iar în sala de servire folosim intensități foarte reduse și note discrete.",
      },
      {
        q: "Ce arome recomandați?",
        a: "În funcție de concept: note calde și lemnoase pentru un restaurant elegant, citrice fine pentru o cafenea luminoasă.",
      },
      {
        q: "Cum începem?",
        a: "Cu o consultație gratuită și un test de parfumare în localul tău.",
      },
    ],
  },
];

export default segments;

import React from "react";
import styles from "./ServicesCards.module.css";

const GradientCircle = () => (
  <svg
    className={styles.yourSvgClass}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FF0080", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#FF0000", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FFA500", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      className={styles.stroke}
      cx="60"
      cy="60"
      r="20"
      stroke="url(#grad1)"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

const Card = ({ title, description }) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.bar}>
      <div className={styles.emptybar}></div>
      <div className={styles.filledbar}></div>
    </div>
    <div className={styles.circle}>
      <p className="flex ml-[-85px] mx-auto justify-center align-center ">
        {description}
      </p>
      <GradientCircle />
      <div className=""></div>
    </div>
  </div>
);

const ServiceCategory = ({ category, items }) => (
  <div className=" md:max-w-[1280px] m-auto py-[50px] pb-[50px]">
    <div className="  ">
      <h3 className="md:text-5xl md:py-[50px] p-10 text-3xl font-bold m-auto">
        {category}
      </h3>
    </div>
    <div className="flex">
      <div className={styles.container}>
        {items.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  </div>
);

const YourComponent = () => {
  const categories = [
    {
      category: "Marketinng",
      items: [
        {
          title: "Analiza",
          description:
            "Abordăm analiza detaliată ca pe o fundație esențială pentru fiecare proiect. Folosim date și informații profunde pentru a modela strategii personalizate, consolidând identitatea brandului în mediul online ",
        },

        {
          title: "Strategia",
          description:
            "Inovăm prin strategii bine elaborate, menite să sprijine creșterea și dezvoltarea afacerii tale. Ne focalizăm pe implementarea abordărilor creative și funcționale, generând o prezență puternică și durabilă pe piață ",
        },
        {
          title: "Performanta",
          description:
            "Optimizăm performanța prin analize detaliate și ajustări continue. Prioritizăm transparența și eficiența, concentrându-ne pe obținerea rezultatelor tangibile și pe creșterea constantă în mediul digital ",
        },
      ],
    },
    {
      category: "Social Media",
      items: [
        {
          title: "Instagram",
          description:
            " Ne concentrăm pe crearea de conținut captivant și vizual care promovează interacțiunea și angajamentul. Folosim creativitatea și expertiza noastră pentru a modela identitățile brandurilor, oferind conținut unic și atractiv, adaptat pentru o experiență vizuală și interactivă.",
        },
        {
          title: "Facebook",
          description:
            "Abordăm conținutul cu accent pe interacțiune și angajament. Ne focusăm pe construirea unei comunități interactive, folosind creativitatea și expertiza noastră pentru a modela identitățile brandurilor, oferind conținut adaptat și relevant pentru o experiență autentică și participativă",
        },
        {
          title: "TikTok",
          description:
            "Ne adaptăm la ritmul dinamic al platformei, creând conținut inovator și captivant. Folosim creativitatea și tehnologiile noastre pentru a oferi o experiență de divertisment captivantă și autentică, modelând identitatea brandurilor pentru a se potrivi mediului interactiv și dinamic al TikTok-ului.",
        },
      ],
    },

    {
      category: "Development",
      items: [
        {
          title: "Front End",
          description:
            "Ne excelăm în dezvoltarea interfețelor de utilizator de excepție, folosind tehnologii precum React, Next.js, Angular și Vue.js. Iubim să construim experiențe vizuale captivante și funcționale pentru a modela și consolida identitatea brandurilor.",
        },
        {
          title: "Backend",
          description:
            "Expertiza noastră în dezvoltarea partea de backend include tehnologii avansate precum Node.js și altele. Iubim să construim și să implementăm soluții robuste și eficiente pentru a susține funcționalitățile complexe ale platformelor online.",
        },
        {
          title: "Fullstack",
          description:
            "Creăm aplicații complete, integrând cu succes tehnologii frontend și backend precum React, Next.js, Angular, Node.js și Vue.js. Construim soluții complete și complexe, oferind o experiență de utilizare integrată și fluentă.",
        },
      ],
    },

    {
      category: "Creative  ",
      items: [
        {
          title: "UI/UX",
          description:
            "Experiența utilizatorului și design-ul interfeței sunt elementele cheie pe care le dezvoltăm pentru brandul tău. Ne focusăm pe construirea conexiunilor autentice și oferirea unei experiențe memorabile și plăcute pentru utilizatori.",
        },
        {
          title: "Branding",
          description:
            "Definim și construim identități vizuale distincte, conturând și evidențiind esența fiecărui brand pe care îl gestionăm. Ne concentrăm pe crearea unei prezențe autentice și puternice pe piață.",
        },
        {
          title: "Video/Foto",
          description:
            "Expertiza noastră în producția de conținut vizual aduce valoare și autenticitate brandului tău. Transformăm povestea și mesajul brandului în imagini și videoclipuri captivante și memorabile pentru publicul tău",
        },
      ],
    },
  ];

  return (
    <>
      {categories.map((category, index) => (
        <ServiceCategory
          key={index}
          category={category.category}
          items={category.items}
        />
      ))}
    </>
  );
};

export default YourComponent;

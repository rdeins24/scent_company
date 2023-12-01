import React from "react";
import styles from "../styles/CardMobile.module.css"; // Import your CSS file

const CircleCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h3 className={`${styles.title} bg-gradient-to-t from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent`}>{title}</h3>
      <div className={styles.bar}>
        <div className={styles.emptybar}></div>
        <div className={styles.filledbar}></div>
      </div>
      <div className={styles.circle}>
        <p className={`flex px-10 mx-auto justify-center align-center leading-5  ${styles.cardText}`}>
          {description}
        </p>
        <svg
          className={styles.yourSvgClass}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
        >
          {/* <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#FF0080", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#FF0000", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FFA500", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs> */}
          <circle
            className={styles.stroke}
            cx="60"
            cy="60"
            r="30"
            stroke="url(#grad1)"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

const YourComponent = () => {
  const cardsData = [
    {
      title: "Web Development",
      description:
        "Echipa noastră full-stack creează produse de top folosind diverse tehnologii, de la aplicații mobile la site-uri web. Acoperim frontend, backend și oferim consultanță în arhitectură și securitate cibernetică.",
    },
    {
      title: "Social Media",
      description:
        "Cream conținut captivant și strategic, amplificând prezența online a afacerii dvs. De la strategii de marketing la gestionarea platformelor, vă conectăm cu publicul și promovăm brandul în mediul digital.",
    },
    {
      title: "UI/UX",
      description:
        "Construim experiențe digitale remarcabile, integrând design-ul intuitiv și funcționalitatea optimă, pentru a atrage și fideliza utilizatorii pe website-ul dvs., generând astfel conversii semnificative și creșterea afacerii.",
    },
    {
      title: "Marketing",
      description:
        "Noi excelăm în strategii de marketing inovatoare, amplificând vizibilitatea și angajamentul clienților. De la analize de piață la campanii creative, suntem partenerul ideal pentru succesul afacerii tale.",
    },
    // Add other card data here...
  ];

  return (
    <div className={styles.container}>
      {cardsData.map((card, index) => (
        <CircleCard key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default YourComponent;

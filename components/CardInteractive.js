import React from "react";
import styles from "../styles/CardInteractive.module.css"; // Import your CSS file

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
      r="30"
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
      <p className="flex ml-[-35px] mx-auto justify-center align-center leading-5 text-gray-300 font-semibold">
        {description}
      </p>
      <GradientCircle />
    </div>
  </div>
);

const YourComponent = () => {
  return (
    <div className={styles.container}>
      <Card
        title="Web Development"
        description="Echipa noastră full-stack creează produse de top folosind diverse tehnologii , de la aplicații mobile la site-uri web. Acoperim  frontend, backend și oferim consultanță în arhitectură și securitate cibernetică"
      />
      <Card
        title="Social Media"
        description="Cream conținut captivant și strategic, amplificând prezența online a afacerii dvs. De la strategii de marketing la gestionarea platformelor, vă conectăm cu publicul și promovăm brandul în mediul digita"
      />
      <Card
        title="UI/UX"
        description="Construim experiențe digitale remarcabile, integrând design-ul intuitiv și funcționalitatea optimă, pentru a atrage și fideliza utilizatorii pe website-ul dvs., generând astfel conversii semnificative și creșterea afacerii."
      />
      <Card
        title="Marketing"
        description="Noi excelăm în strategii de marketing inovatoare, amplificând vizibilitatea și angajamentul clienților. De la analize de piață la campanii creative, suntem partenerul ideal pentru succesul afacerii tale"
      />
    </div>
  );
};

export default YourComponent;

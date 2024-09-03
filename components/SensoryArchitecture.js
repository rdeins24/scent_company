import React from 'react';

const SensoryArchitecture = () => {
  const steps = [
    {
      id: 1,
      title: "Evaluarea Locației",
      description: "Echipa noastră de arhitecți senzoriali efectuează o analiză completă a spațiului unde va fi implementat marketingul olfactiv. Aceasta include evaluarea fluxului de trafic și a modului de utilizare pentru a maximiza impactul mirosului."
    },
    {
      id: 2,
      title: "Înțelegerea Obiectivelor",
      description: "Lucrăm strâns cu clienții noștri pentru a identifica și înțelege obiectivele lor legate de marketingul olfactiv. Acest lucru ne permite să aliniem strategia noastră cu nevoile specifice."
    },
    {
      id: 3,
      title: "Identificarea Zonelor Cheie",
      description: "Folosind cunoștințele noastre specializate, identificăm zonele cheie din spațiu unde instalarea difuzoarelor de arome va avea cel mai mare impact."
    },
    {
      id: 4,
      title: "Planificare și Implementare",
      description: "Dezvoltăm un plan detaliat pentru instalarea sistemelor de difuzare a aromelor, asigurând o implementare fără probleme."
    },
    {
      id: 5,
      title: "Întreținere Opțională",
      description: "Oferim un program de întreținere periodică opțional pentru a asigura o aromă consistentă și de înaltă calitate în spațiu."
    },
    {
      id: 6,
      title: "Îmbunătățiri Continue și Ajustări",
      description: "Echipa noastră este pregătită să facă ajustări în funcție de rezultate și feedback pentru a îmbunătăți strategia în timp."
    },
  ];

  return (
    <div className="bg-black text-gray-200 py-16 ">
      <h2 className="text-center text-xl font-bold mb-12 text-[#d0d0d0]">ARHITECTURĂ OLFACIVĂ</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#333333] inline-flex items-center justify-center text-[#b3b3b3] xt-white relative z-10">
              {step.id}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#d0d0d0]">{step.title}</h3>
              <p className="text-[#707070]  ">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensoryArchitecture;

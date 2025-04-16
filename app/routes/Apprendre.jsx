import React from 'react';
import Hero from '../components/Hero.jsx';
import UniversityTable from '../components/UniversityTable';
import '../styles/Apprendre.css';
// Image hero (dans public)
const heroImage = "/assets/img/italie_rome.jpg";

const Apprendre = () => {
  const title = "Apprendre l'italien";
  const description = "Bienvenue sur notre page apprendre. Découvrez les façons d'apprendre la langue italienne en formation Post-BAC.";
  const buttonText = "Commencer";

  const universitiesDataParis = [
    {
      name: "Université Paris 3 Sorbonne Nouvelle",
      logo:"/assets/img/logo_UNI_SorbonneNouvelle.png",
      website: "https://www.exemple1.com",
      courses: (
        <ul>
          <li>Licence LLCER d'italien</li>
          <li>Licence Sciences du Langage - mineure Langues et civilisations européennes (italien)</li>
          <li>Licence d'anglais - mineure italien</li>
          <li>Master Études Italiennes (recherche)</li>
          <li>Master MEEF parcours italien</li>
          <li>Master pro Échanges culturels France-Italie</li>
          <li>Diplômes d'université : DLCI et DLCR</li>
        </ul>
      )
    },
    {
      name: "Université Paris IV-Sorbonne",
      logo: "/assets/img/logo_UNI_ParisSorbonne.png",
      website: "https://www.exemple2.com",
      courses: (
        <ul>
          <li>Deux parcours de spécialité : Littérature et culture / Langue et Traduction</li>
          <li>Bi-licences : Italien-Histoire, Lettres modernes, Musicologie…</li>
          <li>Master recherche Études italiennes</li>
          <li>Master international en co-diplomation avec La Sapienza (Rome)</li>
        </ul>
      )
    }
  ];

  const universitiesDataCreteil = [
    {
      name: "I.U.T. de Saint Denis - Campus de La Plaine",
      logo: "/assets/img/logo_IUT_StDenis.png",
      website: "https://www.iutsd.univ-paris13.fr",
      courses: (
        <ul>
          <li>Cursus Techniques de commercialisation</li>
        </ul>
      )
    },
    {
      name: "Paris Est Créteil Val de Marne (Paris XII)",
      logo: "/assets/img/logo_IUT_StDenis.png",
      website: "http://www.u-pec.fr/",
      courses: (
        <ul>
          <li>LEA : Langues Étrangères Appliquées</li>
        </ul>
      )
    },
    {
      name: "Université Vincennes-Saint-Denis (Paris VIII)",
      logo: "/assets/img/logo_UNI_Paris8.png",
      website: "https://univ-paris8.fr",
      courses: (
        <ul>
          <li>UFR LLCE italien, LEA anglais-italien, allemand-italien, espagnol-italien</li>
        </ul>
      )
    }
  ];

  const universitiesDataVersailles = [
    {
      name: "Université Paris X Nanterre",
      logo: "/assets/img/logo_UNI_Nanterre.png",
      website: "https://dep-italien.parisnanterre.fr",
      courses: (
        <ul>
          <li>
            LLCER (Licence langues, littératures et civilisations étrangères)
            <ul>
              <li>Double licence : Études italiennes + Anglo-américaines / Géographie</li>
              <li>Double diplôme franco-italien</li>
              <li>Licence Études Européennes et Internationales</li>
              <li>Master Études Romanes-Italien, Master Parcours International</li>
            </ul>
          </li>
          <li>Licence et Master Droit français – Droit italien</li>
          <li>DU Italien : Culture et communication pro</li>
          <li>LEA Anglais-Italien</li>
          <li>Préparation au CELI</li>
          <li>Doctorat en études italiennes</li>
        </ul>
      )
    },
    {
      name: "Université de Versailles / Saint Quentin",
      logo: "/assets/img/logo_UNI_StQuentin.png",
      website: "http://www.uvsq.fr/",
      courses: (
        <ul>
          <li>Licence Anglais / Droit</li>
          <li>LLCE Anglais / Espagnol</li>
          <li>Lettres modernes, Géographie</li>
        </ul>
      )
    },
    {
      name: "Université d’Evry Val d’Essonne",
      logo: "/assets/img/logo_UNI_Evry.png",
      website: "http://www.univ-evry.fr/",
      courses: (
        <ul>
          <li>LEA en langue complémentaire (LV3)</li>
          <li>Licence d’Histoire (en LV1 ou complémentaire)</li>
        </ul>
      )
    }
  ];

  return (
    <div className="apprendre-container">
      <Hero
        title={title}
        description={description}
        heroImage={heroImage}
        buttonText={buttonText}
      />
      <h2 className="h2-titre">Apprendre l'italien après le BAC</h2>

      <h3 className="h3-Sections">Académie de Paris</h3>
      {universitiesDataParis.map((university, index) => (
        <UniversityTable key={index} university={university} />
      ))}

      <h3 className="h3-Sections">Académie de Créteil</h3>
      {universitiesDataCreteil.map((university, index) => (
        <UniversityTable key={index} university={university} />
      ))}

      <h3 className="h3-Sections">Académie de Versailles</h3>
      {universitiesDataVersailles.map((university, index) => (
        <UniversityTable key={index} university={university} />
      ))}
    </div>
  );
};

export default Apprendre;

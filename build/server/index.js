import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, Link } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App$1() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App$1,
  links
}, Symbol.toStringTag, { value: "Module" }));
const UniversityTable = ({ university }) => {
  return /* @__PURE__ */ jsxs("div", { className: "university-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "university-column", children: [
      /* @__PURE__ */ jsx("h3", { children: university.name }),
      /* @__PURE__ */ jsx("img", { src: university.logo, alt: university.name }),
      /* @__PURE__ */ jsx("a", { href: university.website, target: "_blank", rel: "noopener noreferrer", children: "Site Université" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "university-column", children: [
      /* @__PURE__ */ jsx("h4", { className: "h4", children: "Cursus proposés" }),
      /* @__PURE__ */ jsx("p", { children: university.courses })
    ] })
  ] });
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UniversityTable
}, Symbol.toStringTag, { value: "Module" }));
const Actualite = ({ image: image2, title, description, url }) => {
  const maxTitleLength = 50;
  const trimmedTitle = title.length > maxTitleLength ? title.substring(0, maxTitleLength) + "..." : title;
  const maxDescriptionLength = 250;
  const trimmedDescription = description.length > maxDescriptionLength ? description.substring(0, maxDescriptionLength) + "..." : description;
  return /* @__PURE__ */ jsxs("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "actualite-link", children: [
    " ",
    /* @__PURE__ */ jsxs("div", { className: "actualite", children: [
      /* @__PURE__ */ jsx("img", { src: image2, alt: title, className: "actualite-image" }),
      /* @__PURE__ */ jsx("h3", { className: "actualite-title", children: trimmedTitle }),
      /* @__PURE__ */ jsx("p", { className: "actualite-description", children: trimmedDescription })
    ] })
  ] });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Actualite
}, Symbol.toStringTag, { value: "Module" }));
const Hero = ({ title, description, buttonText, heroImage: heroImage2, scrollTo }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "hero-container", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-content", children: [
        /* @__PURE__ */ jsx("h1", { children: title }),
        /* @__PURE__ */ jsx("p", { children: description }),
        /* @__PURE__ */ jsx("button", { onClick: scrollTo, children: buttonText })
      ] }),
      /* @__PURE__ */ jsx("img", { src: heroImage2, alt: "Hero Image", className: "hero-image" })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "hero-divider" }),
    " "
  ] });
};
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hero
}, Symbol.toStringTag, { value: "Module" }));
const heroImage$2 = "/assets/italie_rome-DfKncSmr.jpg";
const Apprendre = () => {
  const title = "Apprendre l'italien";
  const description = "Bienvenue sur notre page apprendre. Découvrez les façons d'apprendre la langue italienne en formation Post-BAC.";
  const buttonText = "Commencer";
  const universitiesDataParis = [
    {
      name: "Université Paris 3 Sorbonne Nouvelle",
      logo: require("../img/logo_UNI_SorbonneNouvelle.png"),
      website: "https://www.exemple1.com",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Licence LLCER d'italien" }),
        /* @__PURE__ */ jsx("li", { children: "Licence Sciences du Langage - mineure Langues et civilisations européennes  (italien) " }),
        /* @__PURE__ */ jsx("li", { children: "Licence d'anglais - mineure italien " }),
        /* @__PURE__ */ jsx("li", { children: "Master Études Italiennes (recherche)" }),
        /* @__PURE__ */ jsx("li", { children: "Master MEEF (Métiers de l'enseignement, de l'éducation et de la formation) parcours italien" }),
        /* @__PURE__ */ jsx("li", { children: "Master pro Échanges culturels France-Italie " }),
        /* @__PURE__ */ jsx("li", { children: "Diplômes d'université :   DLCI  et DLCR" })
      ] })
    },
    {
      name: "Université Paris IV-Sorbonne",
      logo: require("../img/logo_UNI_ParisSorbonne.png"),
      website: "https://www.exemple2.com",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Deux parcours de spécialité (1. Littérature et culture ; 2. Langue et Traduction)" }),
        /* @__PURE__ */ jsx("li", { children: "Quatre bi-licences (Italien-Histoire ; Italien-Lettres modernes ; Italien-Lettres modernes appliquées ; Italien-Musicologie)" }),
        /* @__PURE__ */ jsx("li", { children: "Master recherche en Études italiennes (Littérature, Culture, Arts du spectacle et Traduction) " }),
        /* @__PURE__ */ jsx("li", { children: "Master recherche international en Études italiennes en co-diplomation avec l’Université La Sapienza de Rome" })
      ] })
    }
    // Ajoute d'autres universités si nécessaire
  ];
  const universitiesDataCreteil = [
    {
      name: " I.U.T. de Saint Denis - Campus de La Plaine",
      logo: require("../img/logo_IUT_StDenis.png"),
      website: "www.iutsd.univ-paris13.fr",
      courses: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Cursus Techniques de commercialisation" }) })
    },
    {
      name: "Paris Est Créteil Val de Marne (Paris XII)",
      logo: require("../img/logo_UNI_Upec.png"),
      website: "http://www.u-pec.fr/",
      courses: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "LEA : Langues Étrangères Appliquées" }) })
    },
    {
      name: "Université Vincennes-Saint-Denis (Paris VIII)",
      logo: require("../img/logo_UNI_Paris8.png"),
      website: "https://univ-paris8.fr",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "UFR langues, littératures, civilisations étrangères - langues étrangères appliquées" }),
        /* @__PURE__ */ jsx("li", { children: "(UFR LLCE italien -LEA anglais -italien, allemand-italien, espagnol-italien)" })
      ] })
    }
    // Ajoute d'autres universités si nécessaire
  ];
  const universitiesDataVersailles = [
    {
      name: "Université Paris X Nanterre",
      logo: require("../img/logo_UNI_Nanterre.png"),
      website: "https://dep-italien.parisnanterre.fr",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "LLCER  (Licence mention langues, littératures et civilisations étrangères et régionales)",
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: "Double licence (délivrance de deux diplômes français) en Études italiennes et Etudes anglo-américaines ou en Études italiennes et Géographie et aménagement" }),
            /* @__PURE__ */ jsx("li", { children: "Licence en double diplôme (délivrance d'un diplôme français et d'un diplôme italien)" }),
            /* @__PURE__ */ jsx("li", { children: "Licence en Études italiennes" }),
            /* @__PURE__ */ jsx("li", { children: 'Licence en "Études Européennes et Internationales" (LEEI)' }),
            /* @__PURE__ */ jsx("li", { children: "Master Études Romanes-Italien" }),
            /* @__PURE__ */ jsx("li", { children: "Master Parcours International" }),
            /* @__PURE__ */ jsx("li", { children: "Master Parcours International en Double diplôme" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("li", { children: "Licence et Master Droit français – Droit italien" }),
        /* @__PURE__ */ jsx("li", { children: " D.U. (Diplôme d'Université) Italien: Culture et communication professionnelle " }),
        /* @__PURE__ */ jsx("li", { children: " LEA (Langues étrangères appliquées) : Anglais-Italien" }),
        /* @__PURE__ */ jsx("li", { children: "Préparation au CELI (Certificat de connaissance de la langue italienne)" }),
        /* @__PURE__ */ jsx("li", { children: "Doctorat en études italiennes" })
      ] })
    },
    {
      name: " Université de Versailles / Saint Quentin",
      logo: require("../img/logo_UNI_StQuentin.png"),
      website: "http://www.uvsq.fr/",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Licence Anglais / Droit" }),
        /* @__PURE__ */ jsx("li", { children: "Licence LLCE Anglais" }),
        /* @__PURE__ */ jsx("li", { children: "Licence LLCE Espagnol" }),
        /* @__PURE__ */ jsx("li", { children: "Licence de Lettres modernes" }),
        /* @__PURE__ */ jsx("li", { children: "Licence de Géographie" })
      ] })
    },
    {
      name: " Université d’Evry Val d’Essonne",
      logo: require("../img/logo_UNI_Evry.png"),
      website: "http://www.univ-evry.fr/",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "LEA : Langues étrangères appliquées (jusqu’au Master) en tant que langue complémentaire (LV3)" }),
        /* @__PURE__ */ jsx("li", { children: "Licence d’Histoire (en tant que LV1 ou enseignement complémentaire)" })
      ] })
    }
    // Ajoute d'autres universités si nécessaire
  ];
  return /* @__PURE__ */ jsxs("div", { className: "apprendre-container", children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        title,
        description,
        heroImage: heroImage$2,
        buttonText
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "h2-titre", children: "Apprendre l'italien après le BAC" }),
    /* @__PURE__ */ jsx("h3", { className: "h3-Sections", children: "Académie de Paris universités" }),
    universitiesDataParis.map((university, index) => /* @__PURE__ */ jsx(UniversityTable, { university }, index)),
    /* @__PURE__ */ jsx("h3", { className: "h3-Sections", children: "Académie de Créteil universités" }),
    universitiesDataCreteil.map((university, index) => /* @__PURE__ */ jsx(UniversityTable, { university }, index)),
    /* @__PURE__ */ jsx("h3", { className: "h3-Sections", children: "Académie de Versailles universités" }),
    universitiesDataVersailles.map((university, index) => /* @__PURE__ */ jsx(UniversityTable, { university }, index))
  ] });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Apprendre
}, Symbol.toStringTag, { value: "Module" }));
const heroImage$1 = "/assets/img-venise-BQvxptM8.jpg";
const Enseigner = () => {
  const title = "Enseigner grâce à notre association";
  const description = "Bienvenue sur notre page dédier à l'enseignement. Découvrez les avantages de devenir membre de notre association.";
  const buttonText = "Commencer";
  const handleScrollToContent = () => {
  };
  return /* @__PURE__ */ jsxs("div", { className: "enseigner-container", children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        title,
        description,
        buttonText,
        heroImage: heroImage$1,
        scrollTo: handleScrollToContent
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "enseigner-content1", children: [
      /* @__PURE__ */ jsx("h1", { className: "h1", children: "Comment devenir enseignant" }),
      /* @__PURE__ */ jsxs("div", { className: "content-txt", children: [
        /* @__PURE__ */ jsxs("p", { className: "p", children: [
          /* @__PURE__ */ jsx("span", { className: "span", children: "La première étape" }),
          ", pour devenir enseignant, est avoir une licence (Bac+3).  Dès la licence, des parcours ou options de préparation aux métiers de l'enseignement sont proposés aux étudiants qui désirent s'engager dans cette voie."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "p", children: [
          /* @__PURE__ */ jsx("span", { className: "span", children: "La deuxième étape" }),
          " est de vous inscrire en master MEEF (métiers de l’enseignement, de l’éducation et de la formation), qui comporte plusieurs mentions : premier degré (professeur des écoles), second degré (enseignant du secondaire), encadrement éducatif (conseiller principal d’éducation). Les différents concours auxquels vous aurez accès permettent d’enseigner dans le premier degré (écoles maternelles et primaires) ou dans le secondaire (collèges et lycées), dans le public ou dans le privé."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "p", children: "La première année du master MEEF est surtout axée sur la préparation du concours de recrutement, qui a lieu à la fin de l’année, mais il faudra valider également la deuxième année car l’obtention du diplôme est indispensable pour exercer le métier." }),
        /* @__PURE__ */ jsx("p", { className: "p", children: "Ces masters sont organisés par les ESPE (écoles supérieures du professorat et de l’éducation) au sein des universités." }),
        /* @__PURE__ */ jsx("p", { className: "p", children: "À noter que les universités et instituts catholiques proposent aussi des masters MEEF, tout indiqués si vous envisagez une carrière de professeur dans le privé." }),
        /* @__PURE__ */ jsx("p", { className: "p", children: "Au programme de tous ces concours : deux épreuves écrites d’admissibilité et deux épreuves orales (une mise en situation professionnelle et un entretien)." }),
        /* @__PURE__ */ jsx("p", { className: "p", children: "Si tout se passe bien (vous êtes admis au concours et vous avez décroché votre M1), vous poursuivez vos études en seconde année de MEEF (si vous échouez au M1 mais pas au concours, vous gardez le bénéfice du concours une année)." }),
        /* @__PURE__ */ jsx("p", { className: "p", children: "En cas d’échec au concours, vous avez la possibilité de le repasser ou vous pouvez envisager une réorientation dans un autre master (au niveau M1 ou M2 selon que vous avez réussi ou non vos examens)." }),
        /* @__PURE__ */ jsx("p", { className: "p", children: "La seconde année du master MEEF est considérée comme une année de formation en alternance : les étudiants deviennent fonctionnaires stagiaires et suivent des cours à l’ESPE tout en effectuant un stage en responsabilité équivalant à un mi-temps devant les élèves. Durant cette période, les enseignants stagiaires sont rémunérés entre 1.600 € et 1.700 € brut par mois." }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "En savoir plus : ",
          /* @__PURE__ */ jsx("a", { className: "link", href: "http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html", target: "_blank", children: "http://www.devenirenseignant.gouv.fr/pid33985/enseigner-au-college-ou-au-lycee-general-le-capes.html" })
        ] })
      ] })
    ] })
  ] });
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Enseigner
}, Symbol.toStringTag, { value: "Module" }));
const TabImg = ({ imageUrl, imageAlt, title, description }) => {
  return /* @__PURE__ */ jsxs("div", { className: "tab-img-container", children: [
    /* @__PURE__ */ jsx("img", { src: imageUrl, alt: imageAlt, className: "tab-img" }),
    /* @__PURE__ */ jsxs("div", { className: "tab-content", children: [
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx("p", { children: description })
    ] })
  ] });
};
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TabImg
}, Symbol.toStringTag, { value: "Module" }));
const image = "/assets/drapeau_italie2-C--vXVN8.jpg";
const Accueil = () => {
  return /* @__PURE__ */ jsxs("div", { className: "accueil-container", children: [
    /* @__PURE__ */ jsx("div", { className: "hero", children: /* @__PURE__ */ jsx("div", { className: "hero-content" }) }),
    /* @__PURE__ */ jsxs("div", { className: "accueil-container1", children: [
      /* @__PURE__ */ jsx("h1", { className: "h1", children: "Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne" }),
      /* @__PURE__ */ jsx(
        TabImg,
        {
          imageUrl: image,
          imageAlt: "Drapeau italien",
          title: "Notre association a pour vocation :",
          description: /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "span", children: "- d’établir et développer" }),
              " des liens de solidarité et d’amitié entre les italianistes de la région parisienne;"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "span", children: "- de renseigner" }),
              " les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ;"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "span", children: "- de promouvoir" }),
              " l’enseignement de l’italien."
            ] })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("img", { className: "img", src: "/img/Italie_icon.png", alt: "Icône Italie" }),
    /* @__PURE__ */ jsxs("div", { className: "accueil-container1", children: [
      /* @__PURE__ */ jsx("h2", { className: "txt2", children: "Exploration culturelle : Plongée au cœur de l'Italie avec l'Association des Professeurs d'Italien de la Région Parisienne" }),
      /* @__PURE__ */ jsx("p", { className: "txt", children: "Nous sommes également des défenseurs de la diversité linguistique et culturelle. En promouvant l'enseignement de l'italien, nous contribuons à l'enrichissement de la palette linguistique de la région parisienne..." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "accueil-container2", children: [
      /* @__PURE__ */ jsx("h2", { className: "txt3 h2", children: "actualités" }),
      /* @__PURE__ */ jsx("p", { className: "p", children: "... DAL WEB" }),
      /* @__PURE__ */ jsxs("div", { className: "actualite-container", children: [
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "/img/DivinaComedia.jpg",
            title: "La Divina Commedia",
            description: "Con tutto si può giocare, anche con Dante Alighieri...",
            url: "https://www.lastampa.it/cultura/2021/01/21/news/la-divina-commedia-diventa-un-gioco-da-tavolo-come-quello-dell-oca-1.39802733"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "/img/zerocalcare.jpg",
            title: "Zerocalcare sur Netflix",
            description: "L'arrivo della serie animata di Zerocalcare su Netflix...",
            url: "https://youtu.be/c0p3iwtw9tU"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "/img/greenPea.jpg",
            title: "Green Pea apre a Torino l’8 dicembre",
            description: "L’attesissimo centre commercial éco-responsable...",
            url: "https://www.gamberorosso.it/notizie/green-pea-apre-a-torino-l8-dicembre-ecco-cose-la-scommessa-ecologica-di-farinetti/"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "/img/sergio.jpg",
            title: "Sergio Mattarella: «Dante, notre contemporain»",
            description: "La musique pour rendre hommage au Sommo poeta...",
            url: "https://www.corriere.it/cultura/20_ottobre_03/sergio-mattarella-dante-nostro-contemporaneo-cosi-sua-voce-parla-futuro-5416bf66-05a5-11eb-867c-57744a2cabe2.shtml"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "/img/dal.jpg",
            title: "Dal 2021 riapre le Corridoio Vasarian",
            description: "Une gemme du patrimoine artistique italien rouvre enfin...",
            url: "https://it.businessinsider.com/corridoio-vasariano-firenze-palazzo-vecchio-uffici-palazzo-pitti-ponte-vecchio-2021-riapertura/"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "/img/raffaelloSuperstar.jpg",
            title: "Raffaello superstar à Rome",
            description: "La plus grande exposition jamais dédiée à Raffaello...",
            url: "https://roma.repubblica.it/cronaca/2019/12/25/news/raffaello_superstar_a_roma_la_piu_grande_mostra_con_cento_capolavori-244337923/"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "/img/lupi.jpg",
            title: "I lupi di Liu Ruowang à Naples",
            description: "Cento lupi en métal assiègent la place Municipio...",
            url: "http://www.rainews.it/dl/rainews/media/Cento-lupi-in-piazza-Municipio-a-Napoli-la-natura-che-si-ribella-all-uomo-7a4ad6e0-29a7-42ed-824b-d74e0b326cab.html#foto-3"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "/img/portata.jpg",
            title: "Une villa romaine révélée à Enna",
            description: "Les fouilles ont mis au jour une autre villa impressionnante...",
            url: "http://www.custonaciweb.it/portata-alla-luce-unaltra-villa-romana-a-enna-si-trova-a-15-km-dalla-villa-del-casale-di-piazza-armerina/"
          }
        ) })
      ] })
    ] })
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Accueil
}, Symbol.toStringTag, { value: "Module" }));
const FicheAdhesionPDF = "/assets/fiche_adhesion-DYXNuPP_.pdf";
const adhererImg = "/assets/img-adherer-c02hQ1ej.png";
const heroImage = "/assets/drapeau_italie-lvIiPmlE.jpg";
const Adherer = () => {
  const title = "Adhérer à notre association";
  const description = "Bienvenue sur notre page d'adhésion. Découvrez les avantages de devenir membre de notre association.";
  const buttonText = "Commencer";
  const handleScrollToContent = () => {
  };
  return /* @__PURE__ */ jsxs("div", { className: "adherer-container", children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        title,
        description,
        buttonText,
        heroImage,
        scrollTo: handleScrollToContent
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "adherer-content1", children: [
      /* @__PURE__ */ jsx("img", { src: adhererImg, alt: "Adherer Image", className: "adherer-image" }),
      /* @__PURE__ */ jsxs("div", { className: "txt-content", children: [
        /* @__PURE__ */ jsx("h2", { className: "h2", children: "Pourquoi adhérer ?" }),
        /* @__PURE__ */ jsx("h3", { className: "h3", children: "Adhérer à l'A.P.I.R.P. vous permet de :" }),
        /* @__PURE__ */ jsxs("ol", { className: "custom-ol ol", children: [
          /* @__PURE__ */ jsx("li", { children: "Participer activement aux assemblées générales." }),
          /* @__PURE__ */ jsx("li", { children: "Recevoir chaque année le bulletin imprimé de l’association et des plaquettes gratuites pour la promotion de l’italien." }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Soutenir des initiatives visant à promouvoir l’enseignement de l’italien en île-de-France, telles que :",
            /* @__PURE__ */ jsxs("ul", { className: "ul", children: [
              /* @__PURE__ */ jsx("li", { children: "- La réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France ;" }),
              /* @__PURE__ */ jsx("li", { children: "- La création et l’impression de plaquettes pour la promotion de l’italien ;" }),
              /* @__PURE__ */ jsx("li", { children: "- Notre participation à des manifestations et des événements culturels tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("li", { children: "Connaître le réseau des professeurs d’italien de la Région Parisienne." }),
          /* @__PURE__ */ jsx("li", { children: "Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue." }),
          /* @__PURE__ */ jsx("li", { children: "Bénéficier de l'union qui fait la force ; l'A.P.I.R.P. est un moyen de ne pas rester isolé et de favoriser des échanges actifs sur notre métier." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "adherer-content2", children: [
      /* @__PURE__ */ jsx("h2", { className: "h2", children: "Qui peut adhérer à l’association ?" }),
      /* @__PURE__ */ jsx("p", { className: "p", children: "Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent." }),
      /* @__PURE__ */ jsx("h3", { children: "Comment y adhérer ?" }),
      /* @__PURE__ */ jsx("p", { className: "p", children: "Pour devenir membres il faut : remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration." }),
      /* @__PURE__ */ jsx("button", { className: "button", onClick: () => window.open(FicheAdhesionPDF, "_blank"), children: "Télécharger la fiche d'adhésion" })
    ] })
  ] });
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Adherer
}, Symbol.toStringTag, { value: "Module" }));
const CloseIcon = (props) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 23.335, height: 23.335, ...props, children: /* @__PURE__ */ jsxs("g", { "data-name": "Group 99", fill: "#000", children: [
    /* @__PURE__ */ jsx("path", { "data-name": "Rectangle 58", d: "M21.213 0l2.121 2.121L2.121 23.335 0 21.213z" }),
    /* @__PURE__ */ jsx("path", { "data-name": "Rectangle 59", d: "M23.334 21.213l-2.121 2.121L-.001 2.121 2.121 0z" })
  ] }) });
};
function SvgComponent$2(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "32px",
      height: "42px",
      viewBox: "0 0 232 242",
      enableBackground: "new 0 0 232 242",
      xmlSpace: "preserve",
      ...props,
      children: /* @__PURE__ */ jsx(
        "image",
        {
          id: "image0",
          width: "232",
          height: "242",
          x: "0",
          y: "0",
          xlinkHref: "data:image/png;base64,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"
        }
      )
    }
  );
}
function Sidebar({ sidebarOpen, toggleSidebar }) {
  return /* @__PURE__ */ jsxs(Wrapper$a, { role: "navigation", className: "animate darkBg", sidebarOpen, children: [
    /* @__PURE__ */ jsxs(SidebarHeader, { className: "flexSpaceCenter", children: [
      /* @__PURE__ */ jsx("div", { className: "flexNullCenter", children: /* @__PURE__ */ jsx(SvgComponent$2, {}) }),
      /* @__PURE__ */ jsx(CloseBtn, { onClick: () => toggleSidebar(!sidebarOpen), className: "animate pointer", children: /* @__PURE__ */ jsx(CloseIcon, {}) })
    ] }),
    /* @__PURE__ */ jsxs(UlStyle, { className: "flexNullCenter flexColumn", children: [
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "/accueil", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Accueil" }) }),
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "Forum", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Forum" }) }),
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "Activités", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Activités" }) }),
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "Contact", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Nous connaître" }) }),
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "/adherer", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Adhérer" }) }),
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "Promouvoir", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Promouvoir" }) }),
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "/apprendre", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Apprendre" }) }),
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "/enseigner", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Enseigner" }) }),
      /* @__PURE__ */ jsx("li", { className: "semiBold font15 pointer", children: /* @__PURE__ */ jsx("a", { href: "/divers", onClick: () => toggleSidebar(!sidebarOpen), style: { padding: "10px 15px" }, children: "Divers" }) })
    ] })
  ] });
}
const Wrapper$a = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => props.sidebarOpen ? "0px" : "-400px"};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
function Backdrop({ toggleSidebar }) {
  return /* @__PURE__ */ jsx(Wrapper$9, { className: "darkBg", onClick: () => toggleSidebar(false) });
}
const Wrapper$9 = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;
function SvgComponent$1(props) {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: 28, height: 22, viewBox: "0 0 28 22", ...props, children: [
    /* @__PURE__ */ jsx("path", { "data-name": "Line 5", fill: "none", stroke: "#0b093b", strokeLinecap: "round", strokeWidth: 2, d: "M1 1h26" }),
    /* @__PURE__ */ jsx("path", { "data-name": "Line 6", fill: "none", stroke: "#0b093b", strokeLinecap: "round", strokeWidth: 2, d: "M1 11h26" }),
    /* @__PURE__ */ jsx("path", { "data-name": "Line 7", fill: "none", stroke: "#0b093b", strokeLinecap: "round", strokeWidth: 2, d: "M1 21h26" })
  ] });
}
function TopNavbar() {
  const [y, setY] = useState(0);
  const [sidebarOpen, toggleSidebar] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Sidebar, { sidebarOpen, toggleSidebar }),
    sidebarOpen && /* @__PURE__ */ jsx(Backdrop, { toggleSidebar }),
    /* @__PURE__ */ jsx(Wrapper$8, { style: y > 100 ? { height: "60px" } : { height: "80px" }, children: /* @__PURE__ */ jsxs(NavInner, { children: [
      /* @__PURE__ */ jsx("a", { href: "/accueil", children: /* @__PURE__ */ jsx(SvgComponent$2, {}) }),
      /* @__PURE__ */ jsx(BurderWrapper, { onClick: () => toggleSidebar(!sidebarOpen), children: /* @__PURE__ */ jsx(SvgComponent$1, {}) }),
      /* @__PURE__ */ jsxs(UlWrapper, { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/accueil", children: "Accueil" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Forum", children: "Forum" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Activités", children: "Activités" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Contact", children: "Nous connaître" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/adherer", children: "Adhérer" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Promouvoir", children: "Promouvoir" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/apprendre", children: "Apprendre" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/enseigner", children: "Enseigner" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/divers", children: "Divers" }) })
      ] })
    ] }) })
  ] });
}
const Wrapper$8 = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
  transition: height 0.3s ease;
`;
const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 15px;

    a {
      text-decoration: none;
      padding: 10px 15px;
      font-weight: 600;
      font-size: 15px;
      color: black;
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
function SvgComponent(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "32px",
      height: "42px",
      viewBox: "0 0 232 242",
      enableBackground: "new 0 0 232 242",
      xmlSpace: "preserve",
      ...props,
      children: /* @__PURE__ */ jsx(
        "image",
        {
          id: "image0",
          width: "232",
          height: "242",
          x: "0",
          y: "0",
          xlinkHref: "data:image/png;base64,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"
        }
      )
    }
  );
}
function Contact$1() {
  const getCurrentYear = () => {
    return (/* @__PURE__ */ new Date()).getFullYear();
  };
  return /* @__PURE__ */ jsx(Wrapper$7, { children: /* @__PURE__ */ jsx("div", { className: "darkBg", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(InnerWrapper, { className: "flexSpaceCenter", style: { padding: "30px 0" }, children: [
    /* @__PURE__ */ jsxs(Link, { className: "flexCenter animate pointer", to: "home", smooth: true, offset: -80, children: [
      /* @__PURE__ */ jsx(SvgComponent, {}),
      /* @__PURE__ */ jsx("h1", { className: "font15 extraBold ", style: { marginLeft: "15px" }, children: "APIRP" })
    ] }),
    /* @__PURE__ */ jsxs(StyleP, { className: " font13", children: [
      "© ",
      getCurrentYear(),
      " - ",
      /* @__PURE__ */ jsx("span", { className: "darkRedColor font13", children: "Rosalie & Ornella" }),
      " - No Right Reserved"
    ] }),
    /* @__PURE__ */ jsx(Link, { className: " animate pointer font13", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }), children: "Back to top" })
  ] }) }) }) });
}
const Wrapper$7 = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
const DiversPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ jsxs("div", { className: "divers-container", children: [
    /* @__PURE__ */ jsxs("form", { className: "login-form", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("h2", { className: "h2-titre", children: "Connexion" }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "username", children: "Nom d'utilisateur" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "username",
            value: username,
            onChange: (e) => setUsername(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Mot de passe" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            id: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("button", { className: "button", type: "submit", children: "Se connecter" })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: require("../img/paysage_italie.jpg"),
        alt: "Image d'illustration",
        className: "login-image img"
      }
    )
  ] });
};
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DiversPage
}, Symbol.toStringTag, { value: "Module" }));
function BlogBox({ tag, title, text, action, author }) {
  return /* @__PURE__ */ jsx(WrapperBtn, { className: "animate pointer", onClick: action ? () => action() : null, children: /* @__PURE__ */ jsxs(Wrapper$6, { className: "whiteBg radius8 shadow", children: [
    /* @__PURE__ */ jsx("h3", { className: "font20 extraBold darkColor", children: title }),
    /* @__PURE__ */ jsx("p", { className: "font13", style: { padding: "30px 0" }, children: text }),
    /* @__PURE__ */ jsx("p", { className: "font13 extraBold", children: author }),
    /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("p", { className: "tag coralBg radius6 font13 extraBold", children: tag }) })
  ] }) });
}
const Wrapper$6 = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
function FullButton({ title, action, border }) {
  return /* @__PURE__ */ jsx(
    Wrapper$5,
    {
      className: "animate pointer radius8",
      onClick: action ? () => action() : null,
      border,
      children: title
    }
  );
}
const Wrapper$5 = styled.button`
  border: 1px solid ${(props) => props.border ? "#7b151a" : "#CD212A"};
  background-color: ${(props) => props.border ? "transparent" : "#CD212A"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => props.border ? "#7b151a" : "#fff"};
  :hover {
    background-color: ${(props) => props.border ? "transparent" : "#7b151a"};
    border: 1px solid #7b151a;
    color: ${(props) => props.border ? "#CD212A" : "#fff"};
  }
`;
const HeaderImage$3 = "/assets/Header-Activites-DwGlyY33.jpg";
function HeaderActivités() {
  return /* @__PURE__ */ jsxs(HeaderWrapper$3, { className: "container flexSpaceCenter", children: [
    /* @__PURE__ */ jsx(LeftSide$3, { className: "flexCenter", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h1", { className: "extraBold font60", children: [
        /* @__PURE__ */ jsx("span", { className: "darkColor", children: "Activités" }),
        " culutrelles"
      ] }),
      /* @__PURE__ */ jsx(HeaderP$3, { className: "font15", children: "Bienvenue sur notre page activités culturelles. Explorez la richesse culturelle italienne : concerts envoûtants, expositions captivantes, et littérature inspirante !     " }),
      /* @__PURE__ */ jsx(BtnWrapper$2, { children: /* @__PURE__ */ jsx(FullButton, { title: "Voir Plus" }) })
    ] }) }),
    /* @__PURE__ */ jsx(RightSide$3, { children: /* @__PURE__ */ jsx(ImageWrapper$3, { children: /* @__PURE__ */ jsx(Img$3, { className: "radius8", src: HeaderImage$3, alt: "office", style: { zIndex: 9 } }) }) })
  ] });
}
function Activités() {
  return /* @__PURE__ */ jsx(Wrapper$4, { children: /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "row textCenter", children: [
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "Concours Dante Dì",
          text: "Le Consulat Général d’Italie à Paris, en collaboration avec l’Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l’occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.[...]",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "Paolo Fresu et Daniele di Bonaventura en concert.",
          text: "Mercredi  21 Oct 2020 de 19h à 20h30, l'IIC (50, rue de Varenne) nous invite au concert de Paolo Fresu et Daniele di Bonaventura. Paolo Fresu est l’un des plus grands trompettistes de jazz d’aujourd’hui.[...]",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "Sicilia, Tunisia, ...",
          text: "Sur scène à Nanterre, «Sicilia.» Ce spectacle a été joué plus de 140 fois, traduit en italien et anglais, et joué en France et à l'étranger [...].",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row textCenter", children: [
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "Italissimo 2020",
          text: "La cinquième édition d’ITALISSIMO, le festival de littérature et culture italiennes, qui devait se tenir en avril, aura lieu du 8 au 13 octobre 2020.[...]",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "Exposition Gramsci à l'IIC",
          text: "Pour célébrer la richesse et la vivacité de la pensée d’Antonio Gramsci, la Fondation Gramsci et l’Institut culturel italien de Paris vous invitent à découvrir l’exposition « Les Cahiers de prison et la France »[...]",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "L'essor des séries italiennes à l'IIC",
          text: "Le 22 septembre 2020 à 19h, l'Institut culturel italien vous convie à une rencontre consacrée à la Fiction à l'italienne. De Gomorra à la série de Paolo Sorrentino, The young Pope.[...]",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "Erri De Luca, au MK2 Bibliothèque",
          text: "\r\n                L’écrivain italien Erri De Luca sera au mk2 Bibliothèque (Paris 13° ) du vendredi 18 au dimanche 20 septembre 2020 pour une série de trois entretiens et la projection d’un film qu’il présentera.[...]",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "Soirée de chants traditionnels italiens et stage de chant",
          text: "Le Studio DTM - Danse Théâtre Musique accueille le 20 Mars 2020 à 20h30 un artiste italien, pour une soirée de chants et bals traditionnels des régions Marche et Abruzzo.[...]",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        BlogBox,
        {
          title: "Cézanne et Rêve d’Italie au Musée Marmottan.",
          text: "Au musée Marmottan Monet, Paris 16ème, vient de s’ouvrir une exposition inédite intitulée «Cézanne et les maîtres. Rêve d’Italie». Elle aura lieu jusqu’au 5 juillet 2020.[...]",
          tag: "Lire plus",
          action: () => alert("clicked")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "row flexCenter", children: /* @__PURE__ */ jsx("div", { style: { margin: "50px 0", width: "200px" } }) })
  ] }) }) });
}
const Wrapper$4 = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderWrapper$3 = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide$3 = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide$3 = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP$3 = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper$2 = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper$3 = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img$3 = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
function ProjectBox({ img, title, text, action }) {
  return /* @__PURE__ */ jsxs(Wrapper$3, { children: [
    /* @__PURE__ */ jsx(ImgBtn, { className: "aniamte pointer", onClick: action ? () => action() : null, children: /* @__PURE__ */ jsx("img", { className: "radius8", src: img, alt: "project" }) }),
    /* @__PURE__ */ jsx("h3", { className: "font20 extraBold", children: title }),
    /* @__PURE__ */ jsx("p", { className: "font13", children: text })
  ] });
}
const Wrapper$3 = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;
const ProjectImg1 = "/assets/bulletin1-DutwIJe6.png";
const ProjectImg2 = "/assets/bulletin2-BDVmf7LQ.png";
const ProjectImg3 = "/assets/bulletin3-Clx44Zdy.png";
const ProjectImg4 = "/assets/bulletin4-CM_chRWs.png";
const ProjectImg5 = "/assets/bulletin5-DDNWtWJ-.png";
const ProjectImg6 = "/assets/bulletin6-f5FuQ2IO.png";
const HeaderImage$2 = "/assets/Header-Contact-CpdXn06A.jpg";
function Contact() {
  return /* @__PURE__ */ jsxs(HeaderWrapper$2, { className: "container flexSpaceCenter", children: [
    /* @__PURE__ */ jsx(LeftSide$2, { className: "flexCenter", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h1", { className: "extraBold font60", children: [
        "Nous",
        /* @__PURE__ */ jsx("span", { className: "darkColor", children: " contacter" })
      ] }),
      /* @__PURE__ */ jsxs(HeaderP$2, { className: "font15", children: [
        "Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à : ",
        /* @__PURE__ */ jsx("span", { className: "semiBold", children: "apirp.association@gmail.com." }),
        /* @__PURE__ */ jsx("br", {}),
        "Pour les renouvellement d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières page de notre bulletin annuel."
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "Mail : apirp.association@gmail.com" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("h3", { children: [
        "Suivez nous sur ",
        /* @__PURE__ */ jsx("a", { href: "https://m.facebook.com/APIRP/", target: "_blank", className: "darkColor", children: "Facebook" }),
        " !"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(RightSide$2, { children: /* @__PURE__ */ jsx(ImageWrapper$2, { children: /* @__PURE__ */ jsx(Img$2, { className: "radius8", src: HeaderImage$2, alt: "office", style: { zIndex: 9 } }) }) })
  ] });
}
const HeaderWrapper$2 = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide$2 = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide$2 = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP$2 = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper$2 = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img$2 = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
function Assoc() {
  return /* @__PURE__ */ jsx(Wrapper$2, { id: "projects", children: /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(HeaderInfo$1, { children: [
    /* @__PURE__ */ jsx("h1", { className: "font40 extraBold darkColor", children: "L'association et ses statuts" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("h1", { className: "font30 semiBold", children: "Présentation de l'APIRP: Association des Professeurs d'Italien de la Région Parisienn" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne ». Rebaptisée « Association des professeurs d'italien de la région parisienne » (APIRP) en 1984, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l’Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Quarante ans après  sa création, sa vocation originelle (« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne ») reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Elle est présente lors de manifestations culturelles italo-françaises (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI (Fédération Nationale des Associations d'Italianistes)."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15 semiBold", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Pour nous contacter : apirp.association@gmail.com"
    ] })
  ] }) }) }) });
}
const Wrapper$2 = styled.section`
  width: 100%;
  margin: 50px 0;
`;
const HeaderInfo$1 = styled.div`
  @media (max-width: 860px) {
   
  }
`;
function Elu() {
  return /* @__PURE__ */ jsx(Wrapper$2, { id: "projects", children: /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(HeaderInfo$1, { children: [
    /* @__PURE__ */ jsx("h1", { className: "font40 extraBold darkColor", children: "Les élus au C.A." }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("h1", { className: "font30 semiBold", children: "Membres du C.A. et du Bureau élus le 16 mars 2019" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Président : Olivier Morin            "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Vice-Présidente : Ilaria Madonna            "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Secrétaire : Estelle Paint            "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Trésorière : Valérie Guillouet            "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15 ", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Correspondante APIRP pour l'académie de Paris : Alexandra Martinez "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15 ", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Correspondant APIRP pour l'académie de Créteil : Graziano Tassi            "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Correspondante APIRP pour l'académie de Versailles : Charlotte Ostrovsky-Richard          "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Secrétaire adjointe + correspondante “CPGE”: Gabrielle Kerleroux        "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Trésorière adjointe : Patrizia Bisson   "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Webmestre : Maria Letizia Gabanini      "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Contacts avec les associations italiennes de l'Île-de-France : Patrizia Bisson et Alexandra Martinez      "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Contact avec les Universités: Graziano Tassi      "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Contact avec l'IIC et le Consulat : Olivier Morin - Ilaria Madonna    "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Redactrice en chef du Bulletin : Charlotte Ostrovsky-Richard    "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Directeur artistique du Bulletin: Francesco Forlani  "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Présidents Honoraires : Madame Anne Mazire "
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "font15", children: [
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Membre honoraire: Ketty Zanforlini        "
    ] })
  ] }) }) }) });
}
function Bulletin() {
  return /* @__PURE__ */ jsx(Wrapper$2, { id: "projects", children: /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs(HeaderInfo$1, { children: [
      /* @__PURE__ */ jsx("h1", { className: "font40 extraBold darkColor", children: "Les bulletins de l'association" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h1", { className: "font30 semiBold", children: " Le dernier bulletin 2018 - 2019 a été consacré à la cuisine italienne" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("p", { className: "font15", children: "Si vous souhaitez commander l'un de ces bulletin vous pouvez envoyer un chèque de 4 € à l'ordre de l'APIRP à l'adresse suivante : Mme Valérie GUILLOUET - 10, rue Blondel - 92400 COURBEVOIE" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row textCenter", children: [
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        ProjectBox,
        {
          img: ProjectImg1,
          title: "La carte",
          action: () => window.open("https://drive.google.com/file/d/1Iqk0kTEXSH5eEQyVRmXXjufPeTUmlwHX/view", "_blank")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        ProjectBox,
        {
          img: ProjectImg2,
          title: "Le menu",
          action: () => window.open("https://drive.google.com/file/d/1AhBJZCmjYmjvKCe58RbusWGJzaMnC7i6/view", "_blank")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        ProjectBox,
        {
          img: ProjectImg3,
          title: "Lettre aux adhérents",
          action: () => window.open("https://drive.google.com/file/d/1jCvJfoMlt2iwGd-ebsV9iu0X-jpdbr1n/view", "_blank")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs(HeaderInfo$1, { children: [
      /* @__PURE__ */ jsx("h1", { className: "font30 semiBold", children: " Ci-dessous les sommaires des derniers bulletins" }),
      /* @__PURE__ */ jsx("br", {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "row textCenter", children: [
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        ProjectBox,
        {
          img: ProjectImg4,
          title: "Copertia bulletin",
          action: () => window.open("https://drive.google.com/file/d/18nlDFxe32kEFDDg4a_mYTsgHAW3uwTfR/view", "_blank")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        ProjectBox,
        {
          img: ProjectImg5,
          title: "Sommaire",
          action: () => window.open("https://drive.google.com/file/d/1J_ffMlPtrx7OyrkYuz1gO14r5PcK-ms6/view", "_blank")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-4 col-md-4 col-lg-4", children: /* @__PURE__ */ jsx(
        ProjectBox,
        {
          img: ProjectImg6,
          title: "Sommaire",
          action: () => window.open("https://drive.google.com/file/d/0B34j4qalEtJseHdNS1FRX0xKVGM/view?resourcekey=0-L2vbnBD7zasV7NsrSUX0GQ", "_blank")
        }
      ) })
    ] })
  ] }) }) });
}
const AddImage2$1 = "/assets/Promouvoir-1-DzDcPPMT.jpg";
const HeaderImage$1 = "/assets/Header-Promouvoir-B3wyvMh_.jpg";
const AddImage3 = "/assets/Promouvoir-2-Cn_ZsLIt.jpg";
function HeaderPromouvoir() {
  return /* @__PURE__ */ jsxs(HeaderWrapper$1, { className: "container flexSpaceCenter", children: [
    /* @__PURE__ */ jsx(LeftSide$1, { className: "flexCenter", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h1", { className: "extraBold font60", children: [
        /* @__PURE__ */ jsx("span", { className: "darkColor", children: "Promouvoir" }),
        " l'italien"
      ] }),
      /* @__PURE__ */ jsx(HeaderP$1, { className: "font15", children: "Bienvenue sur notre page promouvoir l'italien. Dans le paysage culturel et linguistique mondial, la langue italienne brille de sa propre lumière. Au cœur de cette vitalité linguistique se trouve l'engagement passionné de notre association dévouées à sa promotion." }),
      /* @__PURE__ */ jsx(BtnWrapper$1, { children: /* @__PURE__ */ jsx(FullButton, { title: "Voir Plus" }) })
    ] }) }),
    /* @__PURE__ */ jsx(RightSide$1, { children: /* @__PURE__ */ jsx(ImageWrapper$1, { children: /* @__PURE__ */ jsx(Img$1, { className: "radius8", src: HeaderImage$1, alt: "office", style: { zIndex: 9 } }) }) })
  ] });
}
const HeaderWrapper$1 = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide$1 = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide$1 = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP$1 = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper$1 = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper$1 = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img$1 = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
function Promouvoir() {
  return /* @__PURE__ */ jsxs(Wrapper$1, { id: "projects", children: [
    /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(HeaderInfo, { children: [
      /* @__PURE__ */ jsx("h1", { className: "font40 extraBold", children: "La plaquette éditée par l'APIRP" }),
      /* @__PURE__ */ jsxs("p", { className: "font15", children: [
        " ",
        /* @__PURE__ */ jsx("br", {}),
        "L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "lightBg", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(Advertising$1, { className: "flexSpaceCenter", children: [
      /* @__PURE__ */ jsx(AddLeft$1, { children: /* @__PURE__ */ jsx(ImgWrapper$1, { className: "flexCenter", children: /* @__PURE__ */ jsx("img", { className: "radius8", src: AddImage2$1, alt: "add" }) }) }),
      /* @__PURE__ */ jsx(AddRight$1, { children: /* @__PURE__ */ jsx(ImgWrapper$1, { className: "flexCenter", children: /* @__PURE__ */ jsx("img", { className: "radius8", src: AddImage3, alt: "add" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "lightBg", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(Advertising$1, { className: "flexSpaceCenter", children: [
      /* @__PURE__ */ jsx(AddLeft$1, { children: /* @__PURE__ */ jsxs("h4", { className: "font15", children: [
        " ",
        /* @__PURE__ */ jsx("br", {}),
        "Télécharger le bon de commande pour pouvoir commander les dépliants :"
      ] }) }),
      /* @__PURE__ */ jsx(AddRight$1, { children: /* @__PURE__ */ jsxs(ButtonsRow$1, { className: "flexNullCenter", style: { margin: "30px 0" }, children: [
        /* @__PURE__ */ jsx("div", { style: { width: "190px" }, children: /* @__PURE__ */ jsx(FullButton, { title: "Adhérent", action: () => window.open("https://drive.google.com/file/d/0B34j4qalEtJsMGlEcmFFWlJmY1E/view?resourcekey=0-19mliwKeZAoPK9XBmNVPwg", "_blank") }) }),
        /* @__PURE__ */ jsx("div", { style: { width: "190px", marginLeft: "15px" }, children: /* @__PURE__ */ jsx(FullButton, { title: "Non adhérent", action: () => window.open("https://drive.google.com/file/d/0B34j4qalEtJsd2xZM3dxclI2UTg/view?resourcekey=0-AK-KZe_UzMKDFomtWhSyGA", "_blank") }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(HeaderInfo, { children: [
      /* @__PURE__ */ jsx("h4", { className: "font15", children: "Réponses au Quizz de la plaquette" }),
      /* @__PURE__ */ jsx(ButtonsRow$1, { className: "flexNullCenter", style: { margin: "30px 0" }, children: /* @__PURE__ */ jsx("div", { style: { width: "190px", marginLeft: "15px" }, children: /* @__PURE__ */ jsx("button", { className: "button1", onClick: () => window.open("https://drive.google.com/file/d/0B34j4qalEtJsd2psVS1tN3plaFU/view?resourcekey=0-nlUxtG1Hf7kOX6BhtZuY2w", "_blank"), children: " Les réponses " }) }) })
    ] }) }) })
  ] });
}
const Wrapper$1 = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising$1 = styled.div`
  padding: 100px 0 ;
  margin: 50px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
    
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 30px 0 30px 0;
    margin: 50px 0 50px 0;
  }
`;
const ButtonsRow$1 = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft$1 = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight$1 = styled.div`
  width: 50%;
  
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const ImgWrapper$1 = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
const AddImage2 = "/assets/Forum-1-CW2hFb6N.jpg";
const Programme21 = "/assets/Programme21-CvWhcx5L.jpg";
const Programme20 = "/assets/Programme20-CIM70dMf.jpg";
const HeaderImage = "/assets/Header-Forum-CaCNw0xL.jpg";
function HeaderForum() {
  return /* @__PURE__ */ jsxs(HeaderWrapper, { className: "container flexSpaceCenter", children: [
    /* @__PURE__ */ jsx(LeftSide, { className: "flexCenter", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h1", { className: "extraBold font60", children: [
        /* @__PURE__ */ jsx("span", { className: "darkColor", children: "Forum" }),
        " des associations franco-italiennes"
      ] }),
      /* @__PURE__ */ jsx(HeaderP, { className: "font15", children: "Bienvenue sur notre page forum des associastions. Découvrez le prochain forum des associations franco-italiennes et son programme." }),
      /* @__PURE__ */ jsx(BtnWrapper, { children: /* @__PURE__ */ jsx(FullButton, { title: "Voir Plus" }) })
    ] }) }),
    /* @__PURE__ */ jsx(RightSide, { children: /* @__PURE__ */ jsx(ImageWrapper, { children: /* @__PURE__ */ jsx(Img, { className: "radius8", src: HeaderImage, alt: "office", style: { zIndex: 9 } }) }) })
  ] });
}
function Forum() {
  return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(Advertising, { className: "flexSpaceCenter", children: [
    /* @__PURE__ */ jsx(AddLeft, { children: /* @__PURE__ */ jsx(AddLeftInner, { children: /* @__PURE__ */ jsx(ImgWrapper, { className: "flexCenter", children: /* @__PURE__ */ jsx("img", { className: "radius8", src: AddImage2, alt: "" }) }) }) }),
    /* @__PURE__ */ jsxs(AddRight, { children: [
      /* @__PURE__ */ jsx("h4", { className: "font15 semiBold", children: "Forum des associations italiennes virtuel" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("h2", { className: "font40 extraBold darkColor", children: "APIRP 2020" }),
      /* @__PURE__ */ jsxs("p", { className: "font12", children: [
        /* @__PURE__ */ jsx("br", {}),
        "Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et 21 juin 2020. L' APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association, le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a créé un padlet pour illustrer les projets menés par l'APIRP, intitulé APIRP 2020."
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("p", { className: "font12", children: " Vous y trouverez des renseignements sur la diffusion de l'enseignement de l'italien dans les trois académies franciliennes, des documents pour la promotion de notre belle langue, une vidéo pour présenter le bilan des activités de l'APIRP de cette année, le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos adhérents." }),
      /* @__PURE__ */ jsxs("p", { className: "font12", children: [
        "Plus d'infos sur les",
        /* @__PURE__ */ jsx("a", { href: "https://padlet.com/apirpassociation/apirp2020", children: " renseignements." })
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("p", { className: "font12", children: "L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes. " }),
      /* @__PURE__ */ jsxs(ButtonsRow, { className: "flexNullCenter", style: { margin: "30px 0" }, children: [
        /* @__PURE__ */ jsx("div", { style: { width: "190px" }, children: /* @__PURE__ */ jsx(FullButton, { title: "Programme 20 juin", action: () => window.open(Programme20, "_blank") }) }),
        /* @__PURE__ */ jsx("div", { style: { width: "190px", marginLeft: "15px" }, children: /* @__PURE__ */ jsx(FullButton, { title: "Programme 21 juin", action: () => window.open(Programme21, "_blank") }) })
      ] })
    ] })
  ] }) }) });
}
const Wrapper = styled.section`
  width: 100%;
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
const HeaderWrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
function Landing() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopNavbar, {}),
    /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/accueil", element: /* @__PURE__ */ jsx(Accueil, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Accueil, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "Forum", element: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(HeaderForum, {}),
        /* @__PURE__ */ jsx(Forum, {})
      ] }) }),
      /* @__PURE__ */ jsx(Route, { path: "Activités", element: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(HeaderActivités, {}),
        /* @__PURE__ */ jsx(Activités, {})
      ] }) }),
      /* @__PURE__ */ jsx(Route, { path: "Contact", element: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Contact, {}),
        /* @__PURE__ */ jsx(Assoc, {}),
        /* @__PURE__ */ jsx(Elu, {}),
        /* @__PURE__ */ jsx(Bulletin, {})
      ] }) }),
      /* @__PURE__ */ jsx(Route, { path: "/adherer", element: /* @__PURE__ */ jsx(Adherer, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "Promouvoir", element: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(HeaderPromouvoir, {}),
        /* @__PURE__ */ jsx(Promouvoir, {})
      ] }) }),
      /* @__PURE__ */ jsx(Route, { path: "/apprendre", element: /* @__PURE__ */ jsx(Apprendre, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/enseigner", element: /* @__PURE__ */ jsx(Enseigner, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/divers", element: /* @__PURE__ */ jsx(DiversPage, {}) })
    ] }) }),
    /* @__PURE__ */ jsx(Contact$1, {})
  ] });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Landing
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopNavbar, {}),
    " ",
    /* @__PURE__ */ jsx(Accueil, {}),
    "   "
  ] });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true }),
      /* @__PURE__ */ jsx("link", { href: "https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap", rel: "stylesheet" })
    ] }),
    /* @__PURE__ */ jsx(Landing, {})
  ] });
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-jePbo6YA.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/components-D6J0LBW7.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-DFin8lYl.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/components-D6J0LBW7.js"], "css": ["/assets/root-CTekCCfy.css"] }, "routes/UniversityTable": { "id": "routes/UniversityTable", "parentId": "root", "path": "UniversityTable", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/UniversityTable-Dd5ZzdPy.js", "imports": ["/assets/index-7zqVQZSl.js"], "css": ["/assets/UniversityTable-MeSmwAN3.css"] }, "routes/Actualite": { "id": "routes/Actualite", "parentId": "root", "path": "Actualite", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Actualite-BVj-fC3Z.js", "imports": ["/assets/index-7zqVQZSl.js"], "css": ["/assets/Actualite-ZXzGM7KD.css"] }, "routes/Apprendre": { "id": "routes/Apprendre", "parentId": "root", "path": "Apprendre", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Apprendre-9QUnScN9.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/Hero-BG-ONL33.js", "/assets/UniversityTable-Dd5ZzdPy.js"], "css": ["/assets/Apprendre-CWYniUMq.css", "/assets/Hero-BBsy4Mtl.css", "/assets/UniversityTable-MeSmwAN3.css"] }, "routes/Enseigner": { "id": "routes/Enseigner", "parentId": "root", "path": "Enseigner", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Enseigner-HO4XZ4bN.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/Hero-BG-ONL33.js"], "css": ["/assets/Enseigner-DZu4l4pG.css", "/assets/Hero-BBsy4Mtl.css"] }, "routes/Accueil": { "id": "routes/Accueil", "parentId": "root", "path": "Accueil", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Accueil-DprSEBm8.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/TabImg-BpUhluWH.js", "/assets/Actualite-BVj-fC3Z.js"], "css": ["/assets/Accueil-DTHATmQB.css", "/assets/TabImg-hY5otYpG.css", "/assets/Actualite-ZXzGM7KD.css"] }, "routes/Adherer": { "id": "routes/Adherer", "parentId": "root", "path": "Adherer", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Adherer-Bm8zW_hb.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/Hero-BG-ONL33.js"], "css": ["/assets/Adherer-BzAI7wnX.css", "/assets/Hero-BBsy4Mtl.css"] }, "routes/Landing": { "id": "routes/Landing", "parentId": "root", "path": "Landing", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Landing-_8y682BH.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/components-D6J0LBW7.js", "/assets/TopNavbar-QHNDNYsI.js", "/assets/Accueil-DprSEBm8.js", "/assets/Adherer-Bm8zW_hb.js", "/assets/Apprendre-9QUnScN9.js", "/assets/Divers-DHfByKMh.js", "/assets/Enseigner-HO4XZ4bN.js", "/assets/TabImg-BpUhluWH.js", "/assets/Actualite-BVj-fC3Z.js", "/assets/Hero-BG-ONL33.js", "/assets/UniversityTable-Dd5ZzdPy.js"], "css": ["/assets/Accueil-DTHATmQB.css", "/assets/TabImg-hY5otYpG.css", "/assets/Actualite-ZXzGM7KD.css", "/assets/Adherer-BzAI7wnX.css", "/assets/Hero-BBsy4Mtl.css", "/assets/Apprendre-CWYniUMq.css", "/assets/UniversityTable-MeSmwAN3.css", "/assets/Divers-Deborqjc.css", "/assets/Enseigner-DZu4l4pG.css"] }, "routes/Divers": { "id": "routes/Divers", "parentId": "root", "path": "Divers", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Divers-DHfByKMh.js", "imports": ["/assets/index-7zqVQZSl.js"], "css": ["/assets/Divers-Deborqjc.css"] }, "routes/TabImg": { "id": "routes/TabImg", "parentId": "root", "path": "TabImg", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/TabImg-BpUhluWH.js", "imports": ["/assets/index-7zqVQZSl.js"], "css": ["/assets/TabImg-hY5otYpG.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-DNhUUdqU.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/Accueil-DprSEBm8.js", "/assets/TopNavbar-QHNDNYsI.js", "/assets/TabImg-BpUhluWH.js", "/assets/Actualite-BVj-fC3Z.js"], "css": ["/assets/Accueil-DTHATmQB.css", "/assets/TabImg-hY5otYpG.css", "/assets/Actualite-ZXzGM7KD.css"] }, "routes/Hero": { "id": "routes/Hero", "parentId": "root", "path": "Hero", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Hero-BG-ONL33.js", "imports": ["/assets/index-7zqVQZSl.js"], "css": ["/assets/Hero-BBsy4Mtl.css"] }, "routes/App": { "id": "routes/App", "parentId": "root", "path": "App", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/App-CBOANRrF.js", "imports": ["/assets/index-7zqVQZSl.js", "/assets/Landing-_8y682BH.js", "/assets/components-D6J0LBW7.js", "/assets/TopNavbar-QHNDNYsI.js", "/assets/Accueil-DprSEBm8.js", "/assets/TabImg-BpUhluWH.js", "/assets/Actualite-BVj-fC3Z.js", "/assets/Adherer-Bm8zW_hb.js", "/assets/Hero-BG-ONL33.js", "/assets/Apprendre-9QUnScN9.js", "/assets/UniversityTable-Dd5ZzdPy.js", "/assets/Divers-DHfByKMh.js", "/assets/Enseigner-HO4XZ4bN.js"], "css": ["/assets/Accueil-DTHATmQB.css", "/assets/TabImg-hY5otYpG.css", "/assets/Actualite-ZXzGM7KD.css", "/assets/Adherer-BzAI7wnX.css", "/assets/Hero-BBsy4Mtl.css", "/assets/Apprendre-CWYniUMq.css", "/assets/UniversityTable-MeSmwAN3.css", "/assets/Divers-Deborqjc.css", "/assets/Enseigner-DZu4l4pG.css"] } }, "url": "/assets/manifest-86313fe0.js", "version": "86313fe0" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/UniversityTable": {
    id: "routes/UniversityTable",
    parentId: "root",
    path: "UniversityTable",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/Actualite": {
    id: "routes/Actualite",
    parentId: "root",
    path: "Actualite",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/Apprendre": {
    id: "routes/Apprendre",
    parentId: "root",
    path: "Apprendre",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/Enseigner": {
    id: "routes/Enseigner",
    parentId: "root",
    path: "Enseigner",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/Accueil": {
    id: "routes/Accueil",
    parentId: "root",
    path: "Accueil",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/Adherer": {
    id: "routes/Adherer",
    parentId: "root",
    path: "Adherer",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/Landing": {
    id: "routes/Landing",
    parentId: "root",
    path: "Landing",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/Divers": {
    id: "routes/Divers",
    parentId: "root",
    path: "Divers",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/TabImg": {
    id: "routes/TabImg",
    parentId: "root",
    path: "TabImg",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route10
  },
  "routes/Hero": {
    id: "routes/Hero",
    parentId: "root",
    path: "Hero",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/App": {
    id: "routes/App",
    parentId: "root",
    path: "App",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};

import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
import styled from "@emotion/styled";
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
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
function BlogBox({ tag, title, text, action, author }) {
  return /* @__PURE__ */ jsx(WrapperBtn, { className: "animate pointer", onClick: action ? () => action() : null, children: /* @__PURE__ */ jsxs(Wrapper$2, { className: "whiteBg radius8 shadow", children: [
    /* @__PURE__ */ jsx("h3", { className: "font20 extraBold darkColor", children: title }),
    /* @__PURE__ */ jsx("p", { className: "font13", style: { padding: "30px 0" }, children: text }),
    /* @__PURE__ */ jsx("p", { className: "font13 extraBold", children: author }),
    /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("p", { className: "tag coralBg radius6 font13 extraBold", children: tag }) })
  ] }) });
}
const Wrapper$2 = styled.div`
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
    Wrapper$1,
    {
      className: "animate pointer radius8",
      onClick: action ? () => action() : null,
      border,
      children: title
    }
  );
}
const Wrapper$1 = styled.button`
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
const HeaderImage = "/assets/Header-Activites-DwGlyY33.jpg";
function HeaderActivités() {
  return /* @__PURE__ */ jsxs(HeaderWrapper, { className: "container flexSpaceCenter", children: [
    /* @__PURE__ */ jsx(LeftSide, { className: "flexCenter", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h1", { className: "extraBold font60", children: [
        /* @__PURE__ */ jsx("span", { className: "darkColor", children: "Activités" }),
        " culutrelles"
      ] }),
      /* @__PURE__ */ jsx(HeaderP, { className: "font15", children: "Bienvenue sur notre page activités culturelles. Explorez la richesse culturelle italienne : concerts envoûtants, expositions captivantes, et littérature inspirante !     " }),
      /* @__PURE__ */ jsx(BtnWrapper, { children: /* @__PURE__ */ jsx(FullButton, { title: "Voir Plus" }) })
    ] }) }),
    /* @__PURE__ */ jsx(RightSide, { children: /* @__PURE__ */ jsx(ImageWrapper, { children: /* @__PURE__ */ jsx(Img, { className: "radius8", src: HeaderImage, alt: "office", style: { zIndex: 9 } }) }) })
  ] });
}
function Activités() {
  return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", { className: "whiteBg", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
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
          text: "\n                L’écrivain italien Erri De Luca sera au mk2 Bibliothèque (Paris 13° ) du vendredi 18 au dimanche 20 septembre 2020 pour une série de trois entretiens et la projection d’un film qu’il présentera.[...]",
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
const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
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
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Activités,
  HeaderActivités
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
const heroImage$1 = "/assets/italie_rome-DfKncSmr.jpg";
const logoSorbonneNouvelle = "/assets/logo_UNI_SorbonneNouvelle-DT35wAam.png";
const logoParisSorbonne = "/assets/logo_UNI_ParisSorbonne-DCP_aQzv.png";
const logoIutStDenis = "/assets/logo_IUT_StDenis-DLWuYVZ3.png";
const logoUpec = "/assets/logo_UNI_Upec-DtrI3mca.png";
const logoParis8 = "/assets/logo_UNI_Paris8-DWcs8u0m.png";
const logoNanterre = "/assets/logo_UNI_Nanterre-CIZ0OtZh.png";
const logoStQuentin = "/assets/logo_UNI_StQuentin-hdILqE06.png";
const logoEvry = "/assets/logo_UNI_Evry-pnGONrKu.png";
const Apprendre = () => {
  const title = "Apprendre l'italien";
  const description = "Bienvenue sur notre page apprendre. Découvrez les façons d'apprendre la langue italienne en formation Post-BAC.";
  const buttonText = "Commencer";
  const universitiesDataParis = [
    {
      name: "Université Paris 3 Sorbonne Nouvelle",
      logo: logoSorbonneNouvelle,
      website: "https://www.exemple1.com",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Licence LLCER d'italien" }),
        /* @__PURE__ */ jsx("li", { children: "Licence Sciences du Langage - mineure Langues et civilisations européennes (italien)" }),
        /* @__PURE__ */ jsx("li", { children: "Licence d'anglais - mineure italien" }),
        /* @__PURE__ */ jsx("li", { children: "Master Études Italiennes (recherche)" }),
        /* @__PURE__ */ jsx("li", { children: "Master MEEF parcours italien" }),
        /* @__PURE__ */ jsx("li", { children: "Master pro Échanges culturels France-Italie" }),
        /* @__PURE__ */ jsx("li", { children: "Diplômes d'université : DLCI et DLCR" })
      ] })
    },
    {
      name: "Université Paris IV-Sorbonne",
      logo: logoParisSorbonne,
      website: "https://www.exemple2.com",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Deux parcours de spécialité : Littérature et culture / Langue et Traduction" }),
        /* @__PURE__ */ jsx("li", { children: "Bi-licences : Italien-Histoire, Lettres modernes, Musicologie…" }),
        /* @__PURE__ */ jsx("li", { children: "Master recherche Études italiennes" }),
        /* @__PURE__ */ jsx("li", { children: "Master international en co-diplomation avec La Sapienza (Rome)" })
      ] })
    }
  ];
  const universitiesDataCreteil = [
    {
      name: "I.U.T. de Saint Denis - Campus de La Plaine",
      logo: logoIutStDenis,
      website: "https://www.iutsd.univ-paris13.fr",
      courses: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Cursus Techniques de commercialisation" }) })
    },
    {
      name: "Paris Est Créteil Val de Marne (Paris XII)",
      logo: logoUpec,
      website: "http://www.u-pec.fr/",
      courses: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "LEA : Langues Étrangères Appliquées" }) })
    },
    {
      name: "Université Vincennes-Saint-Denis (Paris VIII)",
      logo: logoParis8,
      website: "https://univ-paris8.fr",
      courses: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "UFR LLCE italien, LEA anglais-italien, allemand-italien, espagnol-italien" }) })
    }
  ];
  const universitiesDataVersailles = [
    {
      name: "Université Paris X Nanterre",
      logo: logoNanterre,
      website: "https://dep-italien.parisnanterre.fr",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "LLCER (Licence langues, littératures et civilisations étrangères)",
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: "Double licence : Études italiennes + Anglo-américaines / Géographie" }),
            /* @__PURE__ */ jsx("li", { children: "Double diplôme franco-italien" }),
            /* @__PURE__ */ jsx("li", { children: "Licence Études Européennes et Internationales" }),
            /* @__PURE__ */ jsx("li", { children: "Master Études Romanes-Italien, Master Parcours International" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("li", { children: "Licence et Master Droit français – Droit italien" }),
        /* @__PURE__ */ jsx("li", { children: "DU Italien : Culture et communication pro" }),
        /* @__PURE__ */ jsx("li", { children: "LEA Anglais-Italien" }),
        /* @__PURE__ */ jsx("li", { children: "Préparation au CELI" }),
        /* @__PURE__ */ jsx("li", { children: "Doctorat en études italiennes" })
      ] })
    },
    {
      name: "Université de Versailles / Saint Quentin",
      logo: logoStQuentin,
      website: "http://www.uvsq.fr/",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Licence Anglais / Droit" }),
        /* @__PURE__ */ jsx("li", { children: "LLCE Anglais / Espagnol" }),
        /* @__PURE__ */ jsx("li", { children: "Lettres modernes, Géographie" })
      ] })
    },
    {
      name: "Université d’Evry Val d’Essonne",
      logo: logoEvry,
      website: "http://www.univ-evry.fr/",
      courses: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "LEA en langue complémentaire (LV3)" }),
        /* @__PURE__ */ jsx("li", { children: "Licence d’Histoire (en LV1 ou complémentaire)" })
      ] })
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "apprendre-container", children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        title,
        description,
        heroImage: heroImage$1,
        buttonText
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "h2-titre", children: "Apprendre l'italien après le BAC" }),
    /* @__PURE__ */ jsx("h3", { className: "h3-Sections", children: "Académie de Paris" }),
    universitiesDataParis.map((university, index) => /* @__PURE__ */ jsx(UniversityTable, { university }, index)),
    /* @__PURE__ */ jsx("h3", { className: "h3-Sections", children: "Académie de Créteil" }),
    universitiesDataCreteil.map((university, index) => /* @__PURE__ */ jsx(UniversityTable, { university }, index)),
    /* @__PURE__ */ jsx("h3", { className: "h3-Sections", children: "Académie de Versailles" }),
    universitiesDataVersailles.map((university, index) => /* @__PURE__ */ jsx(UniversityTable, { university }, index))
  ] });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Apprendre
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
    /* @__PURE__ */ jsx("img", { className: "img", src: "../assets/img/Italie_icon.png", alt: "Icône Italie" }),
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
            image: "../assets/img/DivinaComedia.jpg",
            title: "La Divina Commedia",
            description: "Con tutto si può giocare, anche con Dante Alighieri...",
            url: "https://www.lastampa.it/cultura/2021/01/21/news/la-divina-commedia-diventa-un-gioco-da-tavolo-come-quello-dell-oca-1.39802733"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "actualite-box", children: /* @__PURE__ */ jsx(
          Actualite,
          {
            image: "../assets/img/zerocalcare.jpg",
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
            image: "../assets/img/portata.jpg",
            title: "Une villa romaine révélée à Enna",
            description: "Les fouilles ont mis au jour une autre villa impressionnante...",
            url: "http://www.custonaciweb.it/portata-alla-luce-unaltra-villa-romana-a-enna-si-trova-a-15-km-dalla-villa-del-casale-di-piazza-armerina/"
          }
        ) })
      ] })
    ] })
  ] });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Adherer
}, Symbol.toStringTag, { value: "Module" }));
const paysageItalie = "/assets/paysage_italie-CoEiSM_X.jpg";
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
        src: paysageItalie,
        alt: "Image d'illustration",
        className: "login-image img"
      }
    )
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DiversPage
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client--djdW4a3.js", "imports": ["/assets/index-BJHAE5s4.js", "/assets/components-D1h0ziKk.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-Dyzbt9kq.js", "imports": ["/assets/index-BJHAE5s4.js", "/assets/components-D1h0ziKk.js"], "css": [] }, "routes/Activités": { "id": "routes/Activités", "parentId": "root", "path": "Activités", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Activités-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/Apprendre": { "id": "routes/Apprendre", "parentId": "root", "path": "Apprendre", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Apprendre-CH2rMoDd.js", "imports": ["/assets/index-BJHAE5s4.js", "/assets/Hero-BuidwHQx.js"], "css": ["/assets/Apprendre-DPjF9k_d.css", "/assets/Hero-BBsy4Mtl.css"] }, "routes/Accueil": { "id": "routes/Accueil", "parentId": "root", "path": "Accueil", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Accueil-BIuvKaya.js", "imports": ["/assets/index-BJHAE5s4.js"], "css": ["/assets/Accueil-BxWWT7th.css"] }, "routes/Adherer": { "id": "routes/Adherer", "parentId": "root", "path": "Adherer", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Adherer-BWKbs2MM.js", "imports": ["/assets/index-BJHAE5s4.js", "/assets/Hero-BuidwHQx.js"], "css": ["/assets/Adherer-BzAI7wnX.css", "/assets/Hero-BBsy4Mtl.css"] }, "routes/Divers": { "id": "routes/Divers", "parentId": "root", "path": "Divers", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Divers-CThaN0V3.js", "imports": ["/assets/index-BJHAE5s4.js"], "css": ["/assets/Divers-Deborqjc.css"] } }, "url": "/assets/manifest-545d5272.js", "version": "545d5272" };
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
  "routes/Activités": {
    id: "routes/Activités",
    parentId: "root",
    path: "Activités",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/Apprendre": {
    id: "routes/Apprendre",
    parentId: "root",
    path: "Apprendre",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/Accueil": {
    id: "routes/Accueil",
    parentId: "root",
    path: "Accueil",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/Adherer": {
    id: "routes/Adherer",
    parentId: "root",
    path: "Adherer",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/Divers": {
    id: "routes/Divers",
    parentId: "root",
    path: "Divers",
    index: void 0,
    caseSensitive: void 0,
    module: route5
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

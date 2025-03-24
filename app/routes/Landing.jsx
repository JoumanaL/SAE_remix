import React from "react";
// Header&Footer
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopNavbar from "./Nav/TopNavbar.jsx";
import Footer from "./Sections/Footer.jsx"; 
//Pages
import Accueil from "./Accueil.jsx";
import Adherer from "./Adherer.jsx";
import Apprendre from "./Apprendre.jsx";
import Divers from "./Divers.jsx";
import Enseigner from "./Enseigner.jsx";
import { HeaderActivités, Activités } from "./Sections/Activités.jsx";
import { Assoc, Bulletin, Contact, Elu } from "./Sections/Contact.jsx";
import { HeaderPromouvoir, Promouvoir } from "./Sections/Promouvoir.jsx";
import { HeaderForum, Forum } from "./Sections/Forum.jsx";



export default function Landing() {
  return (
    <>
      <TopNavbar />
      <BrowserRouter>
        <Routes>
        <Route path="/accueil" element={<Accueil />} />
           <Route path="/" element={<Accueil />} /> 
          <Route path="Forum" element={<><HeaderForum /><Forum /></>} />
          <Route path="Activités" element={<><HeaderActivités /><Activités /></>} />
          <Route path="Contact" element={<><Contact /><Assoc /><Elu /><Bulletin /></>}/>
          <Route path="/adherer" element={<Adherer />} />
          <Route path="Promouvoir" element={<><HeaderPromouvoir /><Promouvoir /></>} />
          <Route path="/apprendre" element={<Apprendre />} />
          <Route path="/enseigner" element={<Enseigner />} />
          <Route path="/divers" element={<Divers />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}



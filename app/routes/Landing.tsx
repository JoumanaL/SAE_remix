import React from "react";
// Header&Footer
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopNavbar from "../routes/Nav/TopNavbar.jsx";
import Footer from "../routes/Sections/Footer"; 
//Pages
import Accueil from "../routes/Accueil";
import Adherer from "../routes/Adherer";
import Apprendre from "../routes/Apprendre";
import Divers from "../routes/Divers";
import Enseigner from "../routes/Enseigner";
import { HeaderActivités, Activités } from "../routes/Sections/Activités";
import { Assoc, Bulletin, Contact, Elu } from "../routes/Sections/Contact";
import { HeaderPromouvoir, Promouvoir } from "../routes/Sections/Promouvoir";
import { HeaderForum, Forum } from "../routes/Sections/Forum";



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



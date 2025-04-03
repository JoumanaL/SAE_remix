import React from "react";
import {  Contact, Assoc, Elu, Bulletin } from "../components/Sections/Contact"; // si exporté comme nommé

export default function ContactPage() {
   return (
     <>

       <Contact />
       <Assoc />
       <Elu />
       <Bulletin/>
     </>
   );

}

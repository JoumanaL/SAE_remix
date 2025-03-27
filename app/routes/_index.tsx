import Accueil from './Accueil';
import TopNavbar from './Nav/TopNavbar'; // ou Sidebar, selon ce que tu veux
import React from 'react';

export default function Index() {
  return (
    <>
      <TopNavbar /> {/* Ton header ici */}
      <Accueil />   {/* Ta page d’accueil */}
    </>
  );
}

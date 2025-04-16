// Importation des composants Remix nécessaires au bon fonctionnement de l'application
import {
  Links,               
  Meta,               
  Outlet,            
  Scripts,            
  ScrollRestoration,   
} from "@remix-run/react";

// Importation des composants globaux 
import TopNavbar from "./components/Nav/TopNavbar"; // Barre de navigation principale (header)
import Footer from "./components/Sections/Footer";  // Pied de page (footer)

// Importation du fichier CSS global
import "./styles/index.css";

// Composant racine de l'application Remix
export default function App() {
  return (
    <html lang="fr">
      <head>
        {/* Encodage des caractères et meta responsive */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Insertion des balises <meta> et <link> fournies par Remix */}
        <Meta />
        <Links />
      </head>
      <body>
        {/* Composants présents sur toutes les pages */}
        <TopNavbar />    {/* Affiche la barre de navigation en haut */}
        <Outlet />       {/* Affiche le contenu spécifique à la route en cours */}
        <Footer />       {/* Affiche le pied de page en bas */}

        {/* Gère la position de scroll, et injecte les scripts JS Remix */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

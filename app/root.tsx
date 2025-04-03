import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import TopNavbar from "./components/Nav/TopNavbar";
import Footer from "./components/Sections/Footer"; 
import Header from "./components/Sections/Header"; 



export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <TopNavbar />

        {/* Affiche Header uniquement sur la page accueil */}
        {location.pathname === "/accueil" && <Header />}

        <main>{children}</main>

        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
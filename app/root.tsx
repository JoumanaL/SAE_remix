import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

// Composants globaux
import TopNavbar from "./components/Nav/TopNavbar";
import Footer from "./components/Sections/Footer";

// CSS global
import indexStyles from "./styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: indexStyles },
];

export default function App() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body >
        <TopNavbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

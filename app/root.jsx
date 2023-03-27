import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import rootStyleSheetHref from "~/styles/root.css";

export const meta = () => ({
  charset: "utf-8",
  title: "John O'Hara's Blog",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    // link tags for google fonts 
    {
      rel: "preconnect", 
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
    },
    {
      rel: "stylesheet",
      href: rootStyleSheetHref,
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

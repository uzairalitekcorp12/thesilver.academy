import "./globals.css";

import { Montserrat, Poppins } from "next/font/google";


/* ==========================================================================
   SILVER ACADEMY — ROOT LAYOUT

   The global Silver Academy theme remains centralized in app/globals.css.

   This file only:
   - loads the site fonts,
   - configures global metadata,
   - exposes font CSS variables.
   ========================================================================== */


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});


export const metadata = {
  applicationName: "Silver Academy",

  title: {
    default: "Silver Academy | Learn Today, Lead Tomorrow",
    template: "%s | Silver Academy",
  },

  description:
    "Silver Academy combines academics, skill development and practical business education in one modern learning environment.",

  keywords: [
    "Silver Academy",
    "O Level",
    "IGCSE",
    "A Level",
    "Academics",
    "Skill Development",
    "Business Development",
    "SAT Preparation",
    "Aptitude Test Preparation",
    "Karachi Education",
    "Gulshan-e-Iqbal",
    "Demo Class",
  ],

  icons: {
    icon: [
      {
        url: "/assets/academy/shared/web-logo.png",
        type: "image/png",
      },
    ],

    shortcut:
      "/assets/academy/shared/web-logo.png",

    apple:
      "/assets/academy/shared/web-logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "education",
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} site-body`}
      >
        {children}
      </body>
    </html>
  );
}

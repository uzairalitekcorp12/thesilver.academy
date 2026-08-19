import "./globals.css";

import {
  Montserrat,
  Poppins,
} from "next/font/google";


/* ==========================================================================
   SILVER ACADEMY — ROOT LAYOUT
   ==========================================================================

   RESPONSIBILITIES
   ----------------
   - Load global CSS.
   - Load the website fonts.
   - Define website-wide metadata defaults.
   - Provide the root <html> and <body> elements.

   ROUTING DOES NOT LIVE HERE.
   Pages inside app/<route>/page.jsx are handled by the Next.js App Router.
   ========================================================================== */


const poppins = Poppins({
  subsets: ["latin"],

  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],

  variable:
    "--font-poppins",

  display:
    "swap",
});


const montserrat = Montserrat({
  subsets: ["latin"],

  weight: [
    "600",
    "700",
    "800",
    "900",
  ],

  variable:
    "--font-montserrat",

  display:
    "swap",
});


/* ==========================================================================
   GLOBAL METADATA
   ========================================================================== */

export const metadata = {
  applicationName:
    "Silver Academy",

  title: {
    default:
      "Silver Academy | Learn Today, Lead Tomorrow",

    template:
      "%s | Silver Academy",
  },

  description:
    "Silver Academy combines academics, O/A Level education, skill development, SAT preparation and practical business learning in Karachi.",

  keywords: [
    "Silver Academy",
    "O Level",
    "A Level",
    "IGCSE",
    "GCSE",
    "Academics",
    "Silver Academy Faculty",
    "SAT Preparation",
    "Aptitude Test Preparation",
    "Skill Development",
    "Business Development",
    "Demo Class",
    "Karachi Education",
    "Gulshan-e-Iqbal",
  ],

  icons: {
    icon: [
      {
        url:
          "/assets/academy/shared/web-logo.png",

        type:
          "image/png",
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

  category:
    "education",
};


/* ==========================================================================
   GLOBAL VIEWPORT
   ========================================================================== */

export const viewport = {
  width:
    "device-width",

  initialScale:
    1,

  viewportFit:
    "cover",
};


/* ==========================================================================
   ROOT LAYOUT
   ========================================================================== */

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={[
          poppins.variable,
          montserrat.variable,
          "site-body",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}

import Navbar from "@/app/_shared/Navbar/Navbar";
import Footer from "@/app/_shared/Footer/Footer";
import SiteEffects from "@/app/_shared/SiteEffects/SiteEffects";

import ContactHero from "./components/ContactHero/ContactHero";
import ContactDetails from "./components/ContactDetails/ContactDetails";


/* ==========================================================================
   CONTACT PAGE METADATA

   Do not manually append "| Silver Academy" here.
   The RootLayout title template adds it automatically.
   ========================================================================== */

export const metadata = {
  title: "Contact & Book a Demo",

  description:
    "Contact Silver Academy in Gulshan-e-Iqbal, Karachi and book a demo class for academics, skill development and business development programs.",
};


export default function ContactPage() {
  return (
    <>
      <SiteEffects />

      <Navbar />

      <main className="sa-contact-page">
        <ContactHero />
        <ContactDetails />
      </main>

      <Footer />
    </>
  );
}

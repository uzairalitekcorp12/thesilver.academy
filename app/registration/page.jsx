import Navbar from "@/app/_shared/Navbar/Navbar";
import Footer from "@/app/_shared/Footer/Footer";
import SiteEffects from "@/app/_shared/SiteEffects/SiteEffects";

import RegistrationHero from "./components/RegistrationHero/RegistrationHero";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

export const metadata = {
  title: "Registration Form",

  description:
    "Register for Silver Academy O Level, IGCSE, A Level and skill development programs.",
};

export default function RegistrationPage() {
  return (
    <>
      {/* Required for reveal animations used by shared components */}
      <SiteEffects />

      {/* Shared website navbar */}
      <Navbar />

      <main className="sa-registration-page">
        {/* Registration page introduction */}
        <RegistrationHero />

        {/* Complete registration form */}
        <RegistrationForm />
      </main>

      {/* Shared website footer */}
      <Footer />
    </>
  );
}
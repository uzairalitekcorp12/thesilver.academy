import Navbar from "@/app/_shared/Navbar/Navbar";
import Footer from "@/app/_shared/Footer/Footer";
import SiteEffects from "@/app/_shared/SiteEffects/SiteEffects";

import FacultyHero from "./components/FacultyHero/FacultyHero";
import FacultyDirectory from "./components/FacultyDirectory/FacultyDirectory";


export const metadata = {
  title: "Faculty",
  description:
    "Meet the Silver Academy faculty for O/A Levels, GCSE/IGCSE and SAT preparation, including experienced teachers across science, humanities and commerce.",
};


export default function FacultyPage() {
  return (
    <>
      <SiteEffects />

      <Navbar />

      <main className="sa-faculty-page">
        <FacultyHero />
        <FacultyDirectory />
      </main>

      <Footer />
    </>
  );
}

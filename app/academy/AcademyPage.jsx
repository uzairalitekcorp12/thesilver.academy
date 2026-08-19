import Navbar from "@/app/_shared/Navbar/Navbar";
import Footer from "@/app/_shared/Footer/Footer";
import SiteEffects from "@/app/_shared/SiteEffects/SiteEffects";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Subjects from "./components/Subjects/Subjects";
import SkillCourses from "./components/SkillCourses/SkillCourses";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import AdmissionProcess from "./components/AdmissionProcess/AdmissionProcess";
import CTABanner from "./components/CTABanner/CTABanner";

export default function AcademyPage() {
  return (
    <>
      <SiteEffects />
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Subjects />
        <SkillCourses />
        <WhyChooseUs />
        <AdmissionProcess />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

import {
  Atom,
  DollarSign,
  BookOpen,
  Calculator,
  BarChart3,
  Dna,
  FlaskConical,
  Languages,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { subjects } from "@/app/academy/data/academyData";

const iconMap = {
  math: Calculator,
  computer: Monitor,
  physics: Atom,
  chemistry: FlaskConical,
  biology: Dna,
  economics: BarChart3,
  business: BookOpen,
  accounting: DollarSign,
  english: Languages,
};

export default function Subjects() {
  return (
    <section className="sa-subjects" id="academics">
      <div className="sa-subjects__orb sa-subjects__orb--left" aria-hidden="true" />
      <div className="sa-subjects__orb sa-subjects__orb--right" aria-hidden="true" />

      <div className="site-container">
        <div className="section-head sa-subjects__head" data-reveal="up">
          <p className="section-kicker">Subjects We Teach</p>
          <h2 className="section-title section-title-center">O Level (IGCSE) &amp; A Level</h2>
          <div className="title-underline" />
        </div>

        <div className="sa-subjects__grid">
          {subjects.map((subject, index) => {
            const Icon = iconMap[subject.key];
            return (
              <article
                className="sa-subject"
                key={subject.label}
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 55}ms` }}
              >
                <span className="sa-subject__icon">
                  <Icon size={27} strokeWidth={1.55} />
                </span>
                <span>{subject.label}</span>
              </article>
            );
          })}
        </div>

        <div className="sa-subjects__action" data-reveal="up">
          <a className="dark-outline-button" href="#admission">
            View All Subjects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

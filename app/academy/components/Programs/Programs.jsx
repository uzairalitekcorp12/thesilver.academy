import {
  ArrowRight,
  Briefcase,
  Code2,
  GraduationCap,
} from "lucide-react";
import { programs } from "@/app/academy/data/academyData";

const iconMap = {
  academics: GraduationCap,
  skills: Code2,
  business: Briefcase,
};

export default function Programs() {
  return (
    <section className="sa-programs" id="programs">
      <div className="site-container">
        <div className="section-head" data-reveal="up">
          <p className="section-kicker">Programs at Silver Academy</p>
          <h2 className="section-title section-title-center">A Path for Every Passion</h2>
          <div className="title-underline" />
        </div>

        <div className="sa-programs__grid">
          {programs.map((program, index) => {
            const Icon = iconMap[program.key];

            return (
              <div
                className="sa-program-card__reveal"
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 95}ms` }}
                key={program.title}
              >
                <article className={`sa-program-card sa-program-card--${program.key}`} data-tilt>
                  <span className="sa-program-card__glow" aria-hidden="true" />

                  <div className="sa-program-card__icon">
                    <Icon size={35} strokeWidth={1.65} />
                  </div>

                  <div className="sa-program-card__body">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <a className="text-link" href="#admission">
                      Learn more <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

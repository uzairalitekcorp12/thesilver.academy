import {
  BadgeCheck,
  ClipboardList,
  MapPin,
  PhoneCall,
  Presentation,
} from "lucide-react";
import { admissionSteps } from "@/app/academy/data/academyData";

const iconMap = {
  form: ClipboardList,
  call: PhoneCall,
  visit: MapPin,
  demo: Presentation,
  enroll: BadgeCheck,
};

export default function AdmissionProcess() {
  return (
    <section className="sa-admission" id="admission">
      <div className="site-container">
        <div className="section-head" data-reveal="up">
          <p className="section-kicker">Admission Process</p>
          <h2 className="section-title section-title-center">Simple Steps to Get Started</h2>
          <div className="title-underline" />
        </div>

        <ol className="sa-admission__steps">
          {admissionSteps.map((step, index) => {
            const Icon = iconMap[step.key];
            return (
              <li
                className="sa-admission__step-wrap"
                key={step.label}
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
                <article className={`sa-admission__step ${index % 2 ? "is-accent" : ""}`}>
                  <span className="sa-admission__number">0{index + 1}</span>
                  <div className="sa-admission__icon">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>
                  <p>{step.label}</p>
                </article>

                {index < admissionSteps.length - 1 ? (
                  <span className="sa-admission__connector" aria-hidden="true">
                    <i />
                    <b>→</b>
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

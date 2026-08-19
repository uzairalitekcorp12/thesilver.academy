import {
  ArrowLeft,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function RegistrationHero() {
  return (
    <section className="sa-registration-hero">
      <div
        className="sa-registration-hero__ambient sa-registration-hero__ambient--one"
        aria-hidden="true"
      />
      <div
        className="sa-registration-hero__ambient sa-registration-hero__ambient--two"
        aria-hidden="true"
      />

      <div
        className="sa-registration-hero__ring sa-registration-hero__ring--one"
        aria-hidden="true"
      />
      <div
        className="sa-registration-hero__ring sa-registration-hero__ring--two"
        aria-hidden="true"
      />

      <div
        className="sa-registration-hero__shape sa-registration-hero__shape--purple"
        aria-hidden="true"
      />
      <div
        className="sa-registration-hero__shape sa-registration-hero__shape--dark"
        aria-hidden="true"
      />

      <div
        className="sa-registration-hero__dots"
        aria-hidden="true"
      />

      <span
        className="sa-registration-hero__particle sa-registration-hero__particle--one"
        aria-hidden="true"
      />
      <span
        className="sa-registration-hero__particle sa-registration-hero__particle--two"
        aria-hidden="true"
      />

      <div className="site-container sa-registration-hero__inner">
        <div className="sa-registration-hero__content">
          <a href="/" className="sa-registration-hero__back">
            <ArrowLeft size={15} strokeWidth={2} />
            Back to Silver Academy
          </a>

          <p className="sa-registration-hero__eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            Admissions are open
          </p>

          <h1 className="sa-registration-hero__title">
            Start Your Journey
            <br />
            at <span>Silver Academy</span>
          </h1>

          <p className="sa-registration-hero__copy">
            Complete the registration form and our admissions team will contact
            you regarding your selected program, learning mode and next steps.
          </p>
        </div>

        <div className="sa-registration-hero__badge">
          <span className="sa-registration-hero__badge-icon">
            <GraduationCap size={26} strokeWidth={1.7} />
          </span>

          <span className="sa-registration-hero__badge-copy">
            <small>REGISTRATION</small>
            <strong>Admissions 2027</strong>
            <em>Begin your application</em>
          </span>
        </div>
      </div>
    </section>
  );
}
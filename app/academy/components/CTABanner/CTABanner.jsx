import {
  ArrowRight,
  CalendarDays,
  Send,
  Sparkles,
} from "lucide-react";

import {
  academyRoutes,
} from "@/app/academy/data/academyData";

export default function CTABanner() {
  return (
    <section className="sa-cta-section">
      <div className="site-container">
        <div
          className="sa-cta"
          data-reveal="up"
        >
          <span
            className="sa-cta__orb sa-cta__orb--one"
            aria-hidden="true"
          />

          <span
            className="sa-cta__orb sa-cta__orb--two"
            aria-hidden="true"
          />

          <div className="sa-cta__copy">
            <p>
              <Sparkles
                size={14}
                aria-hidden="true"
              />
              Ready to Unlock Your Potential?
            </p>

            <h2>
              Join Silver Academy Today
            </h2>

            <span>
              Take the first step towards a brighter future.
              Admissions are open!
            </span>
          </div>

          <div className="sa-cta__actions">
            {/*
              Registration is now a dedicated page:
              /registration
            */}
            <a
              className="primary-button"
              href={academyRoutes.registration}
            >
              Register Now
              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </a>

            {/*
              Demo Class still takes the user to the
              admission-process section on the homepage.
            */}
            <a
              className="secondary-button"
              href={academyRoutes.contact}
            >
              Book a Demo Class
              <CalendarDays
                size={17}
                aria-hidden="true"
              />
            </a>
          </div>

          <Send
            className="sa-cta__plane"
            size={68}
            strokeWidth={1.1}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
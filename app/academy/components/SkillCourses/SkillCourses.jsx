import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  academyAssets,
  skillCourses,
} from "@/app/academy/data/academyData";


export default function SkillCourses() {
  return (
    <section
      className="sa-skills"
      id="skills"
      aria-labelledby="skill-courses-title"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
          ===================================================== */}

      <div
        className="sa-skills__decoration sa-skills__decoration--left"
        aria-hidden="true"
      />

      <div
        className="sa-skills__decoration sa-skills__decoration--right"
        aria-hidden="true"
      />


      <div className="site-container sa-skills__container">

        {/* ===================================================
            SECTION HEADING
            =================================================== */}

        <div
          className="section-head sa-skills__heading"
          data-reveal="up"
        >
          <div className="sa-skills__kicker-row">
            <span
              className="sa-skills__kicker-dot"
              aria-hidden="true"
            />

            <p className="section-kicker">
              Our Skill Development Courses
            </p>

            <span
              className="sa-skills__kicker-dot"
              aria-hidden="true"
            />
          </div>


          <h2
            className="section-title section-title-center"
            id="skill-courses-title"
          >
            Learn Skills.{" "}
            <span className="sa-skills__title-accent">
              Earn Opportunities.
            </span>
          </h2>


          <div
            className="title-underline sa-skills__underline"
            aria-hidden="true"
          />


          <p className="sa-skills__intro">
            Build practical digital skills on the platforms
            businesses use every day and prepare yourself for
            real-world opportunities.
          </p>
        </div>


        {/* ===================================================
            COURSE GRID
            =================================================== */}

        <div
          className="sa-skills__grid"
          aria-label="Skill development courses"
        >
          {skillCourses.map((course, index) => {
            const logo =
              academyAssets.skillLogos[
                course.key
              ];

            return (
              <a
                className="sa-skill"
                href="#admission"
                key={course.key}
                data-reveal="up"
                aria-label={`${course.label} course - register now`}
                style={{
                  "--reveal-delay":
                    `${index * 75}ms`,

                  "--skill-index":
                    index,
                }}
              >
                {/* ===========================================
                    CARD GLOW

                    This stays outside the tilt layer so its
                    position remains perfectly stable.
                    =========================================== */}

                <span
                  className="sa-skill__glow"
                  aria-hidden="true"
                />


                {/* ===========================================
                    ISOLATED TILT LAYER

                    JITTER FIX:
                    data-tilt is intentionally placed here
                    instead of on .sa-skill.

                    .sa-skill controls hover elevation.
                    .sa-skill__tilt controls pointer tilt.

                    The visual effects remain the same, but
                    they no longer compete for one transform.
                    =========================================== */}

                <div
                  className="sa-skill__tilt"
                  data-tilt
                >

                  {/* =========================================
                      COURSE LOGO
                      ========================================= */}

                  <div className="sa-skill__visual">

                    <span
                      className="sa-skill__orbit"
                      aria-hidden="true"
                    />

                    <span
                      className="sa-skill__orbit-dot"
                      aria-hidden="true"
                    />


                    <div className="sa-skill__logo">

                      <span
                        className="sa-skill__logo-backdrop"
                        aria-hidden="true"
                      />


                      <img
                        src={logo}
                        alt={`${course.label} logo`}
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                      />


                      <span
                        className="sa-skill__launch"
                        aria-hidden="true"
                      >
                        <ArrowUpRight
                          size={15}
                          strokeWidth={2.3}
                        />
                      </span>

                    </div>

                  </div>


                  {/* =========================================
                      COURSE INFORMATION
                      ========================================= */}

                  <div className="sa-skill__content">

                    <span className="sa-skill__number">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>


                    <h3>
                      {course.label}
                    </h3>


                    <span className="sa-skill__explore">
                      Explore Course

                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.2}
                      />
                    </span>

                  </div>

                </div>

              </a>
            );
          })}
        </div>


        {/* ===================================================
            SECTION CTA
            =================================================== */}

        <div
          className="sa-skills__action"
          data-reveal="up"
        >
          <a
            className="secondary-button sa-skills__all-button"
            href="#admission"
          >
            <span>
              View All Courses
            </span>

            <span
              className="sa-skills__button-icon"
              aria-hidden="true"
            >
              <ArrowRight
                size={17}
                strokeWidth={2.3}
              />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

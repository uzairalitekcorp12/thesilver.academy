"use client";

import Image from "next/image";

import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  GraduationCap,
  Target,
  UsersRound,
} from "lucide-react";

import {
  academyAssets,
  stats,
  whyPoints,
} from "@/app/academy/data/academyData";

import {
  useEffect,
  useRef,
  useState,
} from "react";


/* ================================================================
   KPI ICON CONFIGURATION
   ================================================================ */

const statIcons = {
  students: UsersRound,
  faculty: GraduationCap,
  courses: BookOpenCheck,
  success: Target,
};


/* ================================================================
   FINAL KPI VALUES

   Kept here as a safety layer so these exact numbers are always
   displayed even if older placeholder values still exist inside
   academyData.js.

   Final values:
   - 800+ Students
   - 11 Faculty
   - 20+ Courses
   - 89% Success Rate
   ================================================================ */

const KPI_CONFIG = {
  students: {
    target: 800,
    suffix: "+",
  },

  faculty: {
    target: 11,
    suffix: "+",
  },

  courses: {
    target: 20,
    suffix: "+",
  },

  success: {
    target: 89,
    suffix: "%",
  },
};


/* ================================================================
   ANIMATED KPI COUNTER

   IMPORTANT:
   -----------

   This counter intentionally does NOT simply calculate:

   target * progress

   on every browser frame.

   Instead it updates in randomized timed steps so the visitor
   actually SEES numbers changing.

   Example:

   0
   21
   47
   88
   141
   207
   ...
   800+

   Smaller values such as 11 and 20 move one number at a time,
   making their animation clearly visible.

   The counter:
   - starts at 0
   - never decreases
   - never passes target
   - never reaches target too early
   - finishes EXACTLY at target
   ================================================================ */

function AnimatedCounter({
  target,
  suffix = "",
  start = false,
  delay = 0,
  duration = 2300,
}) {
  const [value, setValue] =
    useState(0);

  const [isCounting, setIsCounting] =
    useState(false);

  const [isComplete, setIsComplete] =
    useState(false);


  useEffect(() => {
    if (!start) {
      return undefined;
    }


    /* ------------------------------------------------------------
       Reduced motion accessibility
       ------------------------------------------------------------ */

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;


    if (reduceMotion) {
      setValue(target);
      setIsCounting(false);
      setIsComplete(true);

      return undefined;
    }


    let startTimer = null;
    let tickTimer = null;
    let cancelled = false;


    /* ------------------------------------------------------------
       Number of visible changes

       Small values:
       Every value is shown.

       Medium values:
       Around 30–36 changes.

       Large values:
       Around 42 changes.
       ------------------------------------------------------------ */

    const totalTicks =
      target <= 25
        ? target
        : target <= 100
          ? 34
          : 42;


    const baseDelay =
      duration /
      Math.max(
        totalTicks,
        1,
      );


    const startAnimation = () => {
      if (cancelled) {
        return;
      }


      let currentValue = 0;
      let currentTick = 0;


      setValue(0);
      setIsCounting(true);
      setIsComplete(false);


      const tick = () => {
        if (cancelled) {
          return;
        }


        currentTick += 1;


        /*
         * Last tick always receives the exact
         * configured target value.
         */

        if (
          currentTick >=
          totalTicks
        ) {
          setValue(target);

          setIsCounting(false);
          setIsComplete(true);

          return;
        }


        const remainingValue =
          target -
          currentValue;


        const remainingTicks =
          totalTicks -
          currentTick;


        /*
         * Small KPI values are shown almost
         * one-by-one so 11 and 20 are clearly
         * animated instead of jumping instantly.
         */

        let increment;


        if (target <= 25) {
          increment = 1;
        } else {
          /*
           * Average amount needed per remaining tick.
           */

          const averageIncrement =
            remainingValue /
            Math.max(
              remainingTicks + 1,
              1,
            );


          /*
           * Random multiplier gives irregular,
           * natural-looking number changes.
           */

          const randomness =
            0.68 +
            Math.random() * 0.62;


          increment =
            Math.max(
              1,
              Math.round(
                averageIncrement *
                randomness,
              ),
            );
        }


        /*
         * Reserve enough numbers for the
         * remaining animation.

         * This prevents reaching target before
         * the final tick.
         */

        const minimumReserved =
          target <= 25
            ? remainingTicks
            : Math.max(
                1,
                remainingTicks,
              );


        const maximumAllowed =
          Math.max(
            currentValue + 1,
            target -
            minimumReserved,
          );


        currentValue =
          Math.min(
            currentValue +
              increment,

            maximumAllowed,

            target - 1,
          );


        setValue(
          currentValue,
        );


        /*
         * Random timing between changes.

         * This creates the "calculating / counting"
         * effect instead of a robotic interval.
         */

        const randomDelay =
          baseDelay *
          (
            0.72 +
            Math.random() *
              0.56
          );


        tickTimer =
          window.setTimeout(
            tick,
            randomDelay,
          );
      };


      tick();
    };


    /*
     * Slight stagger between individual KPIs.
     */

    startTimer =
      window.setTimeout(
        startAnimation,
        delay,
      );


    return () => {
      cancelled = true;

      if (startTimer) {
        window.clearTimeout(
          startTimer,
        );
      }

      if (tickTimer) {
        window.clearTimeout(
          tickTimer,
        );
      }
    };
  }, [
    delay,
    duration,
    start,
    suffix,
    target,
  ]);


  return (
    <strong
      className={[
        "sa-stat__value",

        isCounting
          ? "is-counting"
          : "",

        isComplete
          ? "is-complete"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`${target}${suffix}`}
    >
      <span className="sa-stat__number">
        {value}
      </span>

      {suffix ? (
        <span className="sa-stat__suffix">
          {suffix}
        </span>
      ) : null}
    </strong>
  );
}


/* ================================================================
   WHY CHOOSE US
   ================================================================ */

export default function WhyChooseUs() {
  const sectionRef =
    useRef(null);


  const [startCounters, setStartCounters] =
    useState(false);


  /* ==============================================================
     START KPI COUNTERS WHEN THE SECTION IS ACTUALLY VISIBLE

     Runs only once.
     ============================================================== */

  useEffect(() => {
    const section =
      sectionRef.current;


    if (!section) {
      return undefined;
    }


    /*
     * Browser fallback.
     */

    if (
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      setStartCounters(true);

      return undefined;
    }


    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry =
            entries[0];


          if (
            entry?.isIntersecting
          ) {
            /*
             * Small delay makes the visitor first see
             * the KPI cards at 0 before counting starts.
             */

            window.setTimeout(
              () => {
                setStartCounters(
                  true,
                );
              },
              240,
            );


            /*
             * Animation happens only once.
             */

            observer.disconnect();
          }
        },
        {
          /*
           * Start once approximately 20% of
           * this section enters viewport.
           */

          threshold: 0.2,

          rootMargin:
            "0px 0px -8% 0px",
        },
      );


    observer.observe(
      section,
    );


    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="sa-why"
      id="about"
      aria-labelledby="why-title"
    >
      {/* ===========================================================
          BACKGROUND DECORATIONS
          =========================================================== */}

      <div
        className="sa-why__background-orb sa-why__background-orb--one"
        aria-hidden="true"
      />


      <div
        className="sa-why__background-orb sa-why__background-orb--two"
        aria-hidden="true"
      />


      <div className="site-container sa-why__grid">

        {/* =========================================================
            LEFT CONTENT
            ========================================================= */}

        <div
          className="sa-why__copy"
          data-reveal="left"
        >
          <p className="section-kicker">
            Why Choose Silver Academy?
          </p>


          <h2
            className="section-title sa-why__title"
            id="why-title"
          >
            Where Learning

            <br />

            <span>
              Meets Impact
            </span>
          </h2>


          <div
            className="sa-why__line"
            aria-hidden="true"
          />


          <p className="sa-why__intro">
            We don&apos;t just teach — we
            mentor, guide, and empower every
            learner with practical knowledge
            and confidence to achieve more.
          </p>


          {/* =======================================================
              BENEFITS
              ======================================================= */}

          <ul className="sa-why__list">
            {whyPoints.map(
              (
                point,
                index,
              ) => (
                <li
                  key={point}
                  data-reveal="up"
                  style={{
                    "--reveal-delay":
                      `${index * 70}ms`,
                  }}
                >
                  <span
                    className="sa-why__check"
                    aria-hidden="true"
                  >
                    <Check
                      size={13}
                      strokeWidth={3}
                    />
                  </span>


                  <span>
                    {point}
                  </span>
                </li>
              ),
            )}
          </ul>


          {/* =======================================================
              CTA
              ======================================================= */}

          <a
            className="primary-button sa-why__button"
            href="#programs"
          >
            <span>
              About Us
            </span>


            <ArrowRight
              size={16}
              strokeWidth={2.4}
            />
          </a>
        </div>


        {/* =========================================================
            RIGHT VISUAL
            ========================================================= */}

        <div
          className="sa-why__visual-wrap"
          data-reveal="right"
        >
          {/* =======================================================
              STATIC CLASSROOM IMAGE
              ======================================================= */}

          <div className="sa-why__visual">

            <div className="sa-why__image-frame">

              <Image
                src={
                  academyAssets.classroom
                }
                alt="Students learning together at Silver Academy"
                fill
                quality={90}
                priority={false}
                sizes="
                  (max-width: 520px) 100vw,
                  (max-width: 720px) 100vw,
                  (max-width: 960px) 92vw,
                  (max-width: 1200px) 64vw,
                  760px
                "
                className="sa-why__image"
                style={{
                  objectPosition:
                    academyAssets
                      .classroomPosition ||
                    "50% 50%",
                }}
              />


              {/* IMAGE OVERLAY */}

              <div
                className="sa-why__image-overlay"
                aria-hidden="true"
              />


              {/* IMAGE LABEL */}

              <div className="sa-why__image-label">

                <span className="sa-why__image-label-icon">
                  <BadgeCheck
                    size={16}
                  />
                </span>


                <span>
                  Interactive Learning
                </span>

              </div>

            </div>


            {/* PURPLE ACCENT */}

            <span
              className="sa-why__image-accent"
              aria-hidden="true"
            />


            {/* FLOATING LEARNING BADGE */}

            <div className="sa-why__floating-badge">

              <span className="sa-why__floating-badge-icon">
                <BadgeCheck
                  size={18}
                />
              </span>


              <span>
                Learning that creates

                <strong>
                  {" "}
                  real outcomes
                </strong>
              </span>

            </div>

          </div>


          {/* =======================================================
              KPI PANEL

              Counter always visually begins at:
              0 / 0 / 0 / 0

              Then animates to:
              800+ / 11 / 20+ / 89%
              ======================================================= */}

          <div
            className={[
              "sa-why__stats",

              startCounters
                ? "has-started"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label="Silver Academy statistics"
          >
            {stats.map(
              (
                stat,
                index,
              ) => {
                const Icon =
                  statIcons[
                    stat.key
                  ] ||
                  BadgeCheck;


                /*
                 * These exact KPI values are enforced
                 * even if academyData still temporarily
                 * contains older values.
                 */

                const config =
                  KPI_CONFIG[
                    stat.key
                  ] || {
                    target:
                      Number(
                        stat.value,
                      ) || 0,

                    suffix:
                      stat.suffix ||
                      "",
                  };


                return (
                  <article
                    className="sa-stat"
                    key={
                      stat.key
                    }
                  >
                    {/* KPI ICON */}

                    <span className="sa-stat__icon">
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                      />
                    </span>


                    {/* KPI CONTENT */}

                    <div className="sa-stat__copy">

                      <AnimatedCounter
                        target={
                          config.target
                        }
                        suffix={
                          config.suffix
                        }
                        start={
                          startCounters
                        }

                        /*
                         * Small stagger makes the
                         * counters feel dynamic.
                         */

                        delay={
                          index * 115
                        }

                        /*
                         * Different duration gives each KPI
                         * slightly independent movement.
                         */

                        duration={
                          2150 +
                          index * 130
                        }
                      />


                      <span>
                        {stat.label}
                      </span>

                    </div>

                  </article>
                );
              },
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
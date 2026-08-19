"use client";

import "./ContactHero.css";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";

import { useState } from "react";


/* ==========================================================================
   DEMO FORM OPTIONS
   ========================================================================== */

const programOptions = [
  "O Level / IGCSE",
  "A Level",
  "SAT Preparation",
  "Aptitude Test Preparation",
  "Skill Development",
  "Business Development",
  "Not Sure — Guide Me",
];


const timingOptions = [
  "Weekday — Afternoon",
  "Weekday — Evening",
  "Weekend — Afternoon",
  "Weekend — Evening",
  "Please call me to decide",
];


/* ==========================================================================
   DEMO BENEFITS
   ========================================================================== */

const demoPoints = [
  "Experience our teaching approach before enrollment.",
  "Meet the faculty and discuss your academic or career goals.",
  "Get guidance on the right course, subject or skill pathway.",
];


/* ==========================================================================
   ACADEMIC AFFILIATIONS / TRUSTED PARTNERS

   IMPORTANT
   ---------

   Only TWO logos are used now.

   Logo 1:
   Existing Cambridge placeholder.

   Logo 2:
   Add your PNG here:

   public/assets/academy/contact/academic-affiliation.png

   Then you do NOT need to change this component.
   ========================================================================== */

const affiliationItems = [
  {
    key: "cambridge",

    image:
      "/assets/academy/contact/global.png",

    alt:
      "Gives Badge ",

     label: (
      <>
        Global Immersive Virtual
        <br />
        Education Solution
      </>
    ),
  },

  {
    key: "partner",

    image:
      "/assets/academy/contact/edversity.png",

    alt:
      "Silver Academy academic affiliation",

    label: (
      <>
        Edversity
        <br />
        - Apptitude Test Preparation
      </>
    ),
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function ContactHero() {

  const [
    submitted,
    setSubmitted,
  ] = useState(false);


  /* =========================================================================
     FORM SUBMIT
     ========================================================================= */

  function handleSubmit(event) {

    event.preventDefault();


    /*
     * Front-end confirmation only for now.
     *
     * Later connect this function to:
     *
     * - Next.js route handler
     * - CRM
     * - WhatsApp
     * - email service
     * - database
     */

    setSubmitted(true);

  }


  return (
    <section
      className="sa-contact-hero"
      id="book-demo"
      aria-labelledby="sa-contact-title"
    >

      {/* ====================================================================
          BACKGROUND DECORATION
          ==================================================================== */}

      <div
        className="sa-contact-hero__ambient sa-contact-hero__ambient--one"
        aria-hidden="true"
      />


      <div
        className="sa-contact-hero__ambient sa-contact-hero__ambient--two"
        aria-hidden="true"
      />


      <div
        className="sa-contact-hero__dots"
        aria-hidden="true"
      />


      <div className="site-container sa-contact-hero__grid">

        {/* ==================================================================
            LEFT SIDE
            ================================================================== */}

        <div
          className="sa-contact-hero__copy"
          data-reveal="left"
        >

          {/* ================================================================
              EYEBROW
              ================================================================ */}

          <div className="sa-contact-hero__eyebrow">

            <Sparkles
              size={15}
              strokeWidth={1.9}
            />


            <span>
              Book a Demo Class
            </span>

          </div>


          {/* ================================================================
              MAIN TITLE

              Hover "In Action":
              Purple text -> white
              Gold underline -> complete gold background
              ================================================================ */}

          <h1
            id="sa-contact-title"
            className="sa-contact-hero__title"
          >

            See Silver Academy


            <span className="sa-contact-hero__title-highlight">

              <span>
                In Action
              </span>

            </span>


            Before You Enroll.

          </h1>


          {/* ================================================================
              SUBHEADING
              ================================================================ */}

          <h2 className="sa-contact-hero__subheading">

            The right learning environment can change
            the way a student grows.

          </h2>


          {/* ================================================================
              DESCRIPTION
              ================================================================ */}

          <p className="sa-contact-hero__description">

            Book a demo class, meet our team and experience
            how Silver Academy combines strong academics,
            practical skills and focused mentoring.

            We&apos;ll help you understand the right learning
            path before you make your enrollment decision.

          </p>


          {/* ================================================================
              BENEFITS
              ================================================================ */}

          <ul className="sa-contact-hero__points">

            {demoPoints.map(
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

                  <span className="sa-contact-hero__point-icon">

                    <CheckCircle2
                      size={16}
                      strokeWidth={2.1}
                    />

                  </span>


                  <span>
                    {point}
                  </span>

                </li>

              ),
            )}

          </ul>


          {/* ================================================================
              QUICK CONTACT
              ================================================================ */}

          <div className="sa-contact-hero__quick">

            <a
              href="tel:+923148506250"
              className="sa-contact-hero__quick-item"
            >

              <span className="sa-contact-hero__quick-icon">

                <Phone
                  size={17}
                  strokeWidth={1.8}
                />

              </span>


              <span>

                <small>
                  Call / WhatsApp
                </small>


                <strong>
                  0314 8506250
                </strong>

              </span>

            </a>


            <div className="sa-contact-hero__quick-item">

              <span className="sa-contact-hero__quick-icon">

                <Clock3
                  size={17}
                  strokeWidth={1.8}
                />

              </span>


              <span>

                <small>
                  Open Daily
                </small>


                <strong>
                  12:00 PM — 9:00 PM
                </strong>

              </span>

            </div>

          </div>


          {/* ================================================================
              ACADEMIC AFFILIATIONS
              ================================================================ */}

          <div
            className="sa-contact-hero__trust"
            data-reveal="up"
          >

            {/* --------------------------------------------------------------
                AFFILIATION HEADER
                -------------------------------------------------------------- */}

            <div className="sa-contact-hero__trust-head">

              <span className="sa-contact-hero__trust-head-icon">

                <BadgeCheck
                  size={16}
                  strokeWidth={1.9}
                />

              </span>


              <div>

                <small>
                  Silver Academy Network
                </small>


                <strong>
                  Academic Affiliations &amp; Trusted Partners
                </strong>

              </div>

            </div>


            {/* --------------------------------------------------------------
                TWO LOGOS
                -------------------------------------------------------------- */}

            <div className="sa-contact-hero__trust-grid">

              {affiliationItems.map(
                (
                  item,
                  index,
                ) => (

                  <article
                    className="sa-contact-hero__trust-item"
                    key={item.key}
                    style={{
                      "--affiliation-delay":
                        `${index * 80}ms`,
                    }}
                  >

                    <div className="sa-contact-hero__trust-logo">

                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                      />

                    </div>


                    <span>
                      {item.label}
                    </span>

                  </article>

                ),
              )}

            </div>

          </div>

        </div>


        {/* ==================================================================
            RIGHT SIDE — FORM
            ================================================================== */}

        <div
          className="sa-contact-hero__form-column"
          data-reveal="right"
        >

          <div className="sa-contact-hero__form-card">

            {/* ==============================================================
                FORM HEADING
                ============================================================== */}

            <div className="sa-contact-hero__form-top">

              <div>

                <span className="sa-contact-hero__form-kicker">
                  Demo Class Request
                </span>


                <h2>

                  Let&apos;s Find the Right

                  <br />

                  Learning Path.

                </h2>

              </div>


              <div className="sa-contact-hero__calendar">

                <CalendarDays
                  size={21}
                  strokeWidth={1.7}
                />

              </div>

            </div>


            <p className="sa-contact-hero__form-intro">

              Share a few details and our representative
              will contact you to confirm your demo class.

            </p>


            {/* ==============================================================
                FORM
                ============================================================== */}

            <form
              className="sa-contact-hero__form"
              onSubmit={handleSubmit}
            >

              {/* ------------------------------------------------------------
                  ROW 1
                  ------------------------------------------------------------ */}

              <div className="sa-contact-hero__form-row">

                <label className="sa-contact-field">

                  <span>
                    Full Name
                  </span>


                  <div className="sa-contact-field__control">

                    <UserRound
                      size={16}
                      strokeWidth={1.7}
                    />


                    <input
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />

                  </div>

                </label>


                <label className="sa-contact-field">

                  <span>
                    Phone / WhatsApp
                  </span>


                  <div className="sa-contact-field__control">

                    <Phone
                      size={16}
                      strokeWidth={1.7}
                    />


                    <input
                      name="phone"
                      type="tel"
                      placeholder="03XX XXXXXXX"
                      autoComplete="tel"
                      required
                    />

                  </div>

                </label>

              </div>


              {/* ------------------------------------------------------------
                  ROW 2
                  ------------------------------------------------------------ */}

              <div className="sa-contact-hero__form-row">

                <label className="sa-contact-field">

                  <span>
                    Program of Interest
                  </span>


                  <div className="sa-contact-field__control">

                    <BookOpen
                      size={16}
                      strokeWidth={1.7}
                    />


                    <select
                      name="program"
                      defaultValue=""
                      required
                    >

                      <option
                        value=""
                        disabled
                      >
                        Select program
                      </option>


                      {programOptions.map(
                        (program) => (

                          <option
                            value={program}
                            key={program}
                          >

                            {program}

                          </option>

                        ),
                      )}

                    </select>

                  </div>

                </label>


                <label className="sa-contact-field">

                  <span>
                    Preferred Timing
                  </span>


                  <div className="sa-contact-field__control">

                    <Clock3
                      size={16}
                      strokeWidth={1.7}
                    />


                    <select
                      name="timing"
                      defaultValue=""
                      required
                    >

                      <option
                        value=""
                        disabled
                      >
                        Select timing
                      </option>


                      {timingOptions.map(
                        (timing) => (

                          <option
                            value={timing}
                            key={timing}
                          >

                            {timing}

                          </option>

                        ),
                      )}

                    </select>

                  </div>

                </label>

              </div>


              {/* ------------------------------------------------------------
                  SUBMIT
                  ------------------------------------------------------------ */}

              <button
                className="sa-contact-hero__submit"
                type="submit"
              >

                <span>

                  {submitted
                    ? "Demo Request Received"
                    : "Book My Demo Class"
                  }

                </span>


                {submitted ? (

                  <CheckCircle2
                    size={18}
                    strokeWidth={2}
                  />

                ) : (

                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                  />

                )}

              </button>


              {/* ------------------------------------------------------------
                  SUCCESS
                  ------------------------------------------------------------ */}

              {submitted ? (

                <p
                  className="sa-contact-hero__success"
                  role="status"
                >

                  Thank you. Your demo request has been received.
                  Our representative will contact you to coordinate
                  the session.

                </p>

              ) : null}

            </form>


            {/* ==============================================================
                PRIVACY NOTE
                ============================================================== */}

            <div className="sa-contact-hero__form-note">

              <CheckCircle2
                size={14}
                strokeWidth={1.8}
              />


              <span>
                Your information is only used to coordinate
                your Silver Academy demo.
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
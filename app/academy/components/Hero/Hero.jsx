"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  Presentation,
  UsersRound,
} from "lucide-react";

import {
  heroFeatures,
  heroSlides,
} from "@/app/academy/data/academyData";

const ROTATION_TIME = 2500;

const featureIcons = {
  hybrid: GraduationCap,
  batch: UsersRound,
  faculty: Presentation,
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    if (heroSlides.length <= 1 || isPaused) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, ROTATION_TIME);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="sa-hero" id="home">
      {/* ======================================================
          PAGE BACKGROUND AMBIENCE
      ====================================================== */}

      <div
        className="sa-hero__ambient sa-hero__ambient--one"
        aria-hidden="true"
      />

      <div
        className="sa-hero__ambient sa-hero__ambient--two"
        aria-hidden="true"
      />

      <div
        className="sa-hero__ambient sa-hero__ambient--three"
        aria-hidden="true"
      />

      <div className="site-container sa-hero__grid">
        {/* ======================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="sa-hero__content" data-reveal="left">
          <p className="sa-hero__eyebrow">
            Empowering Futures. Building Excellence.
          </p>

          <h1 className="sa-hero__title">
            <span className="sa-hero__title-line">
              LEARN TODAY,
            </span>

            <span className="sa-hero__title-line">
              LEAD{" "}
              <span className="sa-hero__title-highlight">
                TOMORROW
              </span>
            </span>
          </h1>

          <p className="sa-hero__copy">
            At Silver Academy, we combine rigorous academics,
            in-demand skills, and business expertise to prepare
            students for real-world success. Join a community where
            your potential meets purpose.
          </p>

          <div className="sa-hero__actions">
            <a
              className="primary-button sa-hero__primary"
              href="#programs"
            >
              <span>Explore Programs</span>
              <ArrowRight
                size={17}
                strokeWidth={2.1}
                aria-hidden="true"
              />
            </a>

            <a
              className="secondary-button"
              href="#admission"
            >
              <span>Book a Demo Class</span>
              <CalendarDays
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>

          <div
            className="sa-hero__features"
            aria-label="Silver Academy highlights"
          >
            {heroFeatures.map((feature, index) => {
              const Icon =
                featureIcons[feature.key] ?? GraduationCap;

              return (
                <div
                  className="sa-hero__feature"
                  key={feature.key}
                  data-reveal="up"
                  style={{
                    "--reveal-delay": `${240 + index * 90}ms`,
                  }}
                >
                  <span className="sa-hero__feature-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.65}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="sa-hero__feature-label">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================
            RIGHT FACULTY VISUAL
        ====================================================== */}

        <div
          className="sa-hero__visual"
          id="faculty"
          data-reveal="right"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          {/* Soft large background glow */}

          <div
            className="sa-hero__visual-glow"
            aria-hidden="true"
          />

          {/* Animated orbital lines */}

          <div
            className="sa-hero__ring sa-hero__ring--outer"
            aria-hidden="true"
          >
            <span />
          </div>

          <div
            className="sa-hero__ring sa-hero__ring--inner"
            aria-hidden="true"
          />

          {/* Main animated abstract objects */}

          <div
            className="sa-hero__shape sa-hero__shape--primary"
            aria-hidden="true"
          />

          <div
            className="sa-hero__shape sa-hero__shape--secondary"
            aria-hidden="true"
          />

          <div
            className="sa-hero__shape sa-hero__shape--dark"
            aria-hidden="true"
          />

          <div
            className="sa-hero__shape sa-hero__shape--outline"
            aria-hidden="true"
          />

          {/* Decorative dots */}

          <div
            className="sa-hero__dots"
            aria-hidden="true"
          />

          {/* Floating particles */}

          <span
            className="sa-hero__particle sa-hero__particle--one"
            aria-hidden="true"
          />

          <span
            className="sa-hero__particle sa-hero__particle--two"
            aria-hidden="true"
          />

          <span
            className="sa-hero__particle sa-hero__particle--three"
            aria-hidden="true"
          />

          {/* ==================================================
              PROFESSOR CUTOUT

              IMPORTANT:
              There is intentionally NO:
              - frame
              - border
              - background
              - clipping
              - border-radius

              Use transparent PNG/WebP professor images.
          ================================================== */}

          <div className="sa-hero__portrait-shell">
            <span
              className="sa-hero__portrait-backlight"
              aria-hidden="true"
            />

            {heroSlides.map((slide, index) => (
              <Image
                key={slide.id}
                className={`sa-hero__teacher ${
                  index === activeIndex ? "is-active" : ""
                }`}
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="
                  (max-width: 650px) 82vw,
                  (max-width: 1080px) 430px,
                  470px
                "
                style={{
                  objectPosition:
                    slide.imagePosition ?? "50% 100%",
                }}
              />
            ))}

            <span
              className="sa-hero__portrait-ground-shadow"
              aria-hidden="true"
            />
          </div>

          {/* ==================================================
              PROGRAM CARD
          ================================================== */}

          <div
            className="sa-hero__program-card"
            key={`program-${activeSlide.id}`}
          >
            <div className="sa-hero__program-card-top">
              {activeSlide.badgeImage ? (
                <img
                  src={activeSlide.badgeImage}
                  alt=""
                  aria-hidden="true"
                />
              ) : (
                <span className="sa-hero__program-card-icon">
                  <GraduationCap
                    size={21}
                    strokeWidth={1.8}
                  />
                </span>
              )}

              <small>
                {activeSlide.badgeEyebrow}
              </small>
            </div>

            <strong>
              {activeSlide.program}
            </strong>
          </div>

          {/* ==================================================
              SESSION CARD
          ================================================== */}

          <div
            className="sa-hero__session-card"
            key={`session-${activeSlide.id}`}
          >
            <span className="sa-hero__session-subject">
              {activeSlide.subject} WITH
            </span>

            <strong className="sa-hero__session-teacher">
              {activeSlide.teacher}
            </strong>

            <b className="sa-hero__session-ribbon">
              {activeSlide.ribbon}
            </b>

            <em>
              {activeSlide.session}
            </em>
          </div>

          {/* ==================================================
              SLIDER DOTS
          ================================================== */}

          <div
            className="sa-hero__slider-nav"
            aria-label="Featured faculty"
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={
                  index === activeIndex
                    ? "is-active"
                    : ""
                }
                aria-label={`Show ${slide.teacher}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <span />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import "./FacultyHero.css";

import {
  Award,
  Briefcase,
  Lightbulb,
  Sparkles,
  UserCheck,
} from "lucide-react";


const facultyStrengths = [
  {
    key: "qualified",
    icon: Award,
    number: "01",
    title: "Highly Qualified",
    description:
      "100% of our faculty hold advanced degrees in their fields.",
  },

  {
    key: "experienced",
    icon: Briefcase,
    number: "02",
    title: "Experienced Professionals",
    description:
      "Our faculty members bring real-world experience to the classroom, ensuring students gain practical insights.",
  },

  {
    key: "innovative",
    icon: Lightbulb,
    number: "03",
    title: "Innovative Educators",
    description:
      "Faculty continually update their teaching methods and curriculum to keep pace with industry standards and advancements.",
  },

  {
    key: "mentors",
    icon: UserCheck,
    number: "04",
    title: "Dedicated Mentors",
    description:
      "Faculty are available for one-on-one mentoring, helping students navigate their academic and career paths.",
  },
];


export default function FacultyHero() {
  return (
    <section
      className="sa-faculty-hero"
      id="faculty-overview"
      aria-labelledby="sa-faculty-hero-title"
    >
      <div
        className="sa-faculty-hero__ambient sa-faculty-hero__ambient--one"
        aria-hidden="true"
      />

      <div
        className="sa-faculty-hero__ambient sa-faculty-hero__ambient--two"
        aria-hidden="true"
      />

      <div
        className="sa-faculty-hero__dots"
        aria-hidden="true"
      />

      <div className="site-container">
        <div className="sa-faculty-hero__top">
          <div
            className="sa-faculty-hero__copy"
            data-reveal="left"
          >
            <p className="sa-faculty-hero__eyebrow">
              <Sparkles
                size={15}
                strokeWidth={1.9}
              />

              <span>
                Faculty at Silver Academy
              </span>
            </p>

            <h1
              className="sa-faculty-hero__title"
              id="sa-faculty-hero-title"
            >
              Learn From Educators
              <span>
                Who Make an Impact.
              </span>
            </h1>
          </div>

          <div
            className="sa-faculty-hero__intro"
            data-reveal="right"
          >
            <span className="sa-faculty-hero__intro-line" />

            <p>
              Our faculty brings together academic expertise, classroom
              experience and practical knowledge across O/A Levels,
              skill development and business development courses.
            </p>

            <a href="#faculty-directory">
              Meet the Faculty
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>


        <div className="sa-faculty-hero__strengths">
          {facultyStrengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="sa-faculty-strength"
                key={item.key}
                data-reveal="up"
                style={{
                  "--reveal-delay":
                    `${index * 70}ms`,
                }}
              >
                <div className="sa-faculty-strength__top">
                  <span className="sa-faculty-strength__icon">
                    <Icon
                      size={22}
                      strokeWidth={1.65}
                    />
                  </span>

                  <span className="sa-faculty-strength__number">
                    {item.number}
                  </span>
                </div>

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.description}
                </p>

                <span
                  className="sa-faculty-strength__accent"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

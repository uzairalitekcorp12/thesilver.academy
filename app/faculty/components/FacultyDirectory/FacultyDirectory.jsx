"use client";

import "./FacultyDirectory.css";

import {
  ArrowUpRight,
  BookOpen,
  Calculator,
  FlaskConical,
  GraduationCap,
  Landmark,
  Monitor,
} from "lucide-react";


const facultyGroups = [
  {
    key: "science",
    eyebrow: "O/A-Level (GCSE/IGCSE)",
    title: "Science Faculty",
    description:
      "Subject specialists supporting students across the core science and quantitative disciplines.",
    icon: FlaskConical,
    faculty: [
      {
        id: "kashan-rashid",
        name: "Sir Kashan Rashid",
        subject: "Physics",
        image:
          "/assets/academy/faculty/kashan-rashid.png",
      },
      {
        id: "moosa-khan",
        name: "Sir Moosa Khan",
        subject: "Chemistry",
        image:
          "/assets/academy/faculty/moosa-khan.png",
      },
      {
        id: "haris-jabbar",
        name: "Dr Haris A. Jabbar",
        subject: "Biology",
        image:
          "/assets/academy/faculty/haris-jabbar.png",
      },
      {
        id: "muhammad-wasiq",
        name: "Sir Muhammad Wasiq",
        subject: "Computer Science",
        image:
          "/assets/academy/faculty/m-wasiq.png",
      },
      {
        id: "shaheer-akber",
        name: "Sir Shaheer Akber",
        subject: "Mathematics",
        image:
          "/assets/academy/faculty/shaheer-akber.png",
      },
    ],
  },

  {
    key: "humanities",
    eyebrow: "O/A-Level (GCSE/IGCSE)",
    title: "Humanities Faculty",
    description:
      "Experienced educators helping students build strong analytical, language and contextual understanding.",
    icon: BookOpen,
    faculty: [
      {
        id: "haisam-javed",
        name: "Sir Haisam Javed",
        subject: "Pakistan Studies",
        image:
          "/assets/academy/faculty/haisam-javed.png",
      },
      {
        id: "khurram-ghazali",
        name: "Sir Khurram Ghazali",
        subject: "Islamiyat & Urdu",
        image:
          "/assets/academy/faculty/khurram-ghazali.png",
      },
      {
        id: "kamran-ali",
        name: "Dr. Kamran Ali",
        subject: "English",
        image:
          "/assets/academy/faculty/kamran-ali.png",
      },
    ],
  },

  {
    key: "commerce",
    eyebrow: "O/A-Level (GCSE/IGCSE)",
    title: "Commerce Faculty",
    description:
      "Faculty focused on building strong commercial understanding, applied concepts and exam-ready confidence.",
    icon: Landmark,
    faculty: [
      {
        id: "zeeshan-malik",
        name: "Sir Zeeshan Malik",
        subject: "Accounting",
        image:
          "/assets/academy/faculty/zeeshan-malik.png",
      },
      {
        id: "kabir-rizvi",
        name: "Sir Kabir Rizvi",
        subject: "Economics",
        image:
          "/assets/academy/faculty/kabir-rizvi.png",
      },
      {
        id: "ali-hassan",
        name: "Sir Ali Hassan",
        subject: "Business Studies",
        image:
          "/assets/academy/faculty/ali-hassan.png",
      },
    ],
  },

  {
    key: "sat",
    eyebrow: "SAT Preparation",
    title: "SAT Faculty",
    description:
      "Focused preparation for the English and Mathematics skills required for SAT performance.",
    icon: GraduationCap,
    faculty: [
      {
        id: "shaheer-akber-sat",
        name: "Sir Shaheer Akber",
        subject: "English & Math",
        image:
          "/assets/academy/faculty/shaheer-akber.png",
      },
    ],
  },
];


const sectionLinks = [
  {
    href: "#science-faculty",
    label: "Science",
    icon: FlaskConical,
  },
  {
    href: "#humanities-faculty",
    label: "Humanities",
    icon: BookOpen,
  },
  {
    href: "#commerce-faculty",
    label: "Commerce",
    icon: Landmark,
  },
  {
    href: "#sat-faculty",
    label: "SAT",
    icon: Calculator,
  },
];


function FacultyCard({
  member,
  index,
}) {
  return (
    <article
      className="sa-faculty-card"
      data-reveal="up"
      style={{
        "--reveal-delay":
          `${index * 65}ms`,
      }}
    >
      <div className="sa-faculty-card__visual">
        <div
          className="sa-faculty-card__placeholder"
          aria-hidden="true"
        >
          <span>
            {member.name
              .replace("Dr. ", "")
              .replace("Dr ", "")
              .replace("Sir ", "")
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")}
          </span>

          <small>
            Add Faculty Image
          </small>
        </div>

        <img
          src={member.image}
          alt={`${member.name}, ${member.subject}`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.display =
              "none";
          }}
        />

        <span
          className="sa-faculty-card__visual-gradient"
          aria-hidden="true"
        />

        <span className="sa-faculty-card__subject">
          {member.subject}
        </span>
      </div>

      <div className="sa-faculty-card__body">
        <div>
          <span className="sa-faculty-card__role">
            Faculty Member
          </span>

          <h3>
            {member.name}
          </h3>
        </div>

        <span
          className="sa-faculty-card__arrow"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={17}
            strokeWidth={1.8}
          />
        </span>
      </div>
    </article>
  );
}


export default function FacultyDirectory() {
  return (
    <section
      className="sa-faculty-directory"
      id="faculty-directory"
      aria-labelledby="sa-faculty-directory-title"
    >
      <div className="site-container">
        {/* ==================================================================
            DIRECTORY HEADER
            ================================================================== */}

        <header
          className="sa-faculty-directory__head"
          data-reveal="up"
        >
          <div>
            <p className="section-kicker">
              Meet Our Educators
            </p>

            <h2
              className="section-title"
              id="sa-faculty-directory-title"
            >
              Faculty Across
              <br />
              Every Core Discipline.
            </h2>
          </div>

          <p>
            Explore Silver Academy&apos;s O/A-Level and SAT faculty by
            subject area. Faculty images can be added directly to the
            provided asset paths without changing the component structure.
          </p>
        </header>


        {/* ==================================================================
            QUICK NAVIGATION
            ================================================================== */}

        <nav
          className="sa-faculty-directory__nav"
          aria-label="Faculty categories"
          data-reveal="up"
        >
          {sectionLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href={item.href}
                key={item.href}
              >
                <Icon
                  size={15}
                  strokeWidth={1.8}
                />

                <span>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>


        {/* ==================================================================
            FACULTY GROUPS
            ================================================================== */}

        <div className="sa-faculty-directory__groups">
          {facultyGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <section
                className="sa-faculty-group"
                id={`${group.key}-faculty`}
                key={group.key}
              >
                <header
                  className="sa-faculty-group__head"
                  data-reveal="up"
                >
                  <div className="sa-faculty-group__title-wrap">
                    <span className="sa-faculty-group__icon">
                      <GroupIcon
                        size={22}
                        strokeWidth={1.65}
                      />
                    </span>

                    <div>
                      <span className="sa-faculty-group__eyebrow">
                        {group.eyebrow}
                      </span>

                      <h2>
                        {group.title}
                      </h2>
                    </div>
                  </div>

                  <p>
                    {group.description}
                  </p>
                </header>

                <div
                  className={[
                    "sa-faculty-group__grid",
                    group.faculty.length === 1
                      ? "sa-faculty-group__grid--single"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {group.faculty.map((member, index) => (
                    <FacultyCard
                      member={member}
                      index={index}
                      key={member.id}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>


        {/* ==================================================================
            FINAL NOTE
            ================================================================== */}

        <div
          className="sa-faculty-directory__note"
          data-reveal="up"
        >
          <span className="sa-faculty-directory__note-icon">
            <Monitor
              size={21}
              strokeWidth={1.7}
            />
          </span>

          <div>
            <span>
              More Faculty Profiles
            </span>

            <strong>
              Skill Development &amp; Business Development
            </strong>

            <p>
              Additional faculty profiles for skill development and business
              development courses can be added here once their details are
              available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

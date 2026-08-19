"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  GraduationCap,
  Laptop,
  MapPin,
  Megaphone,
  Save,
  Send,
  UserRound,
  UsersRound,
} from "lucide-react";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const learningModes = [
  {
    value: "online",
    label: "Online",
    description: "Attend live classes remotely from anywhere.",
    icon: Laptop,
  },
  {
    value: "on-campus",
    label: "On Campus",
    description: "Attend classes physically at Silver Academy.",
    icon: GraduationCap,
  },
];

const examinationSessions = [
  { value: "may-june-2027", label: "May / June 2027" },
];

const programs = [
  {
    value: "o-level-igcse",
    label: "O Level / IGCSE",
    description: "Cambridge O Level and IGCSE academic preparation.",
  },
  {
    value: "as-level",
    label: "AS Level",
    description: "Focused Cambridge International AS Level preparation.",
  },
  {
    value: "a2-level",
    label: "A2 Level",
    description: "Advanced A2 Level preparation with subject support.",
  },
  {
    value: "accelerated-a-levels",
    label: "Accelerated A Levels (AS & A2)",
    description: "A combined and accelerated AS + A2 learning pathway.",
  },
  {
    value: "skill-development",
    label: "Skill Development Courses",
    description: "Practical digital and career-focused skill development.",
  },
];

const referralSources = [
  { value: "friends", label: "Friends" },
  { value: "facebook-instagram", label: "Facebook or Instagram" },
  { value: "google-website", label: "Google or Website" },
  { value: "other", label: "Other" },
];

const countries = [
  "Pakistan",
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, Democratic Republic of the",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "North Korea",
  "South Korea",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Türkiye",
  "US Minor Outlying Islands",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];

export default function RegistrationForm() {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [referralSource, setReferralSource] = useState("");

  const requiresExamSession = useMemo(
    () =>
      [
        "o-level-igcse",
        "as-level",
        "a2-level",
        "accelerated-a-levels",
      ].includes(selectedProgram),
    [selectedProgram]
  );

  function handleSubmit(event) {
    event.preventDefault();

    const payload = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );

    // Connect API/database/email submission here later.
    console.log("Silver Academy registration:", payload);
  }

  function handleSaveDraft() {
    // Connect localStorage/API draft saving later.
    console.log("Save and continue later");
  }

  return (
    <section className="sa-registration-form-section">
      <div className="site-container sa-registration-form-section__layout">
        <aside className="sa-registration-form-section__sidebar">
          <div className="sa-registration-form-section__sidebar-card">
            <p className="sa-registration-form-section__sidebar-kicker">
              REGISTRATION
            </p>

            <h2>Your future starts here.</h2>

            <p className="sa-registration-form-section__sidebar-copy">
              Complete the sections below. Required fields are marked with an
              asterisk.
            </p>

            <div className="sa-registration-form-section__steps">
              <SidebarStep
                number="01"
                title="Student Details"
                description="Personal and academic information"
                active
              />
              <SidebarStep
                number="02"
                title="Guardian Details"
                description="Parent or guardian information"
              />
              <SidebarStep
                number="03"
                title="Learning & Program"
                description="Mode, session and selected program"
              />
              <SidebarStep
                number="04"
                title="Submit"
                description="Review and send your application"
              />
            </div>
          </div>

          <div className="sa-registration-form-section__help">
            <span>
              <UsersRound size={20} strokeWidth={1.8} />
            </span>

            <div>
              <strong>Need help applying?</strong>
              <p>
                Our admissions team can guide you through the registration
                process.
              </p>

              <a href="/#contact">
                Contact Admissions
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </aside>

        <form
          className="sa-registration-form"
          onSubmit={handleSubmit}
        >
          <FormSection
            number="01"
            icon={UserRound}
            eyebrow="Personal Information"
            title="Student Details"
            description="Enter the student's personal and academic information."
          >
            <div className="sa-reg-grid">
              <FormField label="Name" required>
                <input
                  type="text"
                  name="studentName"
                  placeholder="Enter full name"
                  autoComplete="name"
                  required
                />
              </FormField>

              <FormField label="Gender" required>
                <select name="gender" defaultValue="" required>
                  <option value="" disabled>
                    Select gender
                  </option>

                  {genderOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Date of Birth" required>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                />
              </FormField>

              <FormField label="Contact Number" required>
                <input
                  type="tel"
                  name="studentContact"
                  placeholder="+92 3XX XXXXXXX"
                  autoComplete="tel"
                  required
                />
              </FormField>

              <FormField
                label="Email Address"
                required
              >
                <input
                  type="email"
                  name="email"
                  placeholder="student@example.com"
                  autoComplete="email"
                  required
                />
              </FormField>

              <FormField
                label="Current School / College Name"
                required
              >
                <input
                  type="text"
                  name="schoolCollege"
                  placeholder="Enter school or college name"
                  required
                />
              </FormField>

              <FormField
                className="sa-reg-field--full"
                label="Private Candidate / Institute Name if any"
              >
                <input
                  type="text"
                  name="instituteName"
                  placeholder="Enter institute name if applicable"
                />
              </FormField>

              <FormField
                className="sa-reg-field--full"
                label="Academic Qualification"
                required
              >
                <input
                  type="text"
                  name="academicQualification"
                  placeholder="e.g. Grade 10, O Level, AS Level"
                  required
                />
              </FormField>
            </div>

            <div className="sa-reg-subsection">
              <div className="sa-reg-subsection__heading">
                <MapPin size={18} strokeWidth={1.8} />
                Residential Address
              </div>

              <div className="sa-reg-grid">
                <FormField
                  className="sa-reg-field--full"
                  label="Street Address"
                  required
                >
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="House / Flat / Street"
                    autoComplete="street-address"
                    required
                  />
                </FormField>

                <FormField label="City" required>
                  <input
                    type="text"
                    name="city"
                    placeholder="Karachi"
                    autoComplete="address-level2"
                    required
                  />
                </FormField>

                <FormField label="Country" required>
                  <select
                    name="country"
                    defaultValue="Pakistan"
                    required
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>
            </div>
          </FormSection>

          <FormSection
            number="02"
            icon={UsersRound}
            eyebrow="Parent / Guardian"
            title="Father / Guardian Details"
            description="Provide the primary guardian's information."
          >
            <div className="sa-reg-grid">
              <FormField label="Father / Guardian Name" required>
                <input
                  type="text"
                  name="guardianName"
                  placeholder="Enter full name"
                  required
                />
              </FormField>

              <FormField label="Occupation" required>
                <input
                  type="text"
                  name="guardianOccupation"
                  placeholder="Enter occupation"
                  required
                />
              </FormField>

              <FormField
                className="sa-reg-field--full"
                label="Contact Number"
                required
              >
                <input
                  type="tel"
                  name="guardianContact"
                  placeholder="+92 3XX XXXXXXX"
                  required
                />
              </FormField>
            </div>
          </FormSection>

          <FormSection
            number="03"
            icon={Laptop}
            eyebrow="Learning Preference"
            title="Mode of Learning"
            description="Choose how you would prefer to attend classes."
          >
            <div className="sa-reg-choice-grid">
              {learningModes.map((mode) => {
                const Icon = mode.icon;

                return (
                  <label
                    className="sa-reg-choice-card"
                    key={mode.value}
                  >
                    <input
                      type="radio"
                      name="learningMode"
                      value={mode.value}
                      required
                    />

                    <span className="sa-reg-choice-card__check">
                      <Check size={13} strokeWidth={2.5} />
                    </span>

                    <span className="sa-reg-choice-card__icon">
                      <Icon size={24} strokeWidth={1.7} />
                    </span>

                    <span className="sa-reg-choice-card__copy">
                      <strong>{mode.label}</strong>
                      <small>{mode.description}</small>
                    </span>
                  </label>
                );
              })}
            </div>
          </FormSection>

          <FormSection
            number="04"
            icon={BookOpen}
            eyebrow="Academic Pathway"
            title="Program"
            description="Choose the program you wish to apply for."
          >
            <div className="sa-reg-programs">
              {programs.map((program) => (
                <label
                  className="sa-reg-program"
                  key={program.value}
                >
                  <input
                    type="radio"
                    name="program"
                    value={program.value}
                    checked={selectedProgram === program.value}
                    onChange={(event) =>
                      setSelectedProgram(event.target.value)
                    }
                    required
                  />

                  <span className="sa-reg-program__radio">
                    <span />
                  </span>

                  <span className="sa-reg-program__copy">
                    <strong>{program.label}</strong>
                    <small>{program.description}</small>
                  </span>

                  <ArrowRight
                    className="sa-reg-program__arrow"
                    size={16}
                    strokeWidth={1.8}
                  />
                </label>
              ))}
            </div>

            {requiresExamSession && (
              <div className="sa-reg-exam-session">
                <div className="sa-reg-exam-session__heading">
                  <span>
                    <CalendarDays size={19} strokeWidth={1.8} />
                  </span>

                  <div>
                    <strong>Session of Examination</strong>
                    <small>
                      Valid for students enrolling in O Level, AS or A2 Level
                      programs.
                    </small>
                  </div>
                </div>

                <FormField label="Choose one option">
                  <select
                    name="examinationSession"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select examination session
                    </option>

                    {examinationSessions.map((session) => (
                      <option
                        key={session.value}
                        value={session.value}
                      >
                        {session.label}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>
            )}
          </FormSection>

          <FormSection
            number="05"
            icon={Megaphone}
            eyebrow="Final Question"
            title="Where Did You Learn About Silver Academy?"
            description="Choose the option that best describes how you found us."
          >
            <div className="sa-reg-referrals">
              {referralSources.map((source) => (
                <label
                  className="sa-reg-referral"
                  key={source.value}
                >
                  <input
                    type="radio"
                    name="referralSource"
                    value={source.value}
                    checked={referralSource === source.value}
                    onChange={(event) =>
                      setReferralSource(event.target.value)
                    }
                    required
                  />

                  <span />
                  {source.label}
                </label>
              ))}
            </div>

            {referralSource === "other" && (
              <div className="sa-reg-other">
                <FormField label="Please specify">
                  <input
                    type="text"
                    name="referralOther"
                    placeholder="Tell us how you heard about Silver Academy"
                  />
                </FormField>
              </div>
            )}
          </FormSection>

          <div className="sa-registration-form__submit">
            <div className="sa-registration-form__submit-copy">
              <span>
                <GraduationCap size={23} strokeWidth={1.7} />
              </span>

              <div>
                <strong>Ready to begin?</strong>
                <p>
                  Review your information before submitting the application.
                </p>
              </div>
            </div>

            <div className="sa-registration-form__submit-actions">
              <button
                type="button"
                className="sa-registration-form__save"
                onClick={handleSaveDraft}
              >
                <Save size={16} strokeWidth={1.8} />
                Save & Continue Later
              </button>

              <button
                type="submit"
                className="primary-button sa-registration-form__submit-button"
              >
                Submit Registration
                <Send size={16} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function SidebarStep({
  number,
  title,
  description,
  active = false,
}) {
  return (
    <div
      className={`sa-registration-form-section__step ${
        active ? "is-active" : ""
      }`}
    >
      <span>{number}</span>

      <div>
        <strong>{title}</strong>
        <small>{description}</small>
      </div>
    </div>
  );
}

function FormSection({
  number,
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="sa-reg-section">
      <div className="sa-reg-section__head">
        <span className="sa-reg-section__icon">
          <Icon size={21} strokeWidth={1.8} />
        </span>

        <div>
          <p className="sa-reg-section__eyebrow">
            <span>{number}</span>
            {eyebrow}
          </p>

          <h2>{title}</h2>
          <p className="sa-reg-section__description">
            {description}
          </p>
        </div>
      </div>

      <div className="sa-reg-section__body">
        {children}
      </div>
    </section>
  );
}

function FormField({
  label,
  required = false,
  className = "",
  children,
}) {
  return (
    <label className={`sa-reg-field ${className}`}>
      <span className="sa-reg-field__label">
        {label}
        {required && <b aria-hidden="true">*</b>}
      </span>

      {children}
    </label>
  );
}
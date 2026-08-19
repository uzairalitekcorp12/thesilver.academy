import {
  AtSign,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  academyAssets,
  footerPrograms,
} from "@/app/academy/data/academyData";


/* ==========================================================================
   EXTERNAL LINKS
   ========================================================================== */

/*
 * Silver Academy Google Maps location.
 *
 * Keeping this here makes it very easy to replace later
 * without touching the JSX.
 */

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Silver+Academy/@24.9172418,67.0922121,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33f72d7f2f657:0x1052ac852228bfba!8m2!3d24.9172418!4d67.0922121!16s%2Fg%2F11vd8w5lqj?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D";


const INSTAGRAM_URL =
  "https://www.instagram.com/silveracademypk/";


/* ==========================================================================
   SOCIAL LINKS
   ========================================================================== */

const socials = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/silveracademypk/",
  },

  {
    key: "instagram",
    label: "Instagram",
    href: INSTAGRAM_URL,
  },

  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@silveracademypk",
  },

  {
    key: "whatsapp",
    label: "WhatsApp",
    href:
      "https://wa.me/923452494359?text=Hello%20Silver%20Academy!%20I%27m%20interested%20in%20learning%20more%20about%20your%20programs.%20Could%20you%20please%20share%20the%20details%3F",
  },
];


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function Footer() {
  return (
    <footer
      className="sa-footer"
      id="footer"
    >
      <div className="site-container sa-footer__grid">

        {/* ==================================================================
            BRAND
            ================================================================== */}

        <div
          className="sa-footer__brand-block"
          data-reveal="up"
        >

          <a
            className="sa-footer__brand"
            href="/"
            aria-label="Silver Academy home"
          >
            <img
              className="sa-footer__logo"
              src={academyAssets.logo}
              alt="Silver Academy"
            />
          </a>


          <p>
            Silver Academy is committed to academic excellence,
            skill development, and business growth through
            quality education and practical learning.
          </p>


          {/* ================================================================
              SOCIAL MEDIA
              ================================================================ */}

          <div
            className="sa-footer__socials"
            aria-label="Silver Academy social media links"
          >
            {socials.map((social) => (
              <a
                href={social.href}
                aria-label={`Visit Silver Academy on ${social.label}`}
                key={social.key}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    academyAssets
                      .socialLogos[
                        social.key
                      ]
                  }
                  alt=""
                  width="16"
                  height="16"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

        </div>


        {/* ==================================================================
            QUICK LINKS
            ================================================================== */}

        <div
          className="sa-footer__column"
          data-reveal="up"
          style={{
            "--reveal-delay":
              "70ms",
          }}
        >

          <h3>
            Quick Links
          </h3>


          <ul>

            <li>
              <a href="/#about">
                About Us
              </a>
            </li>


            <li>
              <a href="/#programs">
                Programs
              </a>
            </li>


            <li>
              <a href="/faculty">
                Faculty
              </a>
            </li>


            <li>
              <a href="/contact">
                Contact Us
              </a>
            </li>


            <li>
              <a href="/registration">
                Registration Form
              </a>
            </li>

          </ul>

        </div>


        {/* ==================================================================
            PROGRAMS
            ================================================================== */}

        <div
          className="sa-footer__column"
          data-reveal="up"
          style={{
            "--reveal-delay":
              "140ms",
          }}
        >

          <h3>
            Programs
          </h3>


          <ul>

            {footerPrograms.map(
              (item) => (

                <li key={item}>
                  <a href="/#programs">
                    {item}
                  </a>
                </li>

              ),
            )}

          </ul>

        </div>


        {/* ==================================================================
            CONTACT
            ================================================================== */}

        <div
          className="sa-footer__column sa-footer__contact-column"
          data-reveal="up"
          style={{
            "--reveal-delay":
              "210ms",
          }}
        >

          <h3>
            Contact Us
          </h3>


          <ul className="sa-footer__contact">

            {/* ==============================================================
                GOOGLE MAPS
                ============================================================== */}

            <li>

              <a
                className="sa-footer__contact-link"
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Silver Academy location in Google Maps"
              >

                <span className="sa-footer__contact-icon">
                  <MapPin
                    size={18}
                    strokeWidth={1.8}
                  />
                </span>


                <span className="sa-footer__contact-copy">

                  <small>
                    Campus
                  </small>


                  <strong>
                    A-480, Block-5,
                    Gulshan-e-Iqbal,
                    Karachi, Pakistan
                  </strong>

                </span>

              </a>

            </li>


            {/* ==============================================================
                PHONE
                ============================================================== */}

            <li>

              <a
                className="sa-footer__contact-link"
                href="tel:+923148506250"
                aria-label="Call Silver Academy"
              >

                <span className="sa-footer__contact-icon">
                  <Phone
                    size={18}
                    strokeWidth={1.8}
                  />
                </span>


                <span className="sa-footer__contact-copy">

                  <small>
                    Call Us
                  </small>


                  <strong>
                    0314 8506250
                  </strong>

                </span>

              </a>

            </li>


            {/* ==============================================================
                EMAIL
                ============================================================== */}

            <li>

              <a
                className="sa-footer__contact-link"
                href="mailto:silveracademypk@gmail.com"
                aria-label="Email Silver Academy"
              >

                <span className="sa-footer__contact-icon">
                  <Mail
                    size={18}
                    strokeWidth={1.8}
                  />
                </span>


                <span className="sa-footer__contact-copy">

                  <small>
                    Email
                  </small>


                  <strong>
                    silveracademypk@gmail.com
                  </strong>

                </span>

              </a>

            </li>


            {/* ==============================================================
                INSTAGRAM
                ============================================================== */}

            <li>

              <a
                className="sa-footer__contact-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Silver Academy on Instagram"
              >

                <span className="sa-footer__contact-icon">
                  <AtSign
                    size={18}
                    strokeWidth={1.8}
                  />
                </span>


                <span className="sa-footer__contact-copy">

                  <small>
                    Instagram
                  </small>


                  <strong>
                    @silveracademypk
                  </strong>

                </span>

              </a>

            </li>

          </ul>

        </div>

      </div>


      {/* ====================================================================
          FOOTER BOTTOM
          ==================================================================== */}

      <div className="sa-footer__bottom">

        <div className="site-container sa-footer__bottom-inner">

          <span>
            © 2026 Silver Academy.
            All Rights Reserved.
          </span>


          <span>
            Built for a modern learning experience.
          </span>

        </div>

      </div>

    </footer>
  );
}
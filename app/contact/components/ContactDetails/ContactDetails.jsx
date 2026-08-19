"use client";

import "./ContactDetails.css";

import {
  ArrowUpRight,
  Clock3,
  Copy,
  Mail,
  MapPin,
  Navigation,
  Phone,
  QrCode,
} from "lucide-react";

import { useState } from "react";


const contactItems = [
  {
    key: "address",
    icon: MapPin,
    kicker: "Visit Us",
    title: "Silver Academy Campus",
    value: "A-480, Block-5, Gulshan-e-Iqbal, Karachi, Pakistan",
    href: "#campus-qr",
  },
  {
    key: "mobile-one",
    icon: Phone,
    kicker: "Call / WhatsApp",
    title: "Primary Contact",
    value: "0314 8506250",
    href: "tel:+923148506250",
  },
  {
    key: "mobile-two",
    icon: Phone,
    kicker: "Call / WhatsApp",
    title: "Alternate Contact",
    value: "0341 2239265",
    href: "tel:+923412239265",
  },
  {
    key: "email",
    icon: Mail,
    kicker: "Email",
    title: "Write to Us",
    value: "silveracademypk@gmail.com",
    href: "mailto:silveracademypk@gmail.com",
  },
];


export default function ContactDetails() {
  const [copied, setCopied] = useState(false);
  const [qrMissing, setQrMissing] = useState(false);

  async function copyAddress() {
    const address =
      "A-480, Block-5, Gulshan-e-Iqbal, Karachi, Pakistan";

    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      className="sa-contact-details"
      id="contact-information"
      aria-labelledby="sa-contact-details-title"
    >
      <div className="site-container">
        {/* ==================================================================
            SECTION HEADER
            ================================================================== */}

        <header className="sa-contact-details__head" data-reveal="up">
          <div>
            <p className="section-kicker">
              General Contact Information
            </p>

            <h2
              className="section-title"
              id="sa-contact-details-title"
            >
              Visit, Call or
              <br />
              Find Us Easily.
            </h2>
          </div>

          <p>
            Whether you&apos;re planning a demo class, discussing admissions
            or simply want to visit the campus, our team is available every
            day to guide you.
          </p>
        </header>


        {/* ==================================================================
            MAIN CONTACT / MAP GRID
            ================================================================== */}

        <div className="sa-contact-details__layout">
          {/* ================================================================
              CONTACT INFORMATION
              ================================================================ */}

          <div className="sa-contact-details__left">
            <div className="sa-contact-details__cards">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    className="sa-contact-info-card"
                    href={item.href}
                    key={item.key}
                    data-reveal="up"
                    style={{
                      "--reveal-delay": `${index * 65}ms`,
                    }}
                  >
                    <span className="sa-contact-info-card__icon">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>

                    <span className="sa-contact-info-card__content">
                      <small>{item.kicker}</small>
                      <strong>{item.title}</strong>
                      <span>{item.value}</span>
                    </span>

                    <span className="sa-contact-info-card__arrow">
                      <ArrowUpRight size={16} strokeWidth={1.8} />
                    </span>
                  </a>
                );
              })}
            </div>


            {/* ==============================================================
                HOURS
                ============================================================== */}

            <div className="sa-contact-hours" data-reveal="up">
              <div className="sa-contact-hours__icon">
                <Clock3 size={22} strokeWidth={1.7} />
              </div>

              <div className="sa-contact-hours__copy">
                <span>Hours of Operation</span>

                <strong>
                  Monday to Sunday
                </strong>

                <p>
                  12:00 PM to 9:00 PM
                </p>
              </div>

              <span className="sa-contact-hours__status">
                <i aria-hidden="true" />
                Open Daily
              </span>
            </div>
          </div>


          {/* ================================================================
              QR / MAP CARD
              ================================================================ */}

          <aside
            className="sa-contact-map"
            id="campus-qr"
            data-reveal="right"
          >
            <div className="sa-contact-map__top">
              <div className="sa-contact-map__heading">
                <span className="sa-contact-map__icon">
                  <Navigation size={21} strokeWidth={1.7} />
                </span>

                <div>
                  <small>Campus Location</small>

                  <h3>
                    Scan to Find
                    <br />
                    Silver Academy
                  </h3>
                </div>
              </div>

              <span className="sa-contact-map__number">
                01
              </span>
            </div>


            {/* ==============================================================
                QR IMAGE

                Place your final image here:

                public/assets/academy/contact/campus-map-qr.png

                No JSX change will be required.
                ============================================================== */}

            <div className="sa-contact-map__qr-wrap">
              <div className="sa-contact-map__qr">
                {!qrMissing ? (
                  <img
                    src="/assets/academy/contact/silver_academy_qr_w.png"
                    alt="QR code for Silver Academy campus location"
                    loading="lazy"
                    onError={() => setQrMissing(true)}
                  />
                ) : (
                  <div className="sa-contact-map__placeholder">
                    <QrCode size={86} strokeWidth={1.2} />

                    <span>
                      Add campus-map-qr.png
                    </span>
                  </div>
                )}

                <span className="sa-contact-map__corner sa-contact-map__corner--tl" />
                <span className="sa-contact-map__corner sa-contact-map__corner--tr" />
                <span className="sa-contact-map__corner sa-contact-map__corner--bl" />
                <span className="sa-contact-map__corner sa-contact-map__corner--br" />
              </div>
            </div>


            <p className="sa-contact-map__instruction">
              Scan the QR code using your phone camera to open the campus
              location and get directions.
            </p>


            <div className="sa-contact-map__address">
              <MapPin size={16} strokeWidth={1.8} />

              <span>
                A-480, Block-5, Gulshan-e-Iqbal,
                Karachi, Pakistan
              </span>
            </div>


            <button
              className="sa-contact-map__copy"
              type="button"
              onClick={copyAddress}
            >
              <Copy size={15} strokeWidth={1.8} />

              <span>
                {copied ? "Address Copied" : "Copy Address"}
              </span>
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

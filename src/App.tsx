import { useState, type ReactNode, useEffect } from "react";
import {
  clinic,
  services,
  doctors,
  hours,
  images,
  reviews,
  features,
} from "./data";

import "./styles.css";

const TOOTH =
  "M20 6c-7 0-13 5-13 15 0 8 4 12 5 21 1 9 3 16 7 16 5 0 4-12 13-12s8 12 13 12c4 0 6-7 7-16 1-9 5-13 5-21C57 11 51 6 44 6c-5 0-8 3-12 3s-7-3-12-3z";

function Tooth({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <path d={TOOTH} fill="currentColor" />
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),

  heart: (
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
  ),

  coin: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5C14 8.5 13 8 12 8c-1.4 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6v2M12 16v2" />
    </>
  ),

  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),

  plus: <path d="M12 5v14M5 12h14" />,

  doctor: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
    </>
  ),

  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14c1 1.7 2.4 2.5 4 2.5s3-.8 4-2.5" />
      <path d="M9 9.5h.01M15 9.5h.01" />
    </>
  ),

  sparkle: (
    <>
      <path d="M11 4l1.8 5.2L18 11l-5.2 1.8L11 18l-1.8-5.2L4 11l5.2-1.8z" />
      <path d="M19 3v4M17 5h4" />
    </>
  ),

  mirror: (
    <>
      <circle cx="9" cy="9" r="5" />
      <path d="M12.5 12.5L20 20" />
    </>
  ),

  chat: (
    <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
  ),
};

function Icon({
  name,
  className = "icon",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function Photo({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`photo ${className}`}>
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="ph" role="img" aria-label={alt}>
          <Tooth className="ph-tooth" />
        </div>
      )}
    </div>
  );
}

function ViberCTA() {
  const viberNumber = clinic.viber.replace(/\D/g, "");
  const tel = clinic.phone.replace(/\s/g, "");

  return (
    <div className="cta">
      <div className="cta-main">
        <div className="cta-content">
          <span className="section-label">REZERVIŠITE TERMIN ONLINE</span>

          <h2>
            Termin zakažite
            <br />
            <span>jednom porukom.</span>
          </h2>

          <p>
            Napišite nam na Viber koju uslugu trebate i kada vam
            odgovara, a mi vam potvrđujemo termin. Bez čekanja
            na liniji i bez popunjavanja formi.
          </p>

          <div className="cta-actions">
            <a
              className="btn viber"
              href={`viber://chat?number=%2B${viberNumber}`}
            >
              <Icon name="chat" />
              Pošaljite poruku na Viber
            </a>

            <a className="btn outline" href={`tel:${tel}`}>
              Pozovite nas
            </a>
          </div>

          <ul className="cta-points">
            <li>Odgovaramo u toku radnog vremena</li>
            <li>Možete poslati i sliku problema</li>
          </ul>
        </div>

        <div className="cta-visual">
          <Photo
            src={images.smile}
            alt="Zdrav i njegovan osmijeh"
            className="cta-photo"
          />
        </div>
      </div>

      <div className="cta-bar">
        <p>
          <strong>Trebate hitnu rezervaciju?</strong> Pozovite nas na{" "}
          <a href={`tel:${tel}`}>{clinic.phone}</a>
        </p>

        <a className="btn light small" href="#kontakt">
          Radno vrijeme
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <span className="stars" role="img" aria-label="5 od 5 zvjezdica">
      ★★★★★
    </span>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " visible" : ""}`}
      aria-label="Nazad na vrh"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

export default function App() {
  
  const [featuredReview, ...otherReviews] = 
  reviews;
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  
  return (
    <>
      <header className={`nav${menuOpen ? " open" : ""}`}>
        <a href="#top" className="logo" onClick={closeMenu}>
          <span className="logo-icon">
            <Tooth />
          </span>

          <span>
            <strong>{clinic.name}</strong>
            <small>DENTAL CLINIC</small>
          </span>
        </a>

        <nav id="glavni-meni">
          <a href="#top" onClick={closeMenu}>Početna</a>
          <a href="#o-nama" onClick={closeMenu}>O nama</a>
          <a href="#usluge" onClick={closeMenu}>Usluge</a>
          <a href="#tim" onClick={closeMenu}>Tim</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
        </nav>

        <a className="btn small" href="#termin">
          Zakaži termin
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={menuOpen}
          aria-controls="glavni-meni"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">

        {/* HERO */}

        <section className="hero">
          <div className="hero-decoration tooth-bg">
            <Tooth />
          </div>

          <div className="hero-decoration dot dot-one" />

          <div className="hero-content">
            <span className="hero-pill">
              <Tooth />
              Stomatološka ordinacija u Bijeljini
            </span>

            <h1>
              Izuzetna njega
              <br />
              za <span>siguran osmijeh.</span>
            </h1>

            <p>
              Nudimo savremenu stomatološku njegu prilagođenu
              vašim potrebama. Naš cilj je da sačuvamo zdravlje
              vaših zuba i učinimo svaku posjetu što ugodnijom.
            </p>

            <div className="hero-actions">
              <a className="btn" href="#termin">
                Zakaži termin
                <span>→</span>
              </a>

              <a className="btn outline" href="#usluge">
                Pogledaj usluge
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <strong>10+</strong>
                <span>godina iskustva</span>
              </div>

              <div className="trust-line" />

              <div className="trust-item">
                <strong>1000+</strong>
                <span>zadovoljnih pacijenata</span>
              </div>

              <div className="trust-line" />

              <div className="trust-item">
                <strong>{services.length}</strong>
                <span>vrsta usluga</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <Photo
                src={images.hero}
                alt="Doktorica u stomatološkoj ordinaciji"
                className="hero-photo"
              />

              <div className="hero-badge badge-top">
                <Tooth />
              </div>

              <div className="hero-badge badge-side">
                <Icon name="sparkle" />
              </div>
            </div>

            <div className="hours-card">
              <span className="hours-dot" />
              <div>
                <strong>Radno vrijeme</strong>
                <p>
                  {hours[0].day}: {hours[0].time}
                </p>
              </div>
            </div>

            <div className="expert-card">
              <div className="expert-icon">
                <Icon name="doctor" />
              </div>

              <div>
                <strong>Stručna njega</strong>
                <p>Iskusan tim posvećen vašem zdravlju.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* ABOUT */}

        <section id="o-nama" className="section about">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-image-main">
                <Photo
                  src={images.clinic}
                  alt="Pregled pacijenta u stomatološkoj ordinaciji"
                />
              </div>

              <div className="about-circle">
                <Tooth />
              </div>

              <div className="about-stat">
                <strong>10+</strong>
                <span>godina iskustva</span>
              </div>
            </div>

            <div className="about-content">
              <span className="section-label">O NAŠOJ ORDINACIJI</span>

              <h2>
                Napredna stomatologija
                <br />
                za <span>bolje sutra.</span>
              </h2>

              <p className="about-lead">
                Vjerujemo da kvalitetna stomatološka njega počinje
                povjerenjem. Zato svakom pacijentu pristupamo individualno
                i trudimo se da pregled i liječenje budu što prijatniji.
              </p>

              <p>
                Moderna oprema, stručno znanje i pažljiv odnos prema
                pacijentu omogućavaju nam da pružimo kompletnu njegu na
                jednom mjestu.
              </p>

              <ul className="about-points">
                <li>Individualan pristup svakom pacijentu</li>
                <li>Savremena oprema i digitalna dijagnostika</li>
                <li>Jasan plan terapije i cijena unaprijed</li>
              </ul>

              <div className="about-actions">
                <a className="btn" href="#termin">
                  Zakaži termin
                  <span>→</span>
                </a>

                <a className="btn outline" href="#usluge">
                  Pogledaj usluge
                </a>
              </div>
            </div>
          </div>
        </section>
        

        {/* FEATURES */}

        <section className="section why">
          <div className="why-bg-tooth">
            <Tooth />
          </div>

          <div className="why-inner">
            <div className="why-intro">
              <span className="section-label">ZAŠTO NAS PACIJENTI BIRAJU</span>

              <h2>
                Njega kojoj možete <span>vjerovati.</span>
              </h2>

              <p>
                Od prvog pregleda do kontrole, svaki korak objašnjavamo
                unaprijed i radimo u atmosferi u kojoj se osjećate sigurno.
              </p>

              <a className="btn" href="#termin">
                Zakaži termin
                <span>→</span>
              </a>

              <div className="why-stats">
                <div>
                  <strong>10+</strong>
                  <span>godina iskustva</span>
                </div>
                <div>
                  <strong>1000+</strong>
                  <span>pacijenata</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>jasne cijene</span>
                </div>
              </div>
            </div>

            <ul className="feature-cards">
              {features.map((feature, index) => (
                <li key={feature.title}>
                  <span className="feature-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="feature-icon">
                    <Icon name={feature.icon} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICES */}

        <section id="usluge" className="section services-section">
          <div className="services-grid">
            <div className="services-image">
              <div className="services-frame">
                <Photo
                  src={images.services}
                  alt="Moderna stomatološka ordinacija"
                  className="services-photo"
                />

                <div className="services-badge">
                  <Tooth />
                </div>
              </div>

              <div className="services-floating">
                <div className="floating-icon">
                  <Icon name="sparkle" />
                </div>
                <div>
                  <strong>Kompletna njega</strong>
                  <span>{services.length} usluga na jednom mjestu</span>
                </div>
              </div>
            </div>

            <div className="services-content">
              <span className="section-label">NAŠE USLUGE</span>

              <h2>
                Kompletna stomatološka
                <br />
                njega <span>na jednom mjestu.</span>
              </h2>

              <p className="services-intro">
                Od preventivnih pregleda do estetske i protetske
                stomatologije — pružamo sve što vam je potrebno
                za zdrav i lijep osmijeh.
              </p>

              <div className="service-list">
                {services.map((service, index) => (
                  <div className="service-item" key={service.id}>
                    <div className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="service-info">
                      <strong>{service.name}</strong>
                      <p>{service.description}</p>
                    </div>

                    <span className="service-price">{service.price}</span>
                  </div>
                ))}
              </div>

              <a className="btn small" href="#termin">
                Zakaži pregled
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* BOOKING */}

        <section id="termin" className="section booking-section">
          <ViberCTA />
        </section>

        {/* TEAM */}

        <section id="tim" className="section team-section">
          <div className="section-heading center">
            <span className="section-label">NAŠ TIM</span>

            <h2>
              Upoznajte naše
              <br />
              <span>stručne stomatologe.</span>
            </h2>
          </div>

          <ul className="team">
            {doctors.map((doctor, index) => (
              <li key={doctor.name}>
                <div className="doctor-image">
                  <Photo
                    src={images.doctors[index]}
                    alt={doctor.name}
                    className="portrait"
                  />

                  <span className="doctor-role">{doctor.role}</span>
                </div>

                <div className="doctor-body">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.bio}</p>

                  <a className="doctor-link" href="#termin">
                    Zakaži pregled
                    <span>→</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* REVIEWS */}

        <section className="section reviews-section">
          <div className="section-heading center">
            <span className="section-label">ISKUSTVA PACIJENATA</span>

            <h2>
              Osmijesi naših
              <br />
              <span>pacijenata.</span>
            </h2>
          </div>

          <div className="reviews-layout">
            <article className="review-featured">
              <div className="quote">“</div>

              <Stars />

              <blockquote>{featuredReview.text}</blockquote>

              <div className="review-bottom">
                <div className="review-avatar">
                  {featuredReview.name.charAt(0)}
                </div>

                <div>
                  {featuredReview.name}
                  <span className="review-tag">{featuredReview.tag}</span>
                </div>
              </div>
            </article>

            <ul className="review-cards">
              {otherReviews.map((review) => (
                <li key={review.name}>
                  <Stars />

                  <blockquote>{review.text}</blockquote>

                  <div className="review-bottom">
                    <div className="review-avatar">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      {review.name}
                      <span className="review-tag">{review.tag}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="reviews-more">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              Pogledaj sve recenzije na Google-u <span>→</span>
            </a>
          </p>
        </section>

        {/* CONTACT */}

        <section id="kontakt" className="contact-section">
          <div className="contact-inner">

            <div className="contact-main">
              <span className="section-label">
                KONTAKTIRAJTE NAS
              </span>

              <h2>
                Spremni za
                <br />
                zdraviji <span>osmijeh?</span>
              </h2>

              <p>
                Javite nam se i dogovorite termin. Naš tim je tu
                da odgovori na sva vaša pitanja.
              </p>

              <a className="btn light" href="#termin">
                Zakaži termin
                <span>→</span>
              </a>
            </div>

            <div className="contact-details">

              <div className="contact-block">
                <span>ADRESA</span>
                <p>{clinic.address}</p>
              </div>

              <div className="contact-block">
                <span>TELEFON</span>
                <p>
                  <a
                    href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  >
                    {clinic.phone}
                  </a>
                </p>
              </div>

              <div className="contact-block">
                <span>EMAIL</span>
                <p>
                  <a href={`mailto:${clinic.email}`}>
                    {clinic.email}
                  </a>
                </p>
              </div>

              <div className="contact-block">
                <span>RADNO VRIJEME</span>

                <div className="hours">
                  {hours.map((hour) => (
                    <div key={hour.day}>
                      <span>{hour.day}</span>
                      <strong>{hour.time}</strong>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <a href="#top" className="logo footer-logo">
            <span className="logo-icon">
              <Tooth />
            </span>

            <span>
              <strong>{clinic.name}</strong>
              <small>DENTAL CLINIC</small>
            </span>
          </a>

          <p>
            © {new Date().getFullYear()} {clinic.name}.
          </p>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}

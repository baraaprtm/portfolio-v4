"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function CorporateProfile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const slides = [
    {
      img: "https://picsum.photos/seed/cpslider1/1200/500",
      title: "Innovate with Us",
      subtitle: "Building the future together.",
    },
    {
      img: "https://picsum.photos/seed/cpslider2/1200/500",
      title: "Cutting-edge Solutions",
      subtitle: "Empowering your business.",
    },
    {
      img: "https://picsum.photos/seed/cpslider3/1200/500",
      title: "Your Vision, Our Creation",
      subtitle: "Turning ideas into reality.",
    },
  ];

  const portfolioImages = [
    "https://picsum.photos/seed/cpwork1/400/300",
    "https://picsum.photos/seed/cpwork2/400/300",
    "https://picsum.photos/seed/cpwork3/400/300",
    "https://picsum.photos/seed/cpwork4/400/300",
    "https://picsum.photos/seed/cpwork5/400/300",
    "https://picsum.photos/seed/cpwork6/400/300",
    "https://picsum.photos/seed/cpwork7/400/300",
    "https://picsum.photos/seed/cpwork8/400/300",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.wrapper}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      {/* Standalone Project Header */}
      <nav className={styles.projectHeader}>
        <Link href="/" className={styles.projectLogo}>
          Baraa<span>.</span>
        </Link>
        <Link href="/work" className={styles.projectBackLink}>
          ← Back to Work
        </Link>
      </nav>

      {/* CompanyProfile Navbar */}
      <nav
        className={`${styles.cpNavbar} ${scrolled ? styles.navScrolled : styles.navTransparent}`}
      >
        <div className={styles.navContainer}>
          <a href="#home" className={styles.brandLogo}>
            CompanyProfile
          </a>
          <ul className={styles.desktopNav}>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#clients" onClick={closeMenu}>
                Clients
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={closeMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span className="material-icons">menu</span>
          </div>
        </div>
      </nav>

      {/* Mobile Sidenav */}
      <div
        className={`${styles.sidenav} ${menuOpen ? styles.sidenavOpen : ""}`}
      >
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#clients" onClick={closeMenu}>
          Clients
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
      {menuOpen && <div className={styles.backdrop} onClick={closeMenu}></div>}

      {/* Hero Slider */}
      <section id="home" className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${currentSlide === index ? styles.slideActive : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className={styles.caption}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.subTitle}>We Are Professionals</p>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
            accusamus. Et architecto optio, sed nam quasi modi placeat, culpa
            sit odio, nemo autem totam at nulla, nisi beatae molestiae.
            Asperiores!
          </p>
          <div className={styles.skills}>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <span>WEB DEVELOPMENT</span>
                <span>90%</span>
              </div>
              <div className={styles.progressBg}>
                <div
                  className={styles.progressBar}
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <span>MOBILE APP DEVELOPMENT</span>
                <span>75%</span>
              </div>
              <div className={styles.progressBg}>
                <div
                  className={styles.progressBar}
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillHeader}>
                <span>GAME DEVELOPMENT</span>
                <span>60%</span>
              </div>
              <div className={styles.progressBg}>
                <div
                  className={styles.progressBar}
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className={styles.clientsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Clients</h2>
          <div className={styles.clientsGrid}>
            <span className={styles.clientTextLogo}>Gojek</span>
            <span className={styles.clientTextLogo}>Tokopedia</span>
            <span className={styles.clientTextLogo}>Traveloka</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <span className={`material-icons ${styles.serviceIcon}`}>
                desktop_windows
              </span>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                nam. Delectus eum corrupti.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={`material-icons ${styles.serviceIcon}`}>
                smartphone
              </span>
              <h3>Mobile App</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                nam. Delectus eum corrupti.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={`material-icons ${styles.serviceIcon}`}>
                sports_esports
              </span>
              <h3>Game Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                nam. Delectus eum corrupti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Portfolio</h2>
          <div className={styles.portfolioGrid}>
            {portfolioImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Portfolio ${index + 1}`}
                className={styles.portfolioImg}
                onClick={() => setLightbox(img)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleLight}>Get in Touch</h2>
          <p className={styles.contactDesc}>
            Let’s work together — reach out with your questions or ideas.
          </p>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfoCard}>
              <h4>Web CompanyProfile</h4>
              <p>Creative Tech Agency</p>
              <div className={styles.contactItem}>
                <span className="material-icons">location_on</span>
                <p>Jl. Jakarta No. 777, West Java, Indonesia</p>
              </div>
              <div className={styles.contactItem}>
                <span className="material-icons">email</span>
                <p>
                  baraaprtm@gmail.com
                  <br />
                  Reach us anytime
                </p>
              </div>
            </div>
            <div className={styles.contactFormCard}>
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={styles.inputField}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={styles.inputField}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={styles.inputField}
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className={styles.inputField}
                ></textarea>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Enlarged" className={styles.lightboxImg} />
        </div>
      )}
    </div>
  );
}

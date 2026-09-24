"use client";

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import styles from "./page.module.css";

export default function CoffeeShopPage() {
  useEffect(() => {
    const w = window as any;
    const navbarNav = document.querySelector(`.${styles["navbar-nav"]}`);
    const hamburger = document.querySelector("#hamburger-menu");

    const toggleNav = (e: Event) => {
      e.preventDefault();
      if (navbarNav) navbarNav.classList.toggle(styles.active);
    };

    if (hamburger) {
      hamburger.addEventListener("click", toggleNav);
    }

    const handleClickOutside = (e: Event) => {
      if (
        hamburger &&
        navbarNav &&
        !hamburger.contains(e.target as Node) &&
        !navbarNav.contains(e.target as Node)
      ) {
        navbarNav.classList.remove(styles.active);
      }
    };
    document.addEventListener("click", handleClickOutside);

    const navbar = document.querySelector("#navbar");
    const revealElements = document.querySelectorAll(`.${styles.reveal}`);

    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add(styles.scrolled);
        } else {
          navbar.classList.remove(styles.scrolled);
        }
      }

      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add(styles.active);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const footerYear = document.getElementById("footer-year");
    if (footerYear) {
      const currentYear = new Date().getFullYear();
      footerYear.innerHTML = `&copy; ${currentYear} Caffe <span>Baraa</span>. All Rights Reserved.`;
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      if (hamburger) hamburger.removeEventListener("click", toggleNav);
    };
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/feather-icons"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as any;
          if (w.feather) w.feather.replace();
        }}
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className={styles.wrapper}>
        <nav className={styles.projectHeader}>
          <Link href="/" className={styles.projectLogo}>
            Baraa<span>.</span>
          </Link>
          <Link href="/work" className={styles.projectBackLink}>
            ← Back to Work
          </Link>
        </nav>

        <nav className={styles.navbar} id="navbar">
          <div className={styles.container}>
            <a href="#" className={styles["navbar-logo"]}>
              Coffee <span>Baraa</span>.
            </a>

            <div className={styles["navbar-nav"]}>
              <a href="#home" className={styles.active}>
                Home
              </a>
              <a href="#about">Tentang</a>
              <a href="#menu">Menu</a>
              <a href="#contact">Kontak</a>
            </div>

            <div className={styles["navbar-extra"]}>
              <a href="#" id="search">
                <i data-feather="search"></i>
              </a>
              <a href="#" id="shopping-cart">
                <i data-feather="shopping-cart"></i>
              </a>
              <a href="#" id="hamburger-menu">
                <i data-feather="menu"></i>
              </a>
            </div>
          </div>
        </nav>

        <section className={styles.hero} id="home">
          <div className={styles.container}>
            <main className={styles["hero-content"]}>
              <h1>
                Mari Nikmati Secangkir <span>Kopi</span>
              </h1>
              <p>
                Selamat datang di Caffe Baraa, tempat di mana setiap tegukan
                kopi membawa cerita. Dari aroma yang menggoda hingga suasana
                yang hangat, kami hadir untuk menemani harimu.
              </p>
              <a href="#menu" className={styles.btn}>
                Beli Sekarang
              </a>
            </main>
          </div>
        </section>

        <section id="about" className={`${styles.about} ${styles.reveal}`}>
          <div className={styles.container}>
            <h2 className={styles["section-title"]}>
              <span>Tentang </span>Kami
            </h2>
            <div className={styles.row}>
              <div className={styles["about-content"]}>
                <h3>Kenapa memilih kopi kami?</h3>
                <p>
                  Di balik secangkir kopi, ada proses, rasa, dan cinta. Caffe
                  Baraa menyajikan semua itu dalam satu tempat yang nyaman,
                  estetik, dan bikin betah. Kami menggunakan biji kopi pilihan
                  yang dipanggang sempurna untuk menghasilkan cita rasa terbaik.
                </p>
                <p>
                  Ngopi gak harus buru-buru! Di Caffe Baraa, kamu bisa santai
                  bareng teman, dengerin musik, atau sekadar menatap jendela
                  sambil menyeruput kopi favoritmu. Suasana modern dan tenang
                  menantimu.
                </p>
              </div>
              <div className={styles["about-img"]}>
                <img
                  src="/projects/coffee-shop/img/caffe22.jpg"
                  alt="Tentang Caffe Baraa"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className={`${styles.menu} ${styles.reveal}`}>
          <div className={styles.container}>
            <h2 className={styles["section-title"]}>
              <span>Menu</span> Kami
            </h2>
            <p className={styles["section-subtitle"]}>
              Pilihan terbaik untuk menemani harimu, dibuat dengan bahan
              berkualitas.
            </p>
            <div className={styles.row}>
              <div className={styles["menu-card"]}>
                <img
                  src="/projects/coffee-shop/img/menu/Espresso.jpg"
                  alt="Espresso"
                  className={styles["menu-card-img"]}
                />
                <h3 className={styles["menu-card-title"]}>- Espresso -</h3>
                <p className={styles["menu-card-price"]}>IDR 15K</p>
              </div>
              <div className={styles["menu-card"]}>
                <img
                  src="/projects/coffee-shop/img/menu/nathan-dumlao-T5qXJ2VpV6M-unsplash.jpg"
                  alt="Cappuccino"
                  className={styles["menu-card-img"]}
                />
                <h3 className={styles["menu-card-title"]}>- Cappuccino -</h3>
                <p className={styles["menu-card-price"]}>IDR 18K</p>
              </div>
              <div className={styles["menu-card"]}>
                <img
                  src="/projects/coffee-shop/img/menu/Matcha Latte.jpg"
                  alt="Matcha Latte"
                  className={styles["menu-card-img"]}
                />
                <h3 className={styles["menu-card-title"]}>- Matcha Latte -</h3>
                <p className={styles["menu-card-price"]}>IDR 22K</p>
              </div>
              <div className={styles["menu-card"]}>
                <img
                  src="/projects/coffee-shop/img/menu/Red Velvet Cake.jpg"
                  alt="Red Velvet Cake"
                  className={styles["menu-card-img"]}
                />
                <h3 className={styles["menu-card-title"]}>
                  - Red Velvet Cake -
                </h3>
                <p className={styles["menu-card-price"]}>IDR 25K</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.contact} ${styles.reveal}`}>
          <div className={styles.container}>
            <h2 className={styles["section-title"]}>
              <span>Kontak </span>Kami
            </h2>
            <p className={styles["section-subtitle"]}>
              Kunjungi lokasi kami atau hubungi kami untuk pemesanan online.
            </p>
            <div className={styles.row}>
              <div className={styles["contact-map"]}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.546789012!2d106.759303215!3d-6.172345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c2f123456789%3A0xabcdef123456789!2sJakarta%20Barat%2C%20DKI%20Jakarta!5e0!3m2!1sen!2sid!4v1748274651347"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <form className={styles["contact-form"]} action="#">
                <div className={styles["input-group"]}>
                  <i data-feather="user"></i>
                  <input type="text" placeholder=" Nama Lengkap " required />
                </div>
                <div className={styles["input-group"]}>
                  <i data-feather="mail"></i>
                  <input type="email" placeholder=" Email Address " required />
                </div>
                <div className={styles["input-group"]}>
                  <i data-feather="phone"></i>
                  <input type="tel" placeholder=" No Handphone " required />
                </div>
                <button type="submit" className={styles.btn}>
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className={styles.container}>
            <p id="footer-year"></p>
          </div>
        </footer>
      </div>
    </>
  );
}

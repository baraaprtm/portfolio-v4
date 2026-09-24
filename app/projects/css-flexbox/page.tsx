"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function FlexboxAnimation() {
  const [justifyValue, setJustifyValue] = useState<string>("flex-start");
  const [flexDir, setFlexDir] = useState<"row" | "column">("row");
  const [orders, setOrders] = useState<number[]>([1, 2, 3, 4, 5]);

  const justifyOptions = [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
  ];

  const toggleDirection = () => {
    setFlexDir((prev) => (prev === "row" ? "column" : "row"));
  };

  const shuffleOrder = () => {
    const shuffled = [...orders].sort(() => Math.random() - 0.5);
    setOrders(shuffled);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.navbarLogo}>
          Baraa<span>.</span>
        </Link>
        <Link href="/work" className={styles.backLink}>
          ← Back to Work
        </Link>
      </nav>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Flexbox Animation</h1>
          <p>An interactive demonstration of CSS Flexbox capabilities.</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            1. Accordion Effect (Flex-Grow)
          </h2>
          <div className={styles.accordion}>
            <div className={`${styles.panel} ${styles.p1}`}></div>
            <div className={`${styles.panel} ${styles.p2}`}></div>
            <div className={`${styles.panel} ${styles.p3}`}></div>
            <div className={`${styles.panel} ${styles.p4}`}></div>
            <div className={`${styles.panel} ${styles.p5}`}></div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Kontrol Justify-Content</h2>
          <div className={styles.controls}>
            {justifyOptions.map((opt) => (
              <button
                key={opt}
                className={`${styles.btn} ${justifyValue === opt ? styles.btnActive : ""}`}
                onClick={() => setJustifyValue(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div
            className={styles.demoContainer}
            style={{ justifyContent: justifyValue }}
          >
            <div className={styles.demoBox}>1</div>
            <div className={styles.demoBox}>2</div>
            <div className={styles.demoBox}>3</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Ubah Arah (Flex-Direction)</h2>
          <div className={styles.controls}>
            <button className={styles.btn} onClick={toggleDirection}>
              Ganti Arah
            </button>
          </div>
          <div
            className={styles.demoContainer}
            style={{ flexDirection: flexDir }}
          >
            <div className={styles.demoBox}>A</div>
            <div className={styles.demoBox}>B</div>
            <div className={styles.demoBox}>C</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Acak Urutan (Order)</h2>
          <div className={styles.controls}>
            <button className={styles.btn} onClick={shuffleOrder}>
              Acak Posisi!
            </button>
          </div>
          <div className={styles.orderContainer}>
            {orders.map((order, index) => (
              <div
                key={index}
                className={styles.orderItem}
                style={{ order: order }}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>Created by Baraa Pratama</p>
      </footer>
    </div>
  );
}

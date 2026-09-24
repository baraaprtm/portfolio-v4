"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function BrowserMiniGame() {
  const [score, setScore] = useState(0);
  const [activeMole, setActiveMole] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(false);
  const prevHoleRef = useRef(-1);

  const randomWaktu = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const randomTanah = () => {
    const t = Math.floor(Math.random() * 6);
    if (t === prevHoleRef.current) {
      return randomTanah();
    }
    prevHoleRef.current = t;
    return t;
  };

  const munculkanTikus = () => {
    const tRandom = randomTanah();
    const wRandom = randomWaktu(300, 1000);
    setActiveMole(tRandom);

    timeoutRef.current = setTimeout(() => {
      setActiveMole(null);
      if (isPlayingRef.current) {
        munculkanTikus();
      }
    }, wRandom);
  };

  const mulai = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    isPlayingRef.current = false;
    setScore(0);
    isPlayingRef.current = true;
    setActiveMole(null);
    munculkanTikus();

    setTimeout(() => {
      isPlayingRef.current = false;
      setActiveMole(null);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }, 10000);
  };

  const pukul = (index: number) => {
    if (index === activeMole && isPlayingRef.current) {
      setScore((prev) => prev + 1);
      setActiveMole(null);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Standalone Header */}
      <nav className={styles.projectHeader}>
        <Link href="/" className={styles.projectLogo}>
          Baraa<span>.</span>
        </Link>
        <Link href="/work" className={styles.projectBackLink}>
          ← Back to Work
        </Link>
      </nav>

      {/* Game Container Wrapper */}
      <div className={styles.gameContainer}>
        <h1 className={styles.gameTitle}>Pukul Tikus Tanah</h1>
        <button onClick={mulai} className={styles.mulaiBtn}>
          Mulai!
        </button>
        <h2 className={styles.gameScore}>{score}</h2>

        <div className={styles.container}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`${styles.tanah} ${activeMole === i ? styles.muncul : ""}`}
              onClick={() => pukul(i)}
            >
              <div className={styles.tikus}></div>
            </div>
          ))}
        </div>
      </div>

      <audio
        ref={audioRef}
        src="/projects/browser-mini-game/audio/pop.mp3.mp3"
      />
    </div>
  );
}

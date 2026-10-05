"use client";

import React, { useEffect, useState } from "react";
import styles from "./PageLoader.module.css";

/**
 * PageLoader — elegant branded entrance experience.
 *
 * Timing is state-based, not arbitrary:
 *  - Fades in immediately with the monogram + a refined progress bar
 *  - Resolves when the browser fires `document.readyState === 'complete'`
 *    (all resources loaded, fonts painted, images decoded)
 *  - A 300ms minimum ensures the animation is actually visible
 *  - Never blocks crawlers: the loader is rendered client-side only and
 *    the underlying content is present in the SSR HTML
 */
export const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Minimum display time so the animation has purpose
    const MIN_MS = 400;
    const start = Date.now();

    const dismiss = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_MS - elapsed);

      setTimeout(() => {
        setFading(true);
        // Remove from DOM after CSS transition completes
        setTimeout(() => setVisible(false), 500);
      }, remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      const onLoad = () => dismiss();
      window.addEventListener("load", onLoad, { once: true });
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${styles.loader} ${fading ? styles.fading : ""}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className={styles.inner}>
        {/* Monogram */}
        <div className={styles.monogram}>
          <span className={styles.monogramText}>MG</span>
          <div className={styles.monogramUnderline} />
        </div>

        {/* Refined engineering progress bar */}
        <div className={styles.progressTrack} role="presentation">
          <div className={styles.progressBar} />
        </div>

        {/* Subtle tagline */}
        <p className={styles.tagline}>Building secure, scalable systems</p>
      </div>
    </div>
  );
};

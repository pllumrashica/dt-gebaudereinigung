"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const displayTime = reducedMotion ? 60 : 920;
    const exitTime = reducedMotion ? 100 : 420;

    const leaveTimer = window.setTimeout(() => setLeaving(true), displayTime);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("is-preloading");
    }, displayTime + exitTime);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove("is-preloading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="preloader"
      data-state={leaving ? "leaving" : "visible"}
      role="status"
      aria-label="Website wird geladen"
      aria-live="polite"
    >
      <div className="preloader-orb" aria-hidden="true" />
      <div className="preloader-content">
        <div className="preloader-logo-wrap">
          <BrandLogo className="brand-logo--preloader" linked={false} priority />
          <span className="preloader-shine" aria-hidden="true" />
        </div>
        <span className="preloader-line" aria-hidden="true"><i /></span>
        <small>Persönlich · Zuverlässig · Sauber</small>
      </div>
    </div>
  );
}

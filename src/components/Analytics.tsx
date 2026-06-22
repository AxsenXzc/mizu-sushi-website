"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { getStoredConsent } from "./CookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(!!getStoredConsent()?.statistics);
    sync();
    window.addEventListener("mizu-consent-change", sync);
    return () => window.removeEventListener("mizu-consent-change", sync);
  }, []);

  if (!GA_ID || !enabled) return null;

  const gtagSrc = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;

  return (
    <>
      <Script src={gtagSrc} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}

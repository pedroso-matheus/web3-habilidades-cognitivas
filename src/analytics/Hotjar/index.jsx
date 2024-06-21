"use client";

import Script from "next/script";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID === "null" ? null : process.env.NEXT_PUBLIC_HOTJAR_ID;

const Hotjar = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;
    // Hotjar pageview tracking
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="hotjar"
        src="/scripts/hotjar.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-hotjar-id={hotjarId}
      />
    </div>
  );
};

export default Hotjar;
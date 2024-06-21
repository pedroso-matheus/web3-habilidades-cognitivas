"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

const gtmId = process.env.NEXT_PUBLIC_GMT_ID === "null" ? null : process.env.NEXT_PUBLIC_GMT_ID;

const GoogleTagManager = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="gtm"
        src="/scripts/gtm.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-gtm-id={gtmId}
      />
    </div>
  );
};

export default GoogleTagManager;

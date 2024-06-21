"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

import { fbPageview } from "./utils";

const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID === "null" ? null : process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
  
    if (!loaded) return;

    fbPageview();
  
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={facebookPixelId}
      />
    </div>
  );
};

export default FacebookPixel;

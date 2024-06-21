import FacebookPixel from '../FacebookPixel';
import GoogleTagManager from '../GoogleTagManager';
import Hotjar from '../Hotjar';

const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID === "null" ? null : process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const gtmId = process.env.NEXT_PUBLIC_GMT_ID === "null" ? null : process.env.NEXT_PUBLIC_GMT_ID;
const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID === "null" ? null : process.env.NEXT_PUBLIC_HOTJAR_ID;

const AnalyticsTags = () => {

  return (
    <>
      {facebookPixelId && <FacebookPixel />}
      {gtmId && <GoogleTagManager />}
      {hotjarId && <Hotjar />}
      
    </>
  );
};

export default AnalyticsTags;
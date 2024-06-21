
import Image from "next/legacy/image";
import { siteTitle } from "@/config/siteInfo";

const Logo = ({ width, height, className }) => {

    return (
      <div className={"my-2 "+className}>
        <Image        
          src="/images/Habilidades-Cognitivas-Logo-250px.png"
          alt={"Logo - " + siteTitle}
          width={width}
          height={height}
          priority
        />
      </div>
    );
};

export default Logo;
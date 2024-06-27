import Line from "../Line";
import Grafism from "../Grafism";
import Logo from "../Logo";

import {  siteTitle, headline, subHeadline } from "../../config/siteInfo";

const HeaderHome = () => {

    return (
    <header className="px-4 py-5 p-md-5" style={{ background: 'linear-gradient(to bottom, #00172f, #000000)'}}>
      <div className="d-flex flex-wrap align-items-center justify-content-center text-center">      
        <div  style={{ maxWidth: '600px'}}>
          <Logo  width={250} height={71} />
          <h2 className="mt-4 fs-2 custom-color-light-blue" style={{ textTransform: 'uppercase'}}>{headline}</h2>
          <Line color="custom-bg-color-orange"/>
          <p className="fs-5 mb-4 custom-color-light-blue" >{subHeadline}</p>                 
          <Grafism width={60} height={50} color="custom-color-light-blue" />
          <h1 className="mt-3 fs-6 custom-color-light-blue">{siteTitle}</h1>
        </div>        
      </div>  
    </header>      
    );
};

export default HeaderHome;
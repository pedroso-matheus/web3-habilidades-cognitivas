import Line from "../Line";
import Grafism from "../Grafism";
import Logo from "../Logo";

const HeaderCourses = ({ title, description, type}) => {

    return (
    <header className="pt-5 pb-3" style={{ background: 'linear-gradient(to bottom, #00172f, #000000)'}}>
      <div className="d-flex flex-wrap align-items-center justify-content-center text-center">      
        <div  style={{ maxWidth: '600px'}}>
          <Logo  width={250} height={71} />
          <p className="fs-6 mt-4 custom-color-light-blue" style={{ textTransform: 'uppercase'}}>{type}</p>                           
          <h1 className="fs-3 custom-color-light-blue" style={{ textTransform: 'uppercase'}} >{title}</h1>
          <Line color="custom-bg-color-orange"/>
          <p className="fs-6 mb-4 custom-color-light-blue" style={{ textTransform: 'uppercase'}}>{"("+description+")"}</p>                           
          <Grafism width={60} height={51} color="custom-color-light-blue" />          
        </div>        
      </div>  
    </header>      
    );
};

export default HeaderCourses;
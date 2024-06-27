import FbCheckout from "../../analytics/FacebookCheckout";
import Container from "../Container"
import Logo from "../Logo";

const SectionCheckout = ({ children, title }) => {
  return (
    <div
    className="min-vh-100 custom-color-light-blue text-center pt-3 pb-5"
    style={{ background: 'linear-gradient(to right, #00172f, #000000)' }}
    >
      <Container>
        <Logo 
        className="mb-4" 
        width={250} 
        height={71} 
        />      
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-start shadow text-dark bg-white rounded p-4 p-md-5 col-lg-10">
                <h1 className="text-center text-dark mb-4">{title}</h1>
                <div className="row">          
                  {children}
                </div>
              </div>
            </div>
          </div>
      </Container>
      <FbCheckout />
    </div>              
  );
};

export default SectionCheckout;

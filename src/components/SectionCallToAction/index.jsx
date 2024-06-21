import ButtonLink from "../ButtonLink";
import Price from "../Price";
import Grafism from "../Grafism";

const SectionCallToAction = ({ cta, price, salesPrice, installments, checktouLink }) => {
    
    return (
        <div className="custom-bg-color-dark-blue pt-5 pb-4">
            <div className="d-flex flex-column justify-content-center align-items-center mx-auto text-center" style={{ maxWidth: '90%'}}>
                <h2 className="fs-2 mx-3 mx-md-5 custom-color-light-blue" style={{ textTransform: 'uppercase'}}>{cta}</h2>                

                <ButtonLink className="m-4"
                    label={"Quero me inscrever"} 
                    href={checktouLink} 
                />

                <Price className="mb-1"
                    price={price}
                    salesPrice={salesPrice} 
                    installments={installments} 
                />                    

                <p className="custom-color-light-blue" style={{ fontSize: '0.9rem' }}>{"(o preço promocional vai subindo conforme os lotes vão acabando)"}</p>
                
                <Grafism className="" width={60} height={51} color="custom-color-light-blue" />        

            </div>                
        </div> 
    );
};

export default SectionCallToAction;

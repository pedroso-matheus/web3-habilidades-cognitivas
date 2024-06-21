import Container from "../Container";
import Grafism from "../Grafism";
import Logo from "../Logo";

import { email, companyName } from "@/config/siteInfo";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="custom-bg-color-blue" style={{ background: 'linear-gradient(to bottom, #2D5176, #00172f)'}}>
            <Container>
                <div className="pt-5 pb-3 align-items-center justify-content-center text-center">      
                    <div >
                        <Logo width={180} height={45} />
                    </div>

                    <div className="fs-6 custom-color-light-blue">
                        <p>{companyName}</p>
                        <p >{email}</p>                        
                        <p>
                            <a className="custom-color-light-blue" href="/termos-e-condicoes">Termos e Condições, Informações de Pagamento</a><br></br>
                            <a className="custom-color-light-blue" href="/termos-e-condicoes"> e Política de Privacidade</a>
                        </p>
                        <p>CNPJ: 27.137.924/0001-90</p>
                        <p>{year}</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
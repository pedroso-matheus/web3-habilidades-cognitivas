import Container from "@/components/Container";
import Logo from "@/components/Logo";
import WhatsAppLink from "@/components/WhatsappLink";

import FbPurchase from "@/analytics/FacebookPurchase";

export async function generateMetadata() {
  return {
    title: "Inscrição Realizada",
  };
}

const InscricaoRealizada = () => {

    return (
      <div 
        className="d-flex flex-column vh-100 text-center justify-content-center custom-color-light-blue"
        style={{ 
          background: 'linear-gradient(to bottom, #00172f, #000000)'}} >
          <Container>
            <Logo  width={250} height={71} />
            <h1 className="m-4">INSCRIÇÃO REALIZADA COM SUCESSO!​​</h1>
            <p className="fs-5 mb-3">Em breve você irá receber as instruções de acesso pelo seu email.</p>
            <p className="fs-6">Qualquer dúvida é só entrar em contato pelo e-mail ou whatsapp:</p>
            <p className="fs-6">Email: contato@ibcea.com.br</p>
            <p className="fs-5"><WhatsAppLink label="Whatsapp: (11) 91453-8835" message="Teste mensagem com ç e acénto"/></p>
          </Container>
          <FbPurchase />
      </div>
  );
} 

export default InscricaoRealizada;
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import WhatsAppLink from "../../components/WhatsappLink";
import ButtonLink from "../../components/ButtonLink";

export async function generateMetadata() {
  return {
    title: "Inscrição não realizada",
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
            <h1 className="m-4">ATENÇÃO!</h1>
            <p className="fs-5 mb-3">Sua inscrição NÃO foi realizada, tente novamente pelo botão abaixo.</p>
            <ButtonLink href="/" label="Voltar" className="my-4" />
            <p className="fs-6">Qualquer dúvida é só entrar em contato pelo e-mail ou whatsapp:</p>
            <p className="fs-6">Email: contato@ibcea.com.br</p>
            <p className="fs-5"><WhatsAppLink label="Whatsapp: (11) 91453-8835" message="Teste mensagem com ç e acénto"/></p>
          </Container>
      </div>
  );
} 

export default InscricaoRealizada;
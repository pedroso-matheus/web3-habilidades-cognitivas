import Container from "@/components/Container";
import Logo from "@/components/Logo";
import WhatsAppLink from "@/components/WhatsappLink";

export async function generateMetadata() {
  return {
    title: "Aguardando Confirmação de Pagamento",
  };
}


const AguardandoConfirmacaoPagamento = () => {

    return (
        <div 
          className="d-flex flex-column vh-100 text-center justify-content-center custom-color-light-blue"
          style={{ 
            background: 'linear-gradient(to bottom, #00172f, #000000)'}} >
            <Container>
              <Logo  width={250} height={71} />
              <h1 className="m-5">AGUARDANDO CONFIRMAÇÃO DE PAGAMENTO​​​</h1>
              <p className="fs-5 mb-5">Caso o código do PIX ainda não tenha aparecido para você, confira seu email (inclusive na caixa de spam), pois também enviamos o código para pagamento por lá.​​</p>
              <p className="fs-5">Qualquer dúvida é só entrar em contato pelo e-mail ou whatsapp:</p>
              <p className="fs-6">Email: contato@ibcea.com.br</p>
              <p className="fs-5"><WhatsAppLink label="Whatsapp: (11) 91453-8835" message="Teste mensagem com ç e acénto"/></p>
            </Container>
        </div>
  );
} 

export default AguardandoConfirmacaoPagamento;
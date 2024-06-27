import Container from "../../components/Container";
import Logo from "../../components/Logo";
import FbCheckout from '../../analytics/FacebookCheckout';
import Web3CheckoutPage from "../../components/Web3CheckoutPage";

export async function generateMetadata() {
  return {
    title: "Finalizar Inscrição",
  };
}

const FinalizarInscricao = () => {
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
        <Web3CheckoutPage />
      </Container>
      <FbCheckout />
    </div>
  );
};

export default FinalizarInscricao;

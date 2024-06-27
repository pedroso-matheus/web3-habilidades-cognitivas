"use client";

import { useState  } from 'react';
import { useRouter } from 'next/navigation';

import SectionCheckout from '../../../components/SectionCheckout';
import ButtonLink from '../../../components/ButtonLink';
import ContainerBordered from '../../../components/ContainerBordered';
import CourseOverview from '../../../components/CourseOverview';
import Web3ButtonMetamask from '../../../components/Web3ButtonMetamask';
import Web3CheckoutForm from '../../../components/Web3CheckoutForm';
import Web3Prices from '../../../components/Web3Prices';
import ButtonPurchase from '../../../components/ButtonPurchase';

import { web3BuyCourse } from '../../../services/web3Services';
import { courses } from '../../../config/courses';

const FinalizarInscricaoUrl = ({ params }) => {
  const { url } = params;
  const course = courses.find(course => course.url === url);
  const price = course?.web3?.bnbPrice;

  const router = useRouter();

  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUserSubscription = () => {
    
    const classroomIds = course?.memberkit?.classroomIds?.join(',') || '';

    const queryParams = new URLSearchParams({
      email: encodeURIComponent(email),
      fullName: encodeURIComponent(fullName),
      mobile: encodeURIComponent(mobile),
      classroomIds: encodeURIComponent(classroomIds)
    }).toString();

    router.push(`/finalizando-inscricao/${queryParams}`);

  };

  const handlePayment = async () => {
    setLoading(true);
    await web3BuyCourse(course.web3.id, email, price.toString())
      .then(response => {
        handleUserSubscription();
      })
      .catch(error => {
        console.error(error);
        router.push('/inscricao-nao-realizada');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (!course) {
    return (
      <SectionCheckout title="FINALIZAR INSCRIÇÃO">
        <div className="text-center border solid p-5 border-dark">
          <h2>Curso não encontrado</h2>
          <ButtonLink href="/" label="Voltar" className="mt-5" />
        </div>
      </SectionCheckout>
    );
  }

  return (
    <SectionCheckout title="FINALIZAR INSCRIÇÃO">
      <h1>{url}</h1>
      <ContainerBordered title="CURSO">
        <CourseOverview course={course} />
      </ContainerBordered>

      <ContainerBordered title="INSCRIÇÃO E PAGAMENTO">
        {!connected ? (
          <div className="justify-content-center mt-1">
            <Web3ButtonMetamask setConnected={setConnected} />
          </div>
        ) : (
          <div>
            <Web3CheckoutForm
              email={email} setEmail={setEmail}
              fullName={fullName} setFullName={setFullName}
              mobile={mobile} setMobile={setMobile}
              setIsFormValid={setIsFormValid}
            />
            <Web3Prices bnbPrice={price} />
            <ButtonPurchase
              onClick={handlePayment}
              isValid={isFormValid}
              isProcessing={loading}
            />
          </div>
        )}
      </ContainerBordered>
    </SectionCheckout>
  );
}

export default FinalizarInscricaoUrl;
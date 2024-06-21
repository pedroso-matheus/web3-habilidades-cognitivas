"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';

import SectionCheckout from "../SectionCheckout";
import Web3CheckoutForm from "../Web3CheckoutForm";
import CourseOverview from "../CourseOverview";
import ContainerBordered from "../ContainerBordered";
import Web3Prices from "../Web3Prices";
import Web3ButtonMetamask from "../Web3ButtonMetamask";
import ButtonPurchase from "../ButtonPurchase"; 
import ButtonLink from "../ButtonLink";

import { buyCourse } from "@/services/web3Services";
import { courses } from "@/config/courses";
import { createOrUpdateUser } from "@/services/memberkitServices";

const Web3CheckoutPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoadingCourse, setIsLoadingCourse] = useState(true);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const parsedId = parseInt(id, 10);
      if (!isNaN(parsedId) && parsedId > 0) {
        const foundCourse = courses.find(course => course.web3.id === parsedId);
        setCourse(foundCourse);
      }
    }
    setIsLoadingCourse(false);
  }, [searchParams]);

  const price = course?.web3?.bnbPrice;

  const handleBuyCourse = () => {
    if (!isFormValid) {
      return;
    }

    setLoading(true);
    buyCourse(course.web3.id, email, price.toString())
      .then(response => {
        if (response && response.transactionHash) {
          const expiresAt = new Date();
          expiresAt.setFullYear(expiresAt.getFullYear() + 1);
          return createOrUpdateUser(fullName, email, mobile, course.memberkit.classroomIds, expiresAt.toISOString());
        } else {
          console.error("A transação não foi bem-sucedida:", response);
          throw new Error("A transação não foi bem-sucedida");
        }
      })
      .then(memberkitResponse => {
        if (memberkitResponse) {
          console.log("MemberKit user created/updated:", memberkitResponse);
          router.push("/inscricao-realizada");
        } else {
          console.error("Erro ao criar/atualizar usuário no MemberKit");
          throw new Error("Erro ao criar/atualizar usuário no MemberKit");
        }
      })
      .catch(error => {
        console.error("Erro ao comprar o curso:", error);
        router.push("/inscricao-nao-realizada");
      })
      .finally(() => setLoading(false));
  };

  if (isLoadingCourse) {
    return (
      <SectionCheckout title="FINALIZAR INSCRIÇÃO">
        <div className="text-center border solid p-5 border-dark">
          <h2>Carregando...</h2>
        </div>
      </SectionCheckout>
    );
  }

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
              onClick={handleBuyCourse}
              isValid={isFormValid}
              isProcessing={loading}
            />
          </div>                
        )}              
      </ContainerBordered>
    </SectionCheckout>
  );
};

export default Web3CheckoutPage;
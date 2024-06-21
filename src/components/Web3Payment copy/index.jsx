"use client";

import { useState, useEffect } from "react";
import Web3CheckoutForm from "../Web3CheckoutForm";
import CourseOverview from "../CourseOverview";
import BorderedDiv from "../ContainerBordered";
import { cryptoToCurrency } from "@/services/coingeckoServices";

const Web3Payment = ({ course }) => {
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [brlPrice, setBrlPrice] = useState(null);
  const [conversionDate, setConversionDate] = useState(null);

  const price = course.web3.bnbPrice;

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const rate = await cryptoToCurrency("binancecoin", "brl");
        const formattedBrlPrice = (price * rate).toFixed(2).replace(".", ",");
        setBrlPrice(formattedBrlPrice);
        const now = new Date();
        const formattedDate = now.toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setConversionDate(`${formattedDate} UTC-3`);
      } catch (error) {
        console.error("Failed to fetch conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, [price]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="text-start shadow text-dark bg-white rounded p-4 p-md-5 col-lg-10">
          <h1 className="text-center text-dark mb-4">FINALIZAR INSCRIÇÃO</h1>
          <div className="row">
            <BorderedDiv title="DADOS DO CURSO">
              <CourseOverview course={course}
                              price={price}
                              brlPrice={brlPrice}
                              conversionDate={conversionDate} 
              />
            </BorderedDiv>
            <BorderedDiv title="INSCRIÇÃO E PAGAMENTO">
              <Web3CheckoutForm
                email={email} setEmail={setEmail}
                fullName={fullName} setFullName={setFullName}
                mobile={mobile} setMobile={setMobile}
                connected={connected} setConnected={setConnected}
                loading={loading} setLoading={setLoading}
                price={price} brlPrice={brlPrice} conversionDate={conversionDate}
              />
            </BorderedDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3Payment;

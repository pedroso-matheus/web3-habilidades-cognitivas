"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { cryptoToCurrency } from "../../services/coingeckoServices";

const Web3Prices = ({ bnbPrice }) => {
  const [brlPrice, setBrlPrice] = useState(null);
  const [conversionDate, setConversionDate] = useState(null);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const rate = await cryptoToCurrency("binancecoin", "brl");
        const formattedBrlPrice = (bnbPrice * rate).toFixed(2).replace(".", ",");
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
  }, [bnbPrice]);

  return (
  <div className="my-4">
    <span className="text-muted d-block mt-2">Preço em BNB: {bnbPrice}</span>
    {brlPrice && conversionDate && (
      <span className="text-muted d-block">
        Preço em R$: {brlPrice}
        <OverlayTrigger placement="top" overlay={<Tooltip>Horário da cotação</Tooltip>}>
          <span className="" style={{ cursor: "pointer" }}>({conversionDate})</span>
        </OverlayTrigger>
      </span>
    )}
  </div>
  );
};

export default Web3Prices;

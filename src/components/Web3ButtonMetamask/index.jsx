import React from 'react';
import Image from 'next/image';
import { doLogin } from "../../services/web3Services";

const ButtonMetamask = ({ setConnected, className }) => {
  const connectWallet = () => {
    doLogin()
      .then(() => setConnected(true))
      .catch(error => console.error("Erro ao conectar à MetaMask:", error));
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <a onClick={connectWallet} className={`w-100 fs-6 text-center align-items-center p-3 text-decoration-none custom-bg-color-blue text-light border rounded border-dark pointer ${className}`}>
        <Image
          src="/images/metamask.svg"
          alt="Metamask Connect"
          width={24}
          height={24}
          className="me-2"
        />
        <span>Conectar Metamask</span>
      </a>
    </div>
  );
};

export default ButtonMetamask;

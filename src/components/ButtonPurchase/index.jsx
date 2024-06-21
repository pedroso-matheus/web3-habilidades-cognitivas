import React from 'react';

const ButtonPurchase = ({ isValid, isProcessing, onClick }) => {
  let buttonLabel;
  let isDisabled = false;
  let opacity = 1;
  let cursor = 'pointer';

  if (!isValid) {
    buttonLabel = 'PREENCHA OS CAMPOS ...';
    isDisabled = true;
    opacity = 0.7;
    cursor = 'default';
  } else if (isProcessing) {
    buttonLabel = 'REALIZANDO INSCRIÇÃO ...';
    isDisabled = true;
    opacity = 0.7;
    cursor = 'default';
  } else {
    buttonLabel = 'FINALIZAR INSCRIÇÃO E PAGAR';
    isDisabled = false;
    opacity = 1;
    cursor = 'pointer';
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <a
        type="button"
        className="fs-6 text-center align-items-center p-3 px-5 text-decoration-none custom-bg-color-orange text-light rounded"
        onClick={onClick}
        style={{ opacity, cursor, pointerEvents: isDisabled ? 'none' : 'auto' }}
      >
        {buttonLabel}
      </a>
    </div>
  );
};

export default ButtonPurchase;

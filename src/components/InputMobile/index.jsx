import React, { useState, useEffect } from 'react';
import LabelInput from '../LabelInput';

const InputMobile = ({ value, onChange, isValid, setIsValid }) => {
  const [touched, setTouched] = useState(false);

  const formatMobile = (mobile) => {
    const cleaned = mobile.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  };

  const validateMobile = (mobile) => {
    const cleaned = mobile.replace(/\D/g, '');
    return /^\d{11}$/.test(cleaned);
  };

  useEffect(() => {
    setIsValid(validateMobile(value));
  }, [value, setIsValid]);

  const handleBlur = () => setTouched(true);

  return (
    <LabelInput
      label="Celular"
      type="tel"
      value={formatMobile(value)}
      onChange={(e) => {
        const numericValue = e.target.value.replace(/\D/g, '').slice(0, 11);
        onChange({ ...e, target: { ...e.target, value: numericValue } });
      }}
      onBlur={handleBlur}
      isValid={!touched || isValid}
      errorMessage="Por favor, insira um número de celular válido."
    />
  );
};

export default InputMobile;

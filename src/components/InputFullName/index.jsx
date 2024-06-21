import React, { useState, useEffect } from 'react';
import LabelInput from '../LabelInput';

const InputFullName = ({ value, onChange, isValid, setIsValid }) => {
  const [touched, setTouched] = useState(false);

  const validateFullName = (name) => {
    return name.trim().length > 0;
  };

  useEffect(() => {
    setIsValid(validateFullName(value));
  }, [value, setIsValid]);

  const handleBlur = () => setTouched(true);

  return (
    <LabelInput
      label="Nome Completo"
      type="text"
      value={value}
      onChange={onChange}
      onBlur={handleBlur}
      isValid={!touched || isValid}
      errorMessage="Por favor, insira um nome válido."
    />
  );
};

export default InputFullName;

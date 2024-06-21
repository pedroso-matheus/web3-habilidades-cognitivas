import React, { useState, useEffect } from 'react';
import LabelInput from '../LabelInput';

const InputEmail = ({ value, onChange, isValid, setIsValid }) => {
  const [touched, setTouched] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    setIsValid(validateEmail(value));
  }, [value, setIsValid]);

  const handleBlur = () => setTouched(true);

  return (
    <LabelInput
      label="Email"
      type="email"
      value={value}
      onChange={onChange}
      onBlur={handleBlur}
      isValid={!touched || isValid}
      errorMessage="Por favor, insira um email válido."
    />
  );
};

export default InputEmail;

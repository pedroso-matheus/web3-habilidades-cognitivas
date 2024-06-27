"use client";

import React, { useState, useEffect } from 'react';
import InputEmail from '../InputEmail';
import InputFullName from '../InputFullName';
import InputMobile from '../InputMobile';

const Web3CheckoutForm = ({ email, setEmail, fullName, setFullName, mobile, setMobile, setIsFormValid }) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFullNameValid, setIsFullNameValid] = useState(false);
  const [isMobileValid, setIsMobileValid] = useState(false);

  useEffect(() => {
    setIsFormValid(isEmailValid && isFullNameValid && isMobileValid);
  }, [isEmailValid, isFullNameValid, isMobileValid, setIsFormValid]);

  return (
    <div>
      <InputEmail 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
      />
      <InputFullName 
        value={fullName} 
        onChange={(e) => setFullName(e.target.value)} 
        isValid={isFullNameValid}
        setIsValid={setIsFullNameValid}
      />
      <InputMobile 
        value={mobile} 
        onChange={(e) => setMobile(e.target.value)} 
        isValid={isMobileValid}
        setIsValid={setIsMobileValid}
      />
    </div>
  );
};

export default Web3CheckoutForm;

"use client";

import { useEffect } from 'react';
import { fbCheckout } from '../FacebookPixel/utils';

const FbCheckout = () => {
  useEffect(() => {
    fbCheckout();
  }, []);

  return null;
};

export default FbCheckout;

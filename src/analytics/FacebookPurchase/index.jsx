"use client";

import { useEffect } from 'react';
import { fbPurchase } from '../FacebookPixel/utils';

const FbPurchase = () => {
  useEffect(() => {
    fbPurchase();
  }, []);

  return null;
};

export default FbPurchase;

export const fbPageview = () => {    
    if (typeof window !== 'undefined') {
        const trackCheckout = () => {
          if (window.fbq) {         
            window.fbq('track', 'PageView');
          }
        };  
        setTimeout(trackCheckout, 2000);
    }    
  };
  
  export const fbCheckout = () => {
    if (typeof window !== 'undefined') {
      const trackCheckout = () => {
        if (window.fbq) {         
          window.fbq('track', 'InitiateCheckout');
        }
      };  
      setTimeout(trackCheckout, 2000);
    }
  };

export const fbPurchase = () => {

    if (typeof window !== 'undefined') {
        const trackCheckout = () => {
          if (window.fbq) {         
            window.fbq('track', 'Purchase', {value: 197.00, currency: 'BRL'});
          }
        };  
        setTimeout(trackCheckout, 2000);
    } 
};
const Price = ({ price, salesPrice, installments, className }) => {

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className={className}>
      <p className="custom-color-light-blue">
        <span className="fs-5">De <s>{formatCurrency(parseFloat(price))}</s> por </span><br />
        {installments ? (
          <span className="fs-6">
            {installments}x de R$ {formatCurrency(parseFloat(salesPrice) / installments)}
          </span>
        ) : (
          <span className="fs-6">apenas {formatCurrency(parseFloat(salesPrice))} BNB</span>
        )}
      </p>
    </div>
  );
};

export default Price;


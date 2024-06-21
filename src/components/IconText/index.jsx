
const IconText =   ({ text, iconClass, textColor, responsive = false, className }) => {

  return (
    <>
      {!responsive ? (
        <div className={"d-flex align-items-center "+className}>
          <i className={"bi bi-check-circle me-2 "+iconClass} />
          <span className={"text-start ms-2 "+textColor} >{text}</span>
        </div> 
        
      ) : (        
        <div className={`d-flex flex-column flex-md-row align-items-center p-3 ${className}`}>
          <div className="text-center text-md-start">
            <i
              className={"bi bi-check-circle mb-2 mb-md-0 me-0 me-md-4 "+iconClass}
              style={{ fontSize: '3rem' }} // Ajuste o tamanho conforme necessário
            ></i>
          </div>
          <span className={`text-center text-md-start ${textColor}`}>
            {text}
          </span>
        </div>  
      ) }
    </>
  )
};

export default IconText;

const ButtonForm = ({ label, onClick, disabled, labelDisabled, className, loading, loadingLabel }) => {
  return (      
    <div className="d-flex justify-content-center mt-3">
      {!disabled ? (
        <a
          onClick={onClick}
          className={`fs-6 text-center align-items-center p-3 px-5 text-decoration-none custom-bg-color-orange text-light rounded pointer ${className}`}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          <span>{loading ? loadingLabel : label}</span>
        </a>
      ) : (
        <a
          onClick={onClick}
          className={`text-center fs-6 align-items-center p-3 px-5 text-decoration-none custom-bg-color-orange text-light rounded ${className}`}
          style={{ opacity: 0.7 }}
        >
          <span>{labelDisabled}</span>
        </a>          
      )}
    </div>
  );
};

export default ButtonForm;

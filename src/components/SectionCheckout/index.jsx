const SectionCheckout = ({ children, title }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="text-start shadow text-dark bg-white rounded p-4 p-md-5 col-lg-10">
          <h1 className="text-center text-dark mb-4">{title}</h1>
          <div className="row">
              {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCheckout;


const ContainerBordered = ({ children, title }) => {
  return (
      <div className="col-lg-6 mb-4 mb-md-0">
        <div className="d-flex flex-column align-items-center bg-white border py-4 p-3 p-md-4 rounded mx-auto border-dark">
            <h2 className="text-dark text-center h5 mb-3">{title}</h2>
              {children}
        </div>
      </div>
  );
};

export default ContainerBordered;

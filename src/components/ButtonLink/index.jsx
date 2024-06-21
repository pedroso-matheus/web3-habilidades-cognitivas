const ButtonLink = ( { href, label, className } ) => {
    
  return (
    <div className={className}>
      <a className='custom-bg-color-orange rounded text-decoration-none fs-5 px-5 py-3' href={href} >
        <span className="text-white">{label}</span>
      </a>
    </div>        
  );
};

export default ButtonLink;
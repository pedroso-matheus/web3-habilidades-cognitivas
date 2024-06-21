import IconText from '../IconText';

const ItemsList = ({ items, iconClass, textColor, responsive, className }) => {
  return (
    <div>
      <div className="d-flex flex-column w-100 p-2 flex-start">
        {items.map((item, index) => (
          <IconText 
            key={index} 
            text={item.text} 
            iconClass={iconClass} 
            textColor={textColor}
            responsive={responsive} 
            className={className}            
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;

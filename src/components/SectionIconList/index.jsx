import Section from '../Section';
import ItemsList from '../ItemsList';

const SectionIconList = ({ title, items, responsive, className }) => {
  return (
    <Section className={className} title={title} lineColor="custom-bg-color-orange">
      <ItemsList
        items={items.map(item => ({ text: item }))} 
        iconClass="custom-color-orange"
        textColor="dark"
        responsive={responsive}
        className="fs-5 text-start pb-3 px-3 mx-md-5 border rounded" 
      />
    </Section>
  );
};

export default SectionIconList;

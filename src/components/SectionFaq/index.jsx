import Section from '../Section';
import Accordion from '../Accordion';

const SectionFaq = ({ className, questions }) => {
  return (
    <Section className={className} title={"Perguntas Frequentes"} lineColor="custom-bg-color-orange">
       <Accordion items={questions} className={className} />
    </Section>
  );
};

export default SectionFaq;

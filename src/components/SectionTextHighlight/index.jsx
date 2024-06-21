
import Section from '../Section';

const SectionTextHighlight = ({ className, textSize, text }) => {
  return (
    <Section className={className}>
      <p className={'fs-2 '+textSize+' mx-3'}>{text}</p>
    </Section>
  );
};

export default SectionTextHighlight;

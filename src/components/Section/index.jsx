import Container from "../Container";
import Grafism from "../Grafism";
import Line from "../Line";

const Section = ({ children, className, title, lineColor, grafismColor }) => {
  return (
    <div className={className}>
      <Container>
        <div className="pt-5 pb-3 align-items-center justify-content-center text-center">
          {title && (
            <>
              <h2 style={{ textTransform: 'uppercase' }}>{title}</h2>
              <Line color={lineColor} />
            </>
          )}
          {children}
          <div className="mt-3">
            <Grafism width={60} height={51} color={grafismColor} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section;

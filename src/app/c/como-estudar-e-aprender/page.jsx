import HeaderCourses from '../../../components/HeaderCourses';
import Footer from '../../../components/Footer';
import SectionCallToAction from '../../../components/SectionCallToAction';
import SectionTextHighlight from '../../../components/SectionTextHighlight';
import SectionIconList from '../../../components/SectionIconList';
import SectionFaq from '../../../components/SectionFaq';

import { faq } from '../../../config/siteInfo';
import { courses } from '../../../config/courses';

export async function generateMetadata({  }) {

  return {
    title: "Como Estudar e Aprender | HabilidadesCognitivas.com",
    description: "Neurociências e psicologia aplicadas ao Estudos",
  };
}

const ComoEstudarAprender = () => {
 
  const course = courses.find(course => course.url === "como-estudar-e-aprender");

  return (
    <>    
      <HeaderCourses 
        title={course.title} 
        description={course.description} 
        type={course.type}
      />

      <SectionIconList 
        title="Ao final do curso você vai:"
        items={course.outcomes} 
        responsive={true}
      />

      <SectionTextHighlight 
        className="custom-bg-color-dark-blue custom-color-light-blue py-5"            
        text={course.highLights[0]} 
      />

      <SectionIconList             
        title="Para quem é este curso?"
        items={course.targetAudience} 
        responsive={true}
      />

      <SectionTextHighlight 
        className="custom-bg-color-dark-blue custom-color-light-blue py-5"            
        text={course.highLights[1]} 
      />        

      <SectionFaq 
        questions={faq} 
        className="mb-4" 
      />

      <SectionCallToAction 
        cta={course.cta} 
        price={course.web3.bnbPrice*2}
        salesPrice={course.web3.bnbPrice}
        checktouLink={'/finalizar-inscricao/'+course.url}
      />

      <Footer />
    </>
  );
};

export default ComoEstudarAprender;

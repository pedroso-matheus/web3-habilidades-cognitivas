import SectionCoursesGrid from "@/components/SectionCoursesGrid";
import Footer from "@/components/Footer";
import HeaderHome from "@/components/HeaderHome";
import SectionTextHighlight from "@/components/SectionTextHighlight";

import { courses } from "@/config/courses";

export default function Home() {

  return (
    <main>

      <HeaderHome />
                     
      <SectionCoursesGrid 
        courses={courses} 
        title="Cursos e Treinamentos"               
      />      

      <SectionTextHighlight 
        className="custom-bg-color-dark-blue custom-color-light-blue py-2"
        textSize="fs-4"            
        text={"Todos os cursos são baseados no que há de mais novo nas neurociências e psicologia e possuem linguagem simples para que seja possível entendê-los mesmo sem conhecimentos prévios nessas áreas"} 
      />     

      <Footer/>    
    </main>
  );
}
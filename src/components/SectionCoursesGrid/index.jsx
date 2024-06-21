import Course from "../Course";
import Section from "../Section";

const SectionCoursesGrid = ({ courses, className, title }) => {
    return (
        <Section className={className} title={title} lineColor="custom-bg-color-orange" grafismColor="dark">                        
            <div className="container">
                <div className="row justify-content-center">
                    {courses.map((course, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
                            <Course 
                                title={course.slug} 
                                image={course.image} 
                                description={course.title} 
                                link={"c/"+course.url} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SectionCoursesGrid;

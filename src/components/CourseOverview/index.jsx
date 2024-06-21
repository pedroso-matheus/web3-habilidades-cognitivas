import React from "react";
import Image from "next/image";

const CourseOverview = ({ course }) => (
  <>
    <div className="mb-3">
      <Image
        src={course.image}
        alt={`Imagem do curso ${course.title}`}
        width={100}
        height={100}
        priority        
        className="w-100 img-fluid rounded"
      />
    </div>
    <div className="d-flex flex-column align-items-start">
      <h2 className="text-dark fs-4">{course.title}</h2>
    </div>
  </>
);

export default CourseOverview;

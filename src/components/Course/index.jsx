import Image from "next/legacy/image";

const Course = ({ title, image, description, link }) => {
    return (
        <div className="bg-white m-0 p-3 pb-4 rounded shadow-lg d-flex flex-column justify-content-between text-start border" style={{ minHeight: '100%' }}>
            <div href={link}>
                <a href={link}>
                    <Image
                        src={image}
                        alt={title}
                        layout="responsive"
                        width={100}
                        height={50}
                        priority
                        className="img-fluid rounded"
                    />
                </a>
            </div>
            <div className="px-2 mb-2" >
                <a href={link} className="text-decoration-none">
                    <h3 className="text-dark mt-3 fs-4 fw-bold">{title}</h3>
                    <p className="text-dark fs-6 mb-0">{description}</p>
                </a>
            </div>
            <div className="px-2 mb-1">
                <a className="fs-6" href={link}>Mais informações <span>-&gt;</span></a>
            </div>
        </div>
    );
};

export default Course;

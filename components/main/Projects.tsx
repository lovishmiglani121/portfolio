import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  const handleClick = (url:any) =>{
    window.open(url,"_blank")
  }
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Link href="https://github.com/lovishmiglani121/DetectifyX">
          <ProjectCard
            src="/card1.png"
            title="DetectifyX"
            description="An object detection web app which is made up of machine learning model yolov8 with the integration of html and css with the backend of flask"
          />
        </Link>

        <Link href="https://www.figma.com/proto/x9AYGbtKCfeLOIiFamfOJD/Scheduler?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down&mode=design&t=Fwt60eN3DEb14RJY-1">
        <ProjectCard
          src="/card2.png"
          title="Scheduler Mobile App"
          description="Designed and developed a user-friendly task reminder app using UX design principles and methodologies."
        />
        </Link>

        <Link href="https://github.com/lovishmiglani121/brain_Tumor_Detector">
        <ProjectCard
          src="/Card3.png"
          title="Brain Tumor Detection "
          description="This impactful project contributes to healthcare by tumor detection. Using transfer learning, the model seamlessly integrated pre-trained VGG16 weights"
        />
        </Link>
      </div>
    </div>
  );
};

export default Projects;

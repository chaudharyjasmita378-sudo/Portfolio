import { ProjectDiv } from "../Common/ProjectDiv";
import Project1 from "../../assets/images/Portfolio.png";

export default function Projects() {
  return (
    <>
      <section>
        <div className="flex justify-center text-center gap-5 mt-20">
          <h1 className="text-3xl font-bold text-[#F1F3F5] ">My Projects</h1>
          <img
            src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/rocket.svg"
            alt="Rocket"
            className="w-10 h-10 text-[#F1F3F5]"
          />
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-15 mt-5">
          <ProjectDiv
            Title="Project 1"
            Description="This is the first project.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi atque natus corrupti repudiandae quos minus ipsum incidunt pariatur cum officia. Veritatis quibusdam"
            Technologies="React, TypeScript"
            Image={Project1}
          />
          <ProjectDiv
            Title="Project 2"
            Description="This is the second project.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi atque natus corrupti repudiandae quos minus ipsum incidunt pariatur cum officia. Veritatis quibusdam voluptas i"
            Technologies="React, TypeScript"
            Image={Project1}
          />
           <ProjectDiv
            Title="Project 2"
            Description="This is the second project.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi atque natus corrupti repudiandae quos minus ipsum incidunt pariatur cum officia. Veritatis q?"
            Technologies="React, TypeScript"
            Image={Project1}
          />
        </div>
      </section>
    </>
  );
}

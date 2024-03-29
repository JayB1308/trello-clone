import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Project } from "../core/types/project.type";
import { pathConstants } from "../router/pathConstants";
import { removeProject } from "../store";
import { MdDeleteOutline } from "react-icons/md";
import { images } from "../assets";
import { getRandomNumber } from "../utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [image] = useState<number>(getRandomNumber(0, 4));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToProject = () => {
    navigate(`${pathConstants.PROJECT}/${project.id}`);
  };

  const handleDeleteProject = () => {
    dispatch(removeProject({ id: project.id }));
  };

  return (
    <div className="w-1/5 bg-white shadow-lg rounded">
      <img
        src={images[image]}
        alt="card-header"
        className="h-36 w-full cursor-pointer"
        onClick={goToProject}
      />
      <div className="flex flex-col px-2 py-1">
        <div className="w-full flex items-center justify-between">
          <h1
            className="text-md font-semibold cursor-pointer"
            onClick={goToProject}
          >
            {project.title}
          </h1>
          <MdDeleteOutline size={24} onClick={handleDeleteProject} />
        </div>
        <p className="w-full text-sm mt-2">{project.description}</p>
      </div>
    </div>
  );
}

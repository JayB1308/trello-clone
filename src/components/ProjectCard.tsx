import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../types/Project.type";
import { pathConstants } from "../router/pathConstants";
import { getImage } from "../utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [image, setImage] = useState<string>("");
  const navigate = useNavigate();

  const fetchImage = async () => {
    const url = await getImage();

    if (url) {
      setImage(url);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const goToProject = () => {
    navigate(`${pathConstants.PROJECT}/${project.id}`);
  };

  return (
    <div className="w-48 bg-white shadow-lg rounded" onClick={goToProject}>
      <img src={image} alt="card-header" className="h-36 w-full" />
      <div className="flex flex-col px-2 py-1">
        <h1 className="text-md font-semibold">{project.title}</h1>
        <p className="w-full text-sm mt-2">{project.description}</p>
      </div>
    </div>
  );
}

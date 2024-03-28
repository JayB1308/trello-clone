import { Project } from "../types/Project.type";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  projects: Array<Project>;
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="mt-4 flex gap-4">
      {projects?.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}

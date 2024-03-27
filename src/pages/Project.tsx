import { useState, useEffect } from "react";
import { DashboardLayout } from "../layout/DashboardLayout";
import { useParams } from "react-router-dom";
import { Project as ProjectType } from "../types/Project.type";
import { apiInstance } from "../axios";
import { getImage } from "../utils";

export function Project() {
  const [project, setProject] = useState<ProjectType>();
  const [image, setImage] = useState<string>();
  const { projectId } = useParams();

  const getProject = async () => {
    const response = await apiInstance.get(`/projects/${projectId}`);

    if (response.status === 200) {
      const url = await getImage();

      setImage(url);
    }

    setProject(response.data);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full h-screen flex mt-4">
        <div className="w-1/4 flex flex-col h-3/4 bg-gray-200 rounded-md mt-5 shadow-md">
          <img src={image} alt="" className="h-48 px-2 py-3 rounded-md" />
        </div>
      </div>
    </DashboardLayout>
  );
}

import { useEffect, useState } from "react";
import { apiInstance } from "../axios";
import { Projects } from "../components/Projects";
import { DashboardLayout } from "../layout/DashboardLayout";

export function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState<number>(0);

  const getProjects = async () => {
    const response = await apiInstance.get(`/projects?_page=${page}&_limit=10`);
    setProjects(response.data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full border-b-2 border-slate-700 flex items-center justify-between px-2 py-2">
        <h1 className="text-3xl font-semibold text-slate-600">Projects</h1>
      </div>
      <div className="px-3">
        <Projects projects={projects} />
      </div>
    </DashboardLayout>
  );
}

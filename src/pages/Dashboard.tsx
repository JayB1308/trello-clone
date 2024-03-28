import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Projects } from "../components/Projects";
import { CreateProject } from "../components/CreateProjects";
import { DashboardLayout } from "../layout/DashboardLayout";
import { ModalLayout } from "../layout/ModalLayout";
import { IoIosAddCircleOutline } from "react-icons/io";
import { open } from "../store";

export function Dashboard() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalId = useSelector((state) => state.modal.id);
  const [page, setPage] = useState<number>(0);

  return (
    <DashboardLayout>
      {isOpen && modalId === "create-project" && (
        <ModalLayout>
          <CreateProject />
        </ModalLayout>
      )}
      <div className="w-full border-b-2 border-slate-700 flex items-center justify-between px-2 py-2 mt-3">
        <h1 className="text-3xl font-semibold text-slate-600">Projects</h1>
        <button
          className="rounded-full w-1/6 bg-blue-600 text-white flex items-center justify-between px-2 py-1"
          onClick={() => dispatch(open({ id: "create-project" }))}
        >
          <IoIosAddCircleOutline size={28} />
          Create Project
        </button>
      </div>
      <div className="px-3">
        <Projects projects={projects} />
      </div>
    </DashboardLayout>
  );
}

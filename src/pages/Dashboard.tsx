import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Projects } from "../components/Projects";
import { CreateProject } from "../components/CreateProjects";
import { DashboardLayout } from "../layout/DashboardLayout";
import { ModalLayout } from "../layout/ModalLayout";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { open } from "../store";
import { RootState } from "../store/root-state.type";
import { PROJECTPERPAGES } from "../core/constants";
import { Project } from "../core/types/project.type";

export function Dashboard() {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.project.projects);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalId = useSelector((state: RootState) => state.modal.id);
  const [currentProjects, setCurrentProjects] = useState<Array<Project>>([]);
  const [totalPages, setTotalPages] = useState<Array<number>>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const getCurrentProjects = () => {
    const startIndex = currentPage * PROJECTPERPAGES;
    const endIndex = startIndex + PROJECTPERPAGES;

    const currentPageProjects = projects.slice(startIndex, endIndex);

    setCurrentProjects(currentPageProjects);

    setTotalPages(
      Array.from(
        { length: Math.ceil(projects.length / PROJECTPERPAGES) },
        (_, index) => index + 1
      )
    );
  };

  useEffect(() => {
    getCurrentProjects();
  }, [currentPage, projects]);

  return (
    <DashboardLayout>
      {isOpen && modalId === "create-project" && (
        <ModalLayout>
          <CreateProject />
        </ModalLayout>
      )}
      <div className="w-full flex flex-col items-center">
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
        <div className="px-3 w-full">
          <Projects projects={currentProjects} />
        </div>
        {totalPages.length !== 0 && (
          <div className="w-1/3 mt-10 border-2 flex items-center justify-between px-2 py-1 rounded-md">
            <button
              className={`${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 0 ? true : false}
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
              }}
            >
              <FaChevronCircleLeft size={28} />
            </button>
            <div className="flex items-center gap-3">
              {totalPages.length > 0 &&
                totalPages.map((pageNo) => {
                  return (
                    <p
                      className={`${
                        pageNo === currentPage + 1
                          ? "bg-blue-700 text-white text-md rounded-full px-2"
                          : "text-xs"
                      } font-bold`}
                    >
                      {pageNo}
                    </p>
                  );
                })}
            </div>
            <button
              className={`${
                currentPage === totalPages.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
              disabled={currentPage === totalPages.length - 1}
            >
              <FaChevronCircleRight size={28} />
            </button>
          </div>
        )}

        {totalPages.length === 0 && (
          <h1 className="text-2xl font-bold border-2 border-gray-500 px-2 py-1 rounded-md">
            No Projects to display
          </h1>
        )}
      </div>
    </DashboardLayout>
  );
}
